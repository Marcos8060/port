import React, { useState } from "react";

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["Dynamic Mobility", "Aice Africa", "Optica"];

  return (
    <section
      className="sm:h-screen h-auto sm:px-52 px-4 py-24 sm:mt-0 mt-40"
      id="experience"
    >
      <div className="flex gap-4 items-center md:w-6/12 w-full">
        <span className="text-secondary text-sm">01.</span>
        <h1 className="text-white font-black text-2xl">Where I have Worked</h1>
        <div className="flex-grow h-px bg-gray"></div>
      </div>

      <div className="md:flex grid gap-8">
        <div className="sm:my-8 mt-8 md:w-4/12 w-full">
          <ul className="flex md:flex-col sm:gap-6 gap-1 md:border-l-2 border-tertiary sm:px-2">
            {steps.map((step, index) => (
              <li
                className={`${
                  index === activeStep
                    ? "text-secondary md:text-sm text-xs cursor-pointer bg-tertiary py-3 px-3 md:uppercase"
                    : "text-gray cursor-pointer py-3 px-3 text-sm md:uppercase"
                }`}
                key={index}
                onClick={() => setActiveStep(index)}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:my-8 md:w-9/12 w-full">
          {activeStep === 0 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Front End Developer{" "}
                  <span className="text-secondary text-sm">
                    {" "}
                    @ Dynamic Mobility Technology
                  </span>
                </h2>
                <p className="text-gray text-sm">Sep 2022 - Present</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Develop and test internal dashboards that mainly help to
                    streamline data management using React and Redux.
                  </li>
                  <li>
                    I leverage AJAX and JSON technologies to establish seamless
                    data exchange between the front-end and back-end systems,
                    enhancing the responsiveness and interactivity of the
                    application.
                  </li>
                  <li>
                    Optimize page load times by 7% through the implementation of
                    caching and minification techniques, enabling faster page
                    rendering, reducing server load, and improving the overall
                    user experience
                  </li>
                  <li>
                    Integrate third-party APIs to expand functionality and
                    enrich the user experience, providing additional features
                    and services to the application
                  </li>
                  <li>
                    Implement comprehensive unit tests using Enzyme and Cypress
                    to ensure code integrity and reduce the occurrence of bugs
                    in production.
                  </li>
                  <li>
                    Utilize version control systems such as Git to manage code
                    changes effectively and facilitate collaboration with other
                    developers, ensuring efficient project management and
                    codebase integrity.
                  </li>
                </ul>
              </div>
            </>
          )}
          {activeStep === 1 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Software Developer{" "}
                  <span className="text-secondary">
                    {" "}
                    @ Aice Africa
                  </span>
                </h2>
                <p className="text-white text-sm">Feb 2021 - May 2022</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Developed a responsive website using React and Tailwind that
                    is optimized for both desktop and mobile devices, resulting
                    in a 90% increase in user engagement, longer sessions,
                    higher page views, and improved conversion rates.
                  </li>
                  <li>
                    Engineered a scalable and high-performance front-end
                    architecture that optimized the website responsiveness and
                    loading times, resulting in improved user engagement and
                    satisfaction.
                  </li>
                  <li>
                    Designed and developed a secure and interactive web
                    application using a Next.js, ensuring a seamless user
                    experience with an intuitive interface.
                  </li>
                  <li>
                    Implemented a robust RESTful API that facilitated secure and
                    efficient data transfer between the front-end and back-end
                    systems, enhancing the overall functionality and reliability
                    of the application.
                  </li>
                  <li>Research technologies and provide proof of concept.</li>
                </ul>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Front End Developer{" "}
                  <span className="text-secondary">
                    {" "}
                    @ Optica
                  </span>
                </h2>
                <p className="text-white text-sm">July 2020 - Jan 2021</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Maintain high standards of software quality within the team
                    by establishing good practices and habits.
                  </li>
                  <li>
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Angular and Django.
                  </li>
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </li>
                  <li>Research technologies and provide proof of concept.</li>
                  <li>
                    Participate in testing process, test review, analysis,
                    witnessing and certification of software.
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
