import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (booking: any) => {
  try {
    const info = await transporter.sendMail({
      from: `"Consulting Booking" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: 'Consultation Booking Confirmed',
      text: `Hello ${booking.name},\n\nYour consultation on ${booking.date} has been confirmed.\n\nAgenda: ${booking.agenda}\n\nWe will call you at ${booking.phone}.\n\nThank you!`,
      html: `<p>Hello <b>${booking.name}</b>,</p><p>Your consultation on <b>${booking.date}</b> has been confirmed.</p><p><b>Agenda:</b> ${booking.agenda}</p><p>We will call you at <b>${booking.phone}</b>.</p><p>Thank you!</p>`,
    });

    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    return null;
  }
};
