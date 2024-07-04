"use client";
import { getProjects } from "@/lib/clientActions";
import styles from "./projects.module.css";
import Card from "@/components/cards/Card";
import { useEffect, useState } from "react";

const Work = async () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //getting all the projects
  const getData = async () => {
    const data = await getProjects();
    setProjects(data?.data?.reverse());
  };
  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      {/* if loading */}
      {isLoading && (
        <h1 className={styles.loading}>Loading...</h1>
      )}

      {/* if not loading and projects are available */}
      {!isLoading &&
        projects &&
        projects.reverse().map((project) => {
          return <Card project={project} key={project._id} />;
        })}
    </div>
  );
};

export default Work;
