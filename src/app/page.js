import MyWriter from "@/components/typewriter/MyWriter";
import styles from "./home.module.css";
import Image from "next/image";
import SkillSection from "@/components/skillsection/SkillSection";
import Link from "next/link";
import CpSection from "@/components/cpsection/CpSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h2>
            <span>Hello</span>, This is me!
          </h2>
          <h1 className={styles.name}>Priyanshu Batham</h1>
          <MyWriter />
          <div className={styles.btnContainer}>
            {/* <button className={styles.btnResume}>Resume</button> */}
            <Link href="/projects" className={styles.btnGithub}>
              Projects
            </Link>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Image src="/heroImg.png" alt="heroImg" fill />
        </div>
      </div>
      {/* Skill Section */}
      <SkillSection />

      {/* CP Section */}
      <CpSection />
    </>
  );
}
