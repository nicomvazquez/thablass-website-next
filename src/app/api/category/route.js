import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const res = await prisma.categorys.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const req = await request.json();
  const res = await prisma.categorys.create({
    data: req,
  });
  return NextResponse.json(res);
}
