import React, { useState } from "react";

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["Dynamic Mobility", "Optica", "Cortec Solutions Africa"];

  return (
    <section className="sm:h-screen h-auto sm:px-52 px-4 py-12 sm:mt-0 mt-40">
      <div className="flex gap-4 items-center md:w-6/12 w-full">
        <span className="text-secondary text-sm">01.</span>
        <h1 className="text-white font-black text-2xl">Where I've Worked</h1>
        <div class="flex-grow h-px bg-gray"></div>
      </div>

      <div className="md:flex grid gap-8">
        <div className="sm:my-8 mt-8 md:w-4/12 w-full">
          <ul className="flex md:flex-col sm:gap-6 gap-1 md:border-l-2 border-tertiary sm:px-2">
            {steps.map((step, index) => (
              <li
                className={`${
                  index === activeStep
                    ? "text-secondary text-sm cursor-pointer bg-tertiary py-3 px-3 text-sm uppercase"
                    : "text-gray cursor-pointer py-3 px-3 text-sm uppercase"
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
                  <span className="text-secondary font-semibold text-sm">
                    {" "}
                    @ Dynamic Mobility Technology
                  </span>
                </h2>
                <p className="text-gray text-sm">Sep 2022 - Present</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </li>
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </li>
                </ul>
              </div>
            </>
          )}

          {activeStep === 1 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Backend Developer{" "}
                  <span className="text-secondary font-semibold">
                    {" "}
                    @ Optica
                  </span>
                </h2>
                <p className="text-white text-sm">May 2018 - Present</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </li>
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </li>
                </ul>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Systems Developer{" "}
                  <span className="text-secondary font-semibold">
                    {" "}
                    @ Coretec Solutions Africa
                  </span>
                </h2>
                <p className="text-white text-sm">May 2018 - Present</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </li>
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
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
