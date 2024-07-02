import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    // Example: Basic authentication logic
    cookies().delete("token");

    const response = NextResponse.json({
      message: "Logout successful",
      status: "success",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", status: "error" },
    );
  }
}
