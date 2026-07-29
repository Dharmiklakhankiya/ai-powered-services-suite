import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const bookingServiceUrl = process.env.BOOKING_SERVICE_URL || "http://localhost:4000";
    const response = await fetch(`${bookingServiceUrl}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.error || "Failed to process booking" },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("API Error [POST /api/booking]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to connect to booking service" },
      { status: 500 }
    );
  }
}
