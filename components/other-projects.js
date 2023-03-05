import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
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
    <section className="px-36">
      <h1 className="text-white text-center font-black text-3xl">
        Other Noteworthy Projects
      </h1>
      <div className="grid grid-cols-3 gap-4 py-8">
        {projects.map((project, index) => (
          <div
            className="bg-tertiary h-64 cursor-pointer rounded p-4 space-y-4"
            key={index}
          >
            <div className="flex justify-end">
              <a target="_blank" href="/">
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
