import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, date, timeSlot, timezone, notes, honeypot } = body;

    // Spam honeypot
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Meeting booked." });
    }

    if (!name || !email || !date || !timeSlot) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields: name, email, date, and time slot." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid business email." },
        { status: 400 }
      );
    }

    console.log("[Code Rockers Meeting Booked]:", {
      name,
      email,
      topic: topic || "Initial Consultation",
      date,
      timeSlot,
      timezone: timezone || "UTC",
      notes: notes || "None",
      bookedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      bookingId: `CR-MTG-${Date.now().toString(36).toUpperCase()}`,
      message: `Your strategy session has been scheduled for ${date} at ${timeSlot} (${timezone || "UTC"}). A calendar invitation has been prepared for ${email}.`
    });
  } catch (err: any) {
    console.error("[Meeting API Error]:", err);
    return NextResponse.json(
      { success: false, error: "Failed to schedule meeting. Please try again." },
      { status: 500 }
    );
  }
}
