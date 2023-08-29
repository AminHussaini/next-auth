import { NextResponse } from "next/server";
import { parseCookies } from 'nookies';

export default async function middleware(req) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  try {
    const userIpResponse = await fetch("https://json.geoiplookup.io/", requestOptions);
    const userIpData = await userIpResponse.json();
    const userCountry = userIpData.country_name;
    console.log(userCountry)
    // const token = req.cookies.get("token");
    const token = req.cookies.get("token")?.value;
    // console.log({req})
    console.log({token})
   
    if (userCountry !== 'Pakistan' && req.url !== '/testing') {
      console.log("Redirecting user from Pakistan to /testing route");
      return NextResponse.rewrite(new URL('/testing', req.url))
    }
    if (token == undefined || token == null) {
      console.log("Redirect to login");
      return NextResponse.rewrite(new URL('/login', req.url))
    }
   
  } catch (error) {
    console.error("Error fetching user IP data:", error);
  }

  // Allow the request to continue processing
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|static|public|favicon.ico).*)',
};
