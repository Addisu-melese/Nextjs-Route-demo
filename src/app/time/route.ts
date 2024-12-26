
export const dynamic="force-dynamic";/*make the catch is dynamic */
export async function GET(){
    return   Response.json({
        time:new Date().toLocaleString()
    });
}