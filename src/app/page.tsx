import type {Metadata} from "next";
import styles from "./page.module.css"
import {remove} from "next/dist/build/webpack/loaders/resolve-url-loader/lib/file-protocol";

export const metadata: Metadata = {
  title: "Home",
  description: "This is home of my web CV",
};

function hover(event: React.MouseEvent<HTMLDivElement>) {
    const id = event.currentTarget.id;


}

export default function Home() {
  return (
      <div className={styles.gridContainer}>

        <div id={"sectionA"} className={styles.sectionA} >
          <div>
            <h1>About me</h1>
          </div>
          <div className={styles.profilePicture}/>
        </div>

        <div id={"sectionB"} className={styles.sectionB}>
          <h1>Carrier</h1>
        </div>
        <div id={"sectionC"} className={styles.sectionC}>
          <h1>Education</h1>
        </div>

        <div id={"sectionD"} className={styles.sectionD}>
          <h1>Experiences</h1>
        </div>

      </div>
  );
}
