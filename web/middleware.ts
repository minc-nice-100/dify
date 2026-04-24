// 必须声明为 edge 运行时
export const runtime = 'edge'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 一个空的中间件，什么都不做，直接放行
  // 目的只是为了满足 OpenNext 的 edge 运行时要求
  return NextResponse.next()
}

// 可选：配置匹配路径，不写则对所有路由生效
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
