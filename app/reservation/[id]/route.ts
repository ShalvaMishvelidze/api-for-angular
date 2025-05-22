import { headers } from "@/utils/headers";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers });
}

export async function GET(req: NextRequest) {
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

export async function DELETE(req: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json(
      { message: "Successfully deleted reservation" },
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

export async function PUT(req: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json(
      { message: "Success" },
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
