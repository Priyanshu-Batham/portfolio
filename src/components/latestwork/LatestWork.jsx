import { getProjects } from "@/lib/serverActions"

const LatestWork = async () => {
    let projects = await getProjects();
    projects = projects.slice(0, 3);

  return (
    <div>
      {projects?.reverse().map((project)=>{
        return (
            <div key={project._id}>
                <h1>{project.title}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default LatestWork
