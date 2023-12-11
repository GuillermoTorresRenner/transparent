// import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/utils/db";
import bcrypt from "bcrypt";

// const prisma = new PrismaClient();
export const POST = async (request) => {
  const data = await request.json();
  data.password = bcrypt.hashSync(data.password, 10);
  const createUser = await prisma.users.create({ data });

  return NextResponse.json(createUser);
};
