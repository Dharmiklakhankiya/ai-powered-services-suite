import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './db';
import { createCheckoutSession, constructEvent } from './services/stripe.service';
import { createCalendarEvent } from './services/calendar.service';
import { sendConfirmationEmail } from './services/email.service';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = constructEvent(req.body, sig as string);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const bookingId = session.metadata?.bookingId;

    if (bookingId) {
      try {
        const booking = await prisma.booking.update({
          where: { id: bookingId },
          data: { status: 'PAID', stripeSessionId: session.id },
        });

        await createCalendarEvent(booking);
        await sendConfirmationEmail(booking);

        console.log(`Booking ${bookingId} confirmed successfully.`);
      } catch (err) {
        console.error('Error processing webhook:', err);
      }
    }
  }

  res.json({ received: true });
});

app.use(express.json());

app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, phone, date, agenda } = req.body;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        date,
        agenda,
        status: 'PENDING',
      },
    });

    const session = await createCheckoutSession(booking);

    res.status(201).json({
      success: true,
      checkoutUrl: session.url,
      bookingId: booking.id,
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ success: false, error: 'Failed to create booking' });
  }
});

app.listen(port, () => {
  console.log(`Booking service running on port ${port}`);
});
