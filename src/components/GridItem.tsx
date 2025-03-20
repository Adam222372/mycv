import dataJson from "@/data.json"
import Image from "next/image";

interface DataItem {
    id: string,
    title: string,
    description: string,
    text: string,
    image?: string,
}

export default function GridItem() {
    return (
        <div>
            { dataJson.map((item: DataItem) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    { item.image !== "" &&
                        <Image src={`${item.image}`} alt={"Profile picture"} width={400} height={400} />
                    }
                    <p>{item.text}</p>
                </div>

            ))}
        </div>
    )
}