export async function generateStaticParams(){
    const item = await fetch('https://...item').then((res)=>res.json())

    return(
        item.map((item)=>{
            Illegal: item.Illegal
        })
    )
}