import { NextResponse } from 'next/server';

import db from '@/utils/db';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany();
  return NextResponse.json(todos);
};

export const POST = async (request: Request) => {
  const { content } = await request.json();
  const todo = await db.todo.create({ data: { content } });
  return NextResponse.json(todo);
};
