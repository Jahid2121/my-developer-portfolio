
const Project = ({project}) => {
    console.log(project);
  return (
   <div
      className="card card-compact mt-12 bg-base-100 shadow-xl"

    >
      <figure>
        <img src={project.img} alt={project.projectName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.projectName}</h2>
        <p>{project.details}</p>
        <div className="card-actions justify-end">
          <a href={project.githubLink} className="btn btn-primary">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;