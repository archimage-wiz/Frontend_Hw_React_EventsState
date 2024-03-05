import "./projectList.css";

export function ProjectList({ projects, selectedFilter }) {
    return (
        <>
            <div className="projectList">
                {projects.map((project, index) => (
                    <img key={index} className="profile_image" src={project.img} alt={`pic${index}: ${project.category}`} />
                ))}
            </div>
        </>
    );
}
