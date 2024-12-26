import { headers } from "next/headers";
import { comments } from "./data";
import { NextRequest } from "next/server";
export async function GET(request:NextRequest){
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get("query");
    const filterComment=query?comments.filter((item)=>item.text.includes(query)):comments;
    return  Response.json(filterComment);
}
export async function POST(request:NextRequest){
    const comment=await request.json();
    const newcomment={
        id:comments.length+1,
        text:comment.text
    }
    comments.push(newcomment);
    return  new Response(JSON.stringify(newcomment),
{
    headers:{
        "Content-Type":"application/json",
    },
    status:201,
}
);
}