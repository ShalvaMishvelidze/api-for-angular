import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reservationData = await req.json();
  try {
    const newReservation = await prisma.reservation.create({
      data: {
        ...reservationData,
        checkInDate: new Date(reservationData.checkInDate),
        checkOutDate: new Date(reservationData.checkOutDate),
      },
    });

    return NextResponse.json(newReservation, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
