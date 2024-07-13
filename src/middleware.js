import { NextResponse } from "next/server"

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if(request.nextUrl.pathname.startsWith('/about')){
        return NextResponse.redirect(new URL('/blogs', request.url))
    }
  
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/about', '/service'],
// }