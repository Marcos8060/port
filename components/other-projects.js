import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  {
    title: "GitHub Users Finder",
    desc: "Ann application that consumes the GITHUB API and displays all users with live search functionality",
    languages: ["JavaScript", "Bootstrap", "Axios"],
    link: "https://marcos8060.github.io/Github-Users-Finder-App/"
  },
  {
    title: "Netflix Clone",
    desc: "A clone of the Netflix application that consumes the TMDB API and displays movies and their respective categories",
    languages: ["React", "CSS", "Axios"],
    link: "https://marcos-netflix.netlify.app/"
  },
  {
    title: "Space-X-Clone",
    desc: "This is a clone of the Space-X official Website",
    languages: ["Next.js", "Tailwind"],
    link: "https://space-x-replica.netlify.app/"
  },
  {
    title: "Intergrating Algolia Searh",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiateius ea exercitationem atque? Optio.",
    languages: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Intergrating Algolia Searh",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiateius ea exercitationem atque? Optio.",
    languages: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Intergrating Algolia Searh",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiateius ea exercitationem atque? Optio.",
    languages: ["Next.js", "Tailwind", "Firebase"],
  },
];

const OtherProjects = () => {
  return (
    <section className="sm:px-36 px-4">
      <h1 className="text-white text-center font-black text-3xl">
        Other Noteworthy Projects
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-8">
        {projects.map((project, index) => (
          <div
            className="bg-tertiary h-64 cursor-pointer rounded p-4 space-y-4"
            key={index}
          >
            <div className="flex justify-end">
              <a target="_blank" href={project.link}>
                <BiLinkExternal
                  title="View External Link"
                  className="text-secondary text-2xl"
                />
              </a>
            </div>
            <h2 className="font-black text-white">{project.title}</h2>
            <p className="text-gray text-sm">{project.desc}</p>
            <div className="flex items-center gap-4 text-gray text-sm">
              {project.languages.map((language, index) => (
                <div key={index}>
                  <p>{language}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
