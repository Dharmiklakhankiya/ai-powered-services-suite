import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CALENDAR_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
  process.env.FRONTEND_URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export const createCalendarEvent = async (booking: any) => {
  try {
    const event = {
      summary: `Consultation with ${booking.name}`,
      description: `Agenda: ${booking.agenda}\nPhone: ${booking.phone}\nEmail: ${booking.email}`,
      start: {
        date: booking.date,
        timeZone: 'UTC',
      },
      end: {
        date: booking.date,
        timeZone: 'UTC',
      },
      attendees: [{ email: booking.email }],
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return null;
  }
};
