import { headers } from "@/utils/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json(
      {
        id: "1",
        guestName: "John Doe",
        guestEmail: "john@doe.com",
        roomNumber: 101,
        checkInDate: "2023-10-01",
        checkOutDate: "2023-10-05",
      },
      { status: 200, headers: headers }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
