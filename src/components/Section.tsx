import data from "@/data.json"

export default function Section({section}: any) {
   const obj = data.find(item => item.id === section)
    return (
        <>
            <h2>{obj ? obj.title : null}</h2>
            <p>{obj ? obj.title : null}</p>
        </>
    )
}