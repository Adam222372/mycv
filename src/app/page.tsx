import data from "@/data.json"
export default function Home() {
    return (
        <>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    );
}
