import { SignJWT, jwtVerify } from "jose";
export async function CreateToken() {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_EXPIRATION)
    .sign(secret);

  return token;
}

export async function VerifyToken() {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
