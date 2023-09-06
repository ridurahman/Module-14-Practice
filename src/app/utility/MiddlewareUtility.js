import { NextResponse } from "next/server";
import { VerifyToken } from "@/app/utility/JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");

    // console.log("Middleware Utility before verify");
    //console.log(token["value"]);
    let payload = await VerifyToken(token["value"]);
    console.log(
      "🚀 ~ file: MiddlewareUtility.js:11 ~ CheckCookieAuth ~ payload:",
      payload
    );
    // console.log(payload);
    // console.log(payload["email"]);
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);

    // console.log("Middleware Utility");
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
