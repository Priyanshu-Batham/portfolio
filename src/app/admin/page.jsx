"use client";
import styles from "./admin.module.css";
import AdminCards from "@/components/admincards/AdminCards";
import { addProject, getProjects } from "@/lib/clientActions";
import Image from "next/image";
import { useEffect, useState } from "react";

const Admin = () => {
  //state to handle projects and error
  const [error, setError] = useState();
  const [projects, setProjects] = useState([]);

  //getting all the projects
  const getData = async () => {
    const data = await getProjects();
    setProjects(data?.data?.reverse());
  };
  useEffect(() => {
    getData();
  }, []);

  //to add new projects on form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //retrieving data from the Form
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      //converting strings to array of string
      if (key === "techStack") value = value.replace(/\s+/g, "").split(",");

      // removing whitespaces from slug
      if (key === "slug") value = value.replace(/\s+/g, "-");
      formDataObject[key] = value;
    });

    //calling the client controller/action to add new project
    const responseData = await addProject(formDataObject);

    // Handle success
    if (responseData.status === "success") {
      event.target.reset();
      window.location.reload();
      // alert("Project added successfully!");

      //Handle failure
    } else {
      setError("Slug Should be Unique");
      // alert("Slug Should be unique!");
    }
  };

  const handleLogout = async () => {
    const data = await fetch("/api/logout");
    const jsonData = await data.json();
    if (jsonData.status === "success") {
      window.location.href = "/login";
    }
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.topContainer}>
        <h1 className={styles.heading}>Confidential Admin Page</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        <h3 className={styles.error}>{error}</h3>

      </div>
      <div className={styles.middleContainer}>
        {/* taking input to create a new project */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" required placeholder="Title" name="title" />
          <input type="text" required placeholder="Slug" name="slug" />
          <textarea
            required
            rows={5}
            cols={30}
            placeholder="Description"
            name="desc"
          />
          <textarea
            required
            rows={5}
            cols={30}
            placeholder="Tech Stack"
            name="techStack"
          />
          <select name="status" required>
            <option value="">Select Status</option>
            <option value="ongoing">On Going</option>
            <option value="completed">Completed</option>
          </select>
          <input type="text" placeholder="Project Link" name="projectLink" />
          <input type="text" placeholder="Github Link" name="githubLink" />
          <input type="text" placeholder="Image Url" name="img" />
          <button type="submit">Add Project</button>
        </form>

        <div className={styles.imgContainer}>
          <Image src="admin.svg" alt="admin" fill />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        {projects &&
          projects.map((project) => {
            return (
              <AdminCards
                project={project}
                setError={setError}
                key={project._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Admin;
