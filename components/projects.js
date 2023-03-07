import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section className="px-36 py-12">
        <div className="flex gap-8 items-center w-6/12 px-12">
          <span className="text-secondary text-sm font-semibold">03.</span>
          <h1 className="text-white font-black text-2xl">
            Some Things I've Built
          </h1>
          <div class="flex-grow h-px bg-gray"></div>
        </div>


        <section className="flex items-center py-12 px-12 gap-4 h-screen">
          <aside className="project_img relative cursor-pointer h-96 rounded w-1/2"></aside>
          <aside className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 h-32 w-full rounded px-8 py-4 text-gray">
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

        <section className="flex items-center py-12 px-12 gap-4 h-screen">
          <aside className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-left">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-left">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 h-32 w-full rounded px-8 py-4 text-gray">
              <p className="text-sm">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 text-gray text-sm">
              <p>Next.js</p>
              <p>Next.js</p>
              <p>Next.js</p>
            </div>
            <div className="flex items-center justify-start gap-4 text-white">
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
          <aside className="project_img relative cursor-pointer h-96 rounded w-1/2"></aside>
        </section>


        <section className="flex items-center py-12 px-12 gap-4 h-screen">
          <aside className="project_img relative cursor-pointer h-96 rounded w-1/2"></aside>
          <aside className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-secondary text-right">Featured Project</p>
              <h1 className="text-white font-black text-3xl text-right">
                Bloow
              </h1>
            </div>
            <div className="bg-tertiary z-40 h-32 w-full rounded px-8 py-4 text-gray">
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
