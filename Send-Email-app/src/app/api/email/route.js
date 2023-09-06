import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let toEmail = searchParams.get("email");

  let transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  let myEmail = {
    form: "Test Email From Next JS Application<info@teamrabbil.com>",
    to: toEmail,
    subject: "Test Email From Next JS Application",
    text: "Test Email From Next JS Application",
  };

  try {
    let result = await transporter.sendMail(myEmail);
    return NextResponse.json({ msg: result });
  } catch (e) {
    return NextResponse.json({ msg: "Failed " });
  }
}
