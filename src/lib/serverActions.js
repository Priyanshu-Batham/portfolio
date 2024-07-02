import { Project } from "./models";
import { connectToDb } from "./connectToDb";

export const createProject = async (
  title,
  slug,
  desc,
  techStack,
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
      slug,
      desc,
      techStack,
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

export const getProjects = async () => {
  try {
    await connectToDb();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    return { status: "failure", error: error };
  }
};

export const getProject = async (slug) => {
  try {
    await connectToDb();
    const project = await Project.findOne({ slug: slug });
    return project;
  } catch (error) {
    return { status: "failure", error: error };
  }
};

export const deleteProject = async (slug) => {
  try {
    await connectToDb();
    const result = await Project.deleteOne({ slug: slug });
    if (result.deletedCount === 1) {
      return { status: "success", message: "Project deleted successfully" };
    } else {
      throw new Error("Project could not be deleted");
    }
  } catch (error) {
    return { status: "failure", message: error.message };
  }
};
