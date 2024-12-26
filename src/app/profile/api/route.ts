import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    const requestHeader=new Headers(request.headers);
    const headerList=await headers();
    (await cookies()).set("resultsPage","20")
    console.log(headerList.get("Authorization"))
    console.log(requestHeader.get("Authorization"))
    console.log(request.cookies.get("theme"))
    console.log((await cookies()).get("resultsPage"))
    return new Response("<h1>Profile API data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark",
        }
    })
    
}