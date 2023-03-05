import React from "react";

const Projects = () => {
  return (
    <>
      <section className="px-36 h-screen py-12">
        <div className="flex gap-8 items-center w-6/12 px-12">
          <span className="text-secondary text-sm font-semibold">03.</span>
          <h1 className="text-white font-black text-2xl">
            Some Things I've Built
          </h1>
          <div class="flex-grow h-px bg-gray"></div>
        </div>
        <section className="flex py-12 px-12">
          <div className="project_img relative hover:opacity-70 cursor-pointer"></div>
          <div className="flex flex-col px-12">
            <p className="text-secondary">Featured Project</p>
            <h1 className="text-white font-black text-3xl">Bloow</h1>
          </div>

          <div className="absolute bg-tertiary z-40 h-36 w-1/2 right-24 rounded my-20 px-8 py-4 text-gray">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
        </section>
      </section>

      <section className="px-36 h-screen py-12">
        <section className="flex justify-end py-12 px-12">
          <div className="flex flex-col px-12">
            <p className="text-secondary">Featured Project</p>
            <h1 className="text-white font-black text-3xl">Bloow</h1>
          </div>
          <div className="absolute bg-tertiary z-40 h-36 w-1/2 left-24 rounded my-20 px-8 py-4 text-gray">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="project_img relative"></div>
        </section>
      </section>

      <section className="px-36 h-screen py-12">
        <section className="flex py-12 px-12">
          <div className="project_img relative"></div>
          <div className="flex flex-col px-12">
            <p className="text-secondary">Featured Project</p>
            <h1 className="text-white font-black text-3xl">Bloow</h1>
          </div>

          <div className="absolute bg-tertiary z-40 h-36 w-1/2 right-24 rounded my-20 px-8 py-4 text-gray">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
