import { Project } from "./models";
import { connectToDb } from "./connectToDb";

export const createProject = async (
  title,
  desc,
  slug,
  status,
  projectLink,
  githubLink,
  img
) => {
  try {
    // console.log("before connecting to db")
    await connectToDb();
    const newProject = await Project.create({
      title,
      desc,
      slug,
      status,
      projectLink,
      githubLink,
      img,
    });
    return newProject;
  } catch (error) {
    return error;
  }
};

export const getProjects = async () =>{
  try {
    await connectToDb();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    return {status: "failure", error:error};
  }
}
