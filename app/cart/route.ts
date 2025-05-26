import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
  try {
    return NextResponse.json(
      [
        {
          id: 1,
          name: "Dish Soap Dispenser",
          price: 18.99,
          image_url: "http://dummyimage.com/108x100.png/ff4444/ffffff",
        },
        {
          id: 2,
          name: "Carrot and Celery Sticks",
          price: 2.99,
          image_url: "http://dummyimage.com/101x100.png/cc0000/ffffff",
        },
        {
          id: 3,
          name: "Organic Coconut Sugar",
          price: 4.19,
          image_url: "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
        },
        {
          id: 4,
          name: "Tomato Basil Pasta Sauce",
          price: 3.99,
          image_url: "http://dummyimage.com/235x100.png/ff4444/ffffff",
        },
      ],
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const product = await req.json();
  try {
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: NextRequest) {
  try {
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
