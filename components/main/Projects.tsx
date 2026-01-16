import React from "react";
import ProjectCard from "../sub/ProjectCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white-20 to-brown-10 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Web Development"
          description="Building custom websites and web applications tailored to your business needs."
        />
        <ProjectCard
          src="/CardImage.png"
          title="IT Support"
          description="Ongoing maintenance, monitoring, and troubleshooting to keep your systems reliable."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="IT Consulting"
          description="Strategic planning, security audits, and technology roadmaps to help you scale safely."
        />
      </div>
    </div>
  );
};

export default Projects;
