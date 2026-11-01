import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, service, message, consent, budget, timeline, honeypot } = body;

    // Spam honeypot protection: if hidden honeypot field is filled, reject silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief description of your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "You must consent to our privacy policy to submit an enquiry." },
        { status: 400 }
      );
    }

    // Log enquiry safely on the server
    console.log("[Code Rockers Enquiry Received]:", {
      fullName,
      email,
      company: company || "Not specified",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project enquiry has been logged successfully. An engineering director will reach out within 1 business day."
    });
  } catch (err: any) {
    console.error("[Enquiry API Error]:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error processing enquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
