import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ project }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div>
          <Image
            src={project.img ? project.img : `/defaultProject.jpg`}
            alt={project.title}
            width={380}
            height={250}
          />
        </div>
        <div className={styles.projectInfoContainer}>
          <h1 className={styles.heading}>{project.title}</h1>
          <div>
            Status:
            <span className={styles.status}>
              {project.status === "ongoing" ? "On Going" : "Completed"}
            </span>
          </div>
          <p className={styles.desc}>{project.desc.slice(0, 200)}...</p>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            Goto Project
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
