import { getProject } from "@/lib/serverActions";
import styles from "./slugpage.module.css";
import Image from "next/image";
import TechBatch from "@/components/techbatch/TechBatch";
import Link from "next/link";

const Slug = async ({ params }) => {
  const { slug } = params;
  const project = await getProject(slug);
  if (!project._id) throw new Error("Project not found");

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.headingContainer}>
          <h1>{project.title}</h1>
          <h3>{project.status}</h3>
        </div>
        <p>
          {project.desc}
        </p>

        {/* Only render techstack if its present */}
        {project.techStack && (
          <>
            <h1>Tech Stack</h1>
            <div className={styles.techContainer}>
              {project.techStack.map((tech, index) => {
                return <TechBatch key={index} tech={tech} />;
              })}
            </div>
          </>
        )}

        <div className={styles.linkContainer}>
          <Link href={project.githubLink} target="_blank">
            Source Code
          </Link>
          {project.projectLink && (
            <Link href={project.projectLink} target="_blank">
              Live Project
            </Link>
          )}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={project.img ? project.img : `/defaultProject.jpg`}
          alt={project.title}
          fill
        />
      </div>
    </div>
  );
};

export default Slug;
