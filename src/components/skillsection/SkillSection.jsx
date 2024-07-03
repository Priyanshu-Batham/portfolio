import Image from "next/image";
import styles from "./skillsection.module.css";

const SkillSection = () => {
  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.heading}>My Skills</h1>
      <div className={styles.container}>
        <div className={styles.skillContainer}>
          <div className={styles.imgContainer}>
            <Image src="frontend.svg" alt="frontend" fill />
          </div>
          <h1 className={styles.skillHeading}>Frontend</h1>
          <p className={styles.skillDesc}>
            Worked with many libraries and frameworks in frontend including React, Next.js, Tailwind CSS. Frontend doesn't only mean styling but it also revolves around state management and complex interactions between components.
          </p>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.imgContainer}>
            <Image src="backend.svg" alt="backend" fill />
          </div>
          <h1 className={styles.skillHeading}>Backend</h1>
          <p className={styles.skillDesc}>
            Setting up a Backend server is one of the most challenging and interesting task in web development. I have worked on several server techs like Express, MongoDb, Next Stack and much more.
          </p>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.imgContainer}>
            <Image src="integration.svg" alt="intergration" fill />
          </div>
          <h1 className={styles.skillHeading}>Intergration</h1>
          <p className={styles.skillDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            ipsum obcaecati quos! Corrupti iste alias suscipit omnis mollitia!
            Cumque ad temporibus illum iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
