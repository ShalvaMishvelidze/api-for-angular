import { headers } from "@/utils/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(
      [
        {
          id: "1",
          guestName: "John Doe",
          guestEmail: "john@doe.com",
          roomNumber: 101,
          checkInDate: "2023-10-01",
          checkOutDate: "2023-10-05",
        },
        {
          id: "2",
          guestName: "Jane Smith",
          guestEmail: "jane@smith.com",
          roomNumber: 102,
          checkInDate: "2023-10-02",
          checkOutDate: "2023-10-06",
        },
      ],
      {
        status: 200,
        headers: headers,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
