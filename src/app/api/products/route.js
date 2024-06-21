import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const res = await prisma.product.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const data = await request.json();
  const res = await prisma.product.create({
    data: data,
  });
  return NextResponse.json(res);
}
