import { getProjects } from "@/lib/serverActions";
import styles from "./projects.module.css";
import Card from "@/components/cards/Card";

const Work = async () => {
  const projects = await getProjects();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>


      {projects.reverse().map((project) => {
        return (
          <Card project={project} key={project._id}/>
        );
      })}
    </div>
  );
};

export default Work;
