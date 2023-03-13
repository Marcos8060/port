import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="h-screen sm:px-36 px-4 py-12">
      <div className="flex gap-8 items-center md:w-6/12 w-full sm:px-12">
        <span className="text-secondary text-sm">01.</span>
        <h1 className="text-white font-black text-2xl">About Me</h1>
        <div class="flex-grow h-px bg-gray"></div>
      </div>
      <div className="md:flex grid gap-16 my-8">
        <div className="md:w-1/2 w-full space-y-8 mx-auto">
          <p className="text-gray">
            Hello! My name is Marcos and I enjoy creating things that live on
            the internet. I was always fascinated by technology and how it
            works, and I wanted to learn how to create software and websites of
            my own. Online resources helped me to understand the basic concepts
            of programming languages like Python, JavaScript.
          </p>
          <p className="text-gray">
            Fast-forward to today, and I’ve had the privilege of working as a 
            <span className="text-secondary"> freelance developer</span>, at a <span className="text-secondary">start-up</span> and for a <span className="text-secondary">huge corporation</span>. My main focus these days is building
            accessible, inclusive products and digital experiences at
            <a href="https://www.linkedin.com/company/dynamic-mobility-technology/about/" target="_blank" className="text-secondary"> Dynamic Mobility</a> for a variety of clients.
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
          <div className="relative border-2 rounded border-secondary h-60 w-60">
            <div className="profile__img h-60 absolute bottom-4 right-4"></div>
            {/* <img
              className="h-60 hover:bg-secondary rounded hover:cursor-pointer absolute bottom-4 right-4"
              src="/images/profile.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
