import { prisma } from "@/lib/prisma";
import { headers } from "@/utils/headers";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers });
}

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const reservation = await prisma.reservation.findUniqueOrThrow({
      where: { id },
    });
    return NextResponse.json(reservation, { status: 200, headers: headers });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.reservation.delete({
      where: { id },
    });

    return NextResponse.json({}, { status: 204, headers: headers });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updatedReservation = await req.json();

  try {
    const newReservation = await prisma.reservation.update({
      where: { id },
      data: {
        ...updatedReservation,
        checkInDate: new Date(updatedReservation.checkInDate),
        checkOutDate: new Date(updatedReservation.checkOutDate),
      },
    });
    return NextResponse.json(newReservation, {
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
