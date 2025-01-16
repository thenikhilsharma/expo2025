import dbConnect from "@/lib/dbConnect";
import Register from "@/modal/Register";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {startupName, email, startupSector, startupHQ, Linkedin, description } = await request.json();
  await dbConnect();
  await Register.create({ startupName, email, startupSector, startupHQ, Linkedin, description });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const userData = await Register.find();
  return NextResponse.json({ userData });
}