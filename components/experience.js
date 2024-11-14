import React, { useState } from "react";

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    "ThinkSynergy Limited",
    "Dynamic Mobility",
    "Optica",
    // "Muer Solutions",
    // "Aice Africa",
  ];

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
                    ? "text-secondary md:text-sm md:text-left text-center text-xs cursor-pointer bg-tertiary rounded-3xl py-2 px-3 font-bold"
                    : "text-gray cursor-pointer py-3 px-3 text-sm md:text-left text-center"
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
                  Full Stack Developer{" "}
                  <span className="text-secondary text-sm">
                    {" "}
                    @ ThinkSynergy Limited
                  </span>
                </h2>
                <p className="text-gray text-sm">Dec 2023 - Present</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    Leading Development and Maintenance of HR Management System:
                    I design and implement features for tracking employee
                    information, leave, performance reviews, and department
                    structures using React and Node.js (TypeScript) for seamless
                    user experiences and efficient data handling.
                  </li>
                  <li>
                    Enhanced Efficiency with Custom Dashboards: I develop
                    internal dashboards to automate HR tasks like onboarding,
                    payroll management, and reporting, leveraging React and
                    Redux to improve workflow transparency and data
                    accessibility.
                  </li>
                  <li>
                    Streamlined Deployment and Scalability: I optimize and
                    automate CI/CD pipelines for the HR system using GitHub
                    Actions, Docker, and AWS, enabling seamless deployments and
                    scalability for evolving organizational needs.
                  </li>
                  <li>
                    Improved Data Security and Compliance: I ensure secure
                    handling of employee data and compliance with data
                    protection standards, implementing role-based access control
                    and secure API interactions.
                  </li>
                </ul>
              </div>
            </>
          )}
          {activeStep === 1 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Front End Developer{" "}
                  <span className="text-secondary text-sm">
                    {" "}
                    @ Dynamic Mobility Technology
                  </span>
                </h2>
                <p className="text-gray text-sm">Sep 2021 - Nov 2023</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    At Dynamic Mobility, I leveraged React.js, Nextjs, CSS, and
                    Tailwind CSS to build a responsive, interactive interface
                    for a risk management system, enabling users to effectively
                    monitor and mitigate potential risks. This user-friendly
                    interface was designed to streamline workflows, enhance
                    visibility into risk data, and support proactive
                    decision-making with a clean and organized layout.
                  </li>
                  <li>
                    Lead and coordinated all frontend processes by use of Jira.
                  </li>
                  <li>
                    I orchestrated processes and workflows to deploy above
                    applications seamlessly i.e., by use of GitHub actions,
                    Docker, AWS and other relevant technologies.
                  </li>
                </ul>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <div className="space-y-4">
                <h2 className="text-white">
                  Back End Developer{" "}
                  <span className="text-secondary text-sm"> @ Optica</span>
                </h2>
                <p className="text-gray text-sm">Jan 2021 - Aug 2021</p>
                <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
                  <li>
                    At Optica, I used Django to build a robust backend for an
                    order tracking management system, allowing efficient
                    management and tracking of eyeglass orders across various
                    branches. This system streamlined order flow, ensured
                    real-time tracking, and provided centralized insights into
                    branch-level order statuses, enhancing overall operational
                    efficiency and inter-branch coordination
                  </li>
                  <li>
                    Researched technologies and provided proof of concept.
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
