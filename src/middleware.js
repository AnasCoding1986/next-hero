import { NextResponse } from "next/server"


// const user = true;
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const cookies = request.cookies.get('token');
    if(!cookies){
        return NextResponse.redirect(new URL('.login', request.url))
    }

    return NextResponse.next();
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashBoard', '/service'],
}