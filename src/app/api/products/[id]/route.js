import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const res = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(res);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const res = await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: data
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const res = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
