import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section className="sm:px-36 px-4 py-12">
        <div className="flex gap-8 items-center md:w-6/12 w-full sm:px-12">
          <span className="text-secondary text-sm font-semibold">03.</span>
          <h1 className="text-white font-black text-2xl">
            Some Things I've Built
          </h1>
          <div class="md:block hidden flex-grow h-px bg-gray"></div>
        </div>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="project_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>Next.js</p>
              <p>Next.js</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <AiOutlineGithub
                title="Github"
                className="text-2xl cursor-pointer"
              />
              <BiLinkExternal
                title="External Link"
                className="text-2xl cursor-pointer"
              />
            </div>
          </aside>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="project_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>Next.js</p>
              <p>Next.js</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <AiOutlineGithub
                title="Github"
                className="text-2xl cursor-pointer"
              />
              <BiLinkExternal
                title="External Link"
                className="text-2xl cursor-pointer"
              />
            </div>
          </aside>
        </section>

        <section className="md:flex items-center py-12 sm:px-12 gap-4 md:h-screen h-auto space-y-4">
          <aside className="project_img relative cursor-pointer md:h-96 h-72 rounded md:w-1/2"></aside>
          <aside className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 md:h-32 h-auto w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>Next.js</p>
              <p>Next.js</p>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <AiOutlineGithub
                title="Github"
                className="text-2xl cursor-pointer"
              />
              <BiLinkExternal
                title="External Link"
                className="text-2xl cursor-pointer"
              />
            </div>
          </aside>
        </section>


      </section>
    </>
  );
};

export default Projects;
