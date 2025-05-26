import { NextRequest, NextResponse } from "next/server";
import Data from "@/assets/mock-data.json";

export async function GET(req: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json(Data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
