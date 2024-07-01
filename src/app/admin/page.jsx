"use client";
import { addProject, getProjects } from "@/lib/clientActions";
import { useState, useEffect } from "react";

const Admin = () => {
  const [projects, setProjects] = useState();

  //had to make this function outside and then call inside useEffect else it was giving error 
  async function getData(){
    const data = await getProjects();
    setProjects(data.data);
  }

  //to fetch projects on page load
  useEffect(()=>{
    getData();
  }, [])

  //to add new projects on form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //retrieving data from the Form
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const responseData = await addProject(formDataObject);

    // Handle success
    if (responseData.status === "success") {
      event.target.reset();
      
      //refresh the client side project state
      const data = await getProjects();
      if(data.status === 'success'){
        console.log(data.data);
        setProjects(data.data);

        alert("Project added successfully!");
      }

      //Handle failure
    } else {
      alert("Slug Should be unique!");
    }
  };


  return (
    <div>
      Confidential Admin Page
      {/* taking input to create a new project */}
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Title" name="title" />
        <textarea
          required
          rows={10}
          cols={30}
          placeholder="Description"
          name="desc"
        />
        <input type="text" required placeholder="Slug" name="slug" />
        <select name="status" required>
          <option value="">Select Category</option>
          <option value="ongoing">On Going</option>
          <option value="completed">Completed</option>
        </select>
        <input type="text" placeholder="Project Link" name="projectLink" />
        <input type="text" placeholder="Github Link" name="githubLink" />
        <input type="text" placeholder="Image Url" name="img" />
        <button type="submit">Add Project</button>
      </form>
      
      {/* displaying all the projects */}
      {projects &&
        projects.map((project) => {
          return <h1 key={project._id}>{project.title}</h1>;
        })}
    </div>
  );
};

export default Admin;
