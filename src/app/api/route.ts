export default async function POST(request: Request) {
    try{
        const data = await fetch("http://localhost:3000/contact",{
            method:"POST",
            body:JSON.stringify({
                email: request,
                subject: request,
                message:request

            })
        });
    }catch(e){
        console.error(e);
    }

}