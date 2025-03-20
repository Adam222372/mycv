export default function Contact() {
    return(
        <section className={"flex justify-center"}>
            <form action={"/contact"} method={"POST"} className={"mx-auto flex flex-col"}>

                <label htmlFor="email">Name</label>
                <input type={"email"} name={"email"} placeholder={"Email Address"}/>

                <label htmlFor={"subject"}>Subject</label>
                <input type={"text"} name={"subject"} placeholder={"Subject"}/>

                <label htmlFor={"notes"}>notes</label>
                <textarea name={"notes"}></textarea>
            </form>
        </section>
    )
}