import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    // Parse the URL-encoded body
    const formData = await request.text();
    const params = new URLSearchParams(formData);
    const username = params.get("username");
    const password = params.get("password");

    // Log the username to the console
    console.log("username: ", username);

    // Example: Basic authentication logic
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Set a cookie
      cookies().set({
        name: "token",
        value: "adminToken",
        httpOnly: true,
        // path: '/',
      });
      const response = NextResponse.json({
        message: "Login successful",
        status: "success",
      });
      //   response.headers.set("Set-Cookie", cookie);
      return response;
    } else {
      return NextResponse.json(
        { message: "Invalid credentials", status: "error" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "An error occurred", status: "error" },
      { status: 500 }
    );
  }
}
