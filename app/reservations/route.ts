import { prisma } from "@/lib/prisma";
import { headers } from "@/utils/headers";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: headers });
}

export async function GET() {
  const reservations = await prisma.reservation.findMany();
  try {
    return NextResponse.json(reservations, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
