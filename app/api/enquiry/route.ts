// app/api/enquiry/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST /api/enquiry
export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { event, name, surname, phone, email, message } = body;

    if (!event || !name || !surname || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure transporter (using Gmail or custom SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use "smtp.mailgun.org", "smtp.office365.com", etc.
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"Savannah Website" <${process.env.SMTP_USER}>`,
      to: "sricharanrayala24@gmail.com", // Receiver mail (Savannah Station email)
      subject: `New Enquiry from ${name} ${surname}`,
      text: `
        Event: ${event}
        Name: ${name} ${surname}
        Phone: ${phone}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending enquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
