import { NextRequest, NextResponse } from "next/server";

/*matcher config approach start*/
// export function middleware(requset:NextRequest){
//     return NextResponse.redirect(new URL("/",requset.url));
// }
//  export const config={
//      matcher:"/profile",

//  }
/*matcher config approach end*/
/*conditional statment approach  start*/
// export function middleware(requset:NextRequest){
   
//      if(requset.nextUrl.pathname==="/profile"){
//          return NextResponse.redirect(new URL("/hello",requset.url));
//      }
// }
 /*conditional statment approach  end*/
 
 /*for cookies start*/
 export function middleware(requset:NextRequest){
   const response=NextResponse.next();
   const themePreference=requset.cookies.get("theme");
   if(!themePreference){
    response.cookies.set("theme","dark");
   }
   response.headers.set("Custom-Header","Custom- Value")
   return response;
}

 /*for cookies end*/