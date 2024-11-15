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
            Projects I have worked on
          </h1>
          <div class="md:block hidden flex-grow h-px bg-gray"></div>
        </div>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <div className="md:w-1/2 w-full">
            <img
              className="w-full object-contain rounded"
              src="/images/bloow.png"
            />
          </div>
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
              <a target="_blank" href="https://dev.bloowafrica.com/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </a>
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
            <div className="bg-tertiary z-30 md:h-36 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A website for Aice Africa which is an AI company that is
                commercially viable and sustainable, impact led and outcome
                driven with fearless conviction for change using data and AI for
                good. Insanely crazy for innovation that will create jobs and
                drive human wealth.{" "}
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 text-gray text-sm">
              <p>React</p>
              <p>Tailwind</p>
              <p>Django</p>
            </div>
            <div className="flex items-center justify-start gap-4 text-white">
              <a
                target="_blank"
                href="https://github.com/mutuajoseph/AICE-WEBSITE"
              >
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </a>

              <Link target="_blank" href="https://www.aiceafrica.com/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
          <div className="md:w-1/2 w-full">
            <img
              className="h-[50vh] w-full object-contain rounded"
              src="/images/aice.png"
            />
          </div>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <div className="md:w-1/2 w-full">
            <img
              className="h-[50vh] w-full object-contain rounded"
              src="/images/hr.png"
            />
          </div>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary md:text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl md:text-right">
                HR Management System
              </h1>
            </div>
            <div className="bg-tertiary z-30 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                This is a web app that streamlines Human Resource tasks. It
                manages employee data, payroll, benefits, recruitment, and
                evaluations with ease. Acting as a central hub, it fosters
                smooth communication and data sharing, empowering data-driven
                decisions, productivity, and Human Resource compliance, making
                HR processes simpler and more collaborative.
                <span className="text-secondary text-sm">
                  Development in progress
                </span>
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>TypeScript</p>
              <p>Tailwind</p>
              <p>Nodejs</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <a target="_blank" href="https://github.com/Marcos8060/hr-frontend">
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href="/"
              >
                <BiLinkExternal
                  title="Still in Development"
                  className="text-2xl cursor-pointer"
                />
              </a>
            </div>
          </aside>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary md:text-left">Featured Project</p>
              <h1 className="text-white font-black text-3xl md:text-left">
                RiskSolve
              </h1>
            </div>
            <div className="bg-tertiary z-30 md:h-36 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                This is a system used by organizations to identify, assess,
                mitigate, and monitor potential threats and uncertainties that
                could impact their objectives. It involves the systematic
                identification of risks, evaluating their potential impact and
                likelihood, and developing strategies to minimize or eliminate
                them.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 text-gray text-sm">
              <p>React</p>
              <p>Tailwind</p>
              <p>Material UI</p>
              <p>.NET</p>
            </div>
            <div className="flex items-center justify-start gap-4 text-white">
              {/* <Link
                target="_blank"
                href="https://github.com/mutuajoseph/AICE-WEBSITE"
              >
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </Link> */}

              <Link target="_blank" href="https://app.risksolve.io/login">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
          <aside className="project5_img relative cursor-pointer md:h-[80vh] h-72 rounded md:w-1/2"></aside>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <div className="md:w-1/2 w-full">
            <img
              className="h-[50vh] w-full object-contain rounded"
              src="/images/tesla.png"
            />
          </div>
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
                Movie Palace
              </h1>
            </div>
            <div className="bg-tertiary z-30 md:h-36 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A clone of the Netflix movie application developed in React and
                Tailwind consuming the tmdb API with a mobile first approach
                responsive on all devices using latest technologies.
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
                href="https://github.com/Marcos8060/REACT-NETFLIX.git"
              >
                <AiOutlineGithub
                  title="Github"
                  className="text-2xl cursor-pointer"
                />
              </Link>

              <Link target="_blank" href="https://marcos-netflix.netlify.app/">
                <BiLinkExternal
                  title="External Link"
                  className="text-2xl cursor-pointer"
                />
              </Link>
            </div>
          </aside>
          <div className="md:w-1/2 w-full">
            <img
              className="h-[50vh] w-full object-contain rounded"
              src="/images/movie.png"
            />
          </div>
          {/* <aside className="project2_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside> */}
        </section>
      </section>
    </>
  );
};

export default Projects;
