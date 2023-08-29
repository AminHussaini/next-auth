import { NextResponse } from "next/server";
// import { verify } from "./services/jwt_sign_verify";
import { parseCookies } from 'nookies';

const secret = process.env.SECRET || "secret";

export default async function middleware(req) {
  

  const token = req.cookies.get("token");
  // const token = req.cookies.get("token")?.value;
  // console.log({req})
  // console.log(token?.value)
  console.log(token)
  const url = req.url;
  const {pathname} = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (jwthe === undefined) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      // await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}