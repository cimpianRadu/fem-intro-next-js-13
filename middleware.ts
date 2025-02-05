import { NextRequest, NextResponse } from 'next/server';

const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/', request.url));
};

export default middleware;

export const config = {
  matcher: '/todos',
};
