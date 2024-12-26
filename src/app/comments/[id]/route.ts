import { request } from "node:http";
import {comments} from "../data"
import { redirect } from "next/navigation";
export async function GET(request:Request,{params}:{params:{id:string}}){
    if(parseInt(params.id)>comments.length){
        redirect("/comments");
    }
 const comment=comments.find((item)=>item.id===parseInt(params.id));
    return  Response.json(comment);
}
export async function PATCH(request:Request,{params}:{params:{id:string}}){
    const comment=await request.json();
    const {text}=comment;
    const index=comments.findIndex((item)=>item.id===parseInt(params.id));
    comments[index].text=text;
    return Response.json(comments[index])
}
export async function DELETE(request:Request,{params}:{params:{id:string}}){
    const comment=await request.json();
    const {text}=comment;
    const index=comments.findIndex((item)=>item.id===parseInt(params.id));
    const deletecom=comments[index];
    comments.splice(index,1);
    return Response.json(deletecom)
}