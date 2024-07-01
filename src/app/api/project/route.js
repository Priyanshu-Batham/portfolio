import { createProject, getProjects } from "@/lib/serverActions";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the URL-encoded body
    const data = await request.json();

    const {title, desc, slug, status, projectLink, githubLink, img} = data;
    // console.log(title, desc, slug, status, projectLink, githubLink, img);

    const newProject = await createProject(title, desc, slug, status, projectLink, githubLink, img);
    if(!newProject._id) throw new Error('Project not added');

    const response = NextResponse.json({
      message: "Project Added",
      status: "success",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: error.message, status: "error" },
    );
  }
}

export async function GET() {
  try {
    const projects = await getProjects();
    if(projects.status === 'error') throw new Error('Could not get projects');

    const response = NextResponse.json({
      data: projects,
      status: "success",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: error.message, status: "error" },
    );
  }
}