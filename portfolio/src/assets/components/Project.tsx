import React from "react";

const ProjectsSection = () => {
  const projects = [
    { title: "E-Commerce", description: "A platform for online shopping." },
    { title: "Weather App", description: "Get real-time weather updates." },
    { title: "Calculator", description: "A simple calculator app." },
    { title: "Food delivery website", description: "A platform to easy order" },
    {
      title: "Fitness Guide",
      description: "A platform to explore gym equipments",
    },
    {
      title: "Rock Paper Scissor",
      description: "A game to pass out time  with your friends",
    },
  ];

  return (
    <section className="py-10 background-to-alt">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6 ">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 shadow-md rounded-lg p-5  transition-shadow hover:-translate-y-4 hover:shadow-[10px_0px_15px_-5px_rgba(255,255,0,0.7)]"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-white">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
