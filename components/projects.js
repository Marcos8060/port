import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section className="sm:px-36 px-4 py-12" id="projects">
        <div className="flex gap-8 items-center md:w-6/12 w-full sm:px-12">
          <span className="text-secondary text-sm font-semibold">03.</span>
          <h1 className="text-white font-black text-2xl">
            Some Things I have Built
          </h1>
          <div class="md:block hidden flex-grow h-px bg-gray"></div>
        </div>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="project3_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary md:text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl md:text-right">
                Tesla Clone
              </h1>
            </div>
            <div className="bg-tertiary z-30 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A clone of the official Tesla website developed in Next.js and
                Tailwind, with a mobile first approach responsive on all devices
                using latest technologies.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>Tailwind</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <Link
                target="_blank"
                href="https://github.com/Marcos8060/Tesla-Clone"
              >
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </Link>

              <Link target="_blank" href="https://app-tesla.netlify.app/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary md:text-left">Featured Project</p>
              <h1 className="text-white font-black text-3xl md:text-left">
                Aice
              </h1>
            </div>
            <div className="bg-tertiary z-30 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A website for Aice Africa which is an AI company that is
                commercially viable and sustainable, impact led and outcome
                driven with fearless conviction for change using data and AI for
                good. Insanely crazy for innovation that will create jobs and
                drive human wealth.{" "}
                <span className="text-secondary">
                  Site still in development
                </span>
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 text-gray text-sm">
              <p>React</p>
              <p>Tailwind</p>
              <p>Django</p>
            </div>
            <div className="flex items-center justify-start gap-4 text-white">
              <Link
                target="_blank"
                href="https://github.com/mutuajoseph/AICE-WEBSITE"
              >
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </Link>

              <Link target="_blank" href="https://aice-landing.web.app/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
          <aside className="project2_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
        </section>


        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="project_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary md:text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl md:text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-30 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A web app for displaying local music artists in Kenya and their
                respective hit songs in their detail page. It aims to help
                establish artists who have not been able to find a platform at
                the center stage by helping the artists thrive in their music
                talent.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>React</p>
              <p>Node.js</p>
              <p>Tailwind</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <AiOutlineGithub
                title="Github"
                className="text-2xl cursor-pointer"
              />
              <Link target="_blank" href="https://bloowafrica.com/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
        </section>

        
      </section>
    </>
  );
};

export default Projects;
