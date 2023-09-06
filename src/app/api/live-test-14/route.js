import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const payload = { email: "example@gmail.com", password: "123" }; // As thereone function is required taking payload instead of req.json
  let email = payload["email"];
  let password = payload["password"];
  if (email === "example@gmail.com" && password === "123") {
    const secret = new TextEncoder().encode("123-XYZ");
    let token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("example.com")
      .setExpirationTime("2h")
      .sign(secret);
    return NextResponse.json({
      status: true,
      message: "Login Success",
      token: token,
    });
  } else {
    return NextResponse.json({ status: false, message: "Login Failed" });
  }
}
