import { NextRequest, NextResponse } from "next/server";

export async function POST(_: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json("Checkout Successful!", { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
