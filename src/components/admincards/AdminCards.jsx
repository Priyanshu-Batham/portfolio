import { deleteProject } from "@/lib/clientActions";
import styles from "./adminCards.module.css";
import Link from "next/link";
import Image from "next/image";

const AdminCards = ({ project, setError }) => {
  const handleDelete = async () => {
    "use client";
    const res = await deleteProject(project.slug);
    if (res.status === "failure") {
      setError(res.message);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={project.img ? project.img : `/defaultProject.jpg`}
            alt={project.title}
            height={200}
            width={300}
          />
        </div>
        <div className={styles.projectInfoContainer}>
          <h1 className={styles.heading}>{project.title}</h1>
          <p className={styles.slug}>Slug: {project.slug}</p>
          <div>
            Status:
            <span className={styles.status}>
              {project.status === "ongoing" ? "On Going" : "Completed"}
            </span>
          </div>
          <p className={styles.desc}>{project.desc.slice(0, 100)}...</p>
          <div className={styles.btnContainer}>
            <Link href={`/projects/${project.slug}`} className={styles.link}>
              Goto Project
            </Link>
            <button className={styles.delBtn} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AdminCards;
