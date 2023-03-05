import React from "react";

const About = () => {
  return (
    <section className="h-screen px-36 py-12">
      <div className="flex gap-8 items-center w-6/12 px-12">
        <span className="text-secondary text-sm">01.</span>
        <h1 className="text-white font-black text-2xl">About Me</h1>
        <div class="flex-grow h-px bg-gray"></div>
      </div>
      <div className="flex gap-16 my-8">
        <div className="w-1/2 space-y-8 mx-auto">
          <p className="text-gray">
            Hello! My name is Marcos and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-gray">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className="text-gray">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="flex items-center gap-12 px-8">
            <div>
              <ul className="marker:text-secondary text-gray text-sm list-disc">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray marker:text-secondary text-sm list-disc">
                <li>Tailwind</li>
                <li>Material UI</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w/12 mx-auto">
          <img className="h-60 hover:bg-secondary hover:cursor-pointer" src="/images/profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
