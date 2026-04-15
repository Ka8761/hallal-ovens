import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "orders.json");

// GET all orders
export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

// POST new order
export async function POST(req: Request) {
  const body = await req.json();

  const data = fs.readFileSync(filePath, "utf-8");
  const orders = JSON.parse(data);

  const newOrder = {
    id: Date.now(),
    ...body,
  };

  orders.push(newOrder);

  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

  return NextResponse.json({ success: true, order: newOrder });
}