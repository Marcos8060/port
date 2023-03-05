import React, { useState } from "react";

const Experience = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["Dynamic Mobility", "Optica", "Cortec Solutions Africa"];

  return (
    <section className="h-screen px-52 py-12">
      <div className="flex gap-4 items-center w-6/12">
        <span className="text-secondary text-sm">01.</span>
        <h1 className="text-white font-black text-2xl">Where I've Worked</h1>
        <div class="flex-grow h-px bg-gray"></div>
      </div>

      <div className="flex gap-8">
        <div className=" my-8 w-4/12">
          <ul className="space-y-4">
            {steps.map((step, index) => (
                    <li className={`${activeStep ? 'text-secondary text-sm cursor-pointer': 'text-gray cursor-pointer'}`} key={index} onClick={()=> setActiveStep(index)}>
                     {step}
                   </li>
             ))}
          </ul>
        </div>
        <div className="my-8 w-9/12">
        {activeStep === 0 && <>
        <div className="space-y-4">
        <h2 className="text-white text-xl">Engineer <span className="text-secondary"> @ Dynamic Mobility</span></h2>
          <p className="text-white text-sm">May 2018 - Present</p>
          <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
            <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
          </ul>
        </div>
          
          </>}

          {activeStep === 1 && <>
        <div className="space-y-4">
        <h2 className="text-white text-xl">Engineer <span className="text-secondary"> @ Optica</span></h2>
          <p className="text-white text-sm">May 2018 - Present</p>
          <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
            <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
          </ul>
        </div>
          
          </>}
          {activeStep === 2 && <>
        <div className="space-y-4">
        <h2 className="text-white text-xl">Engineer <span className="text-secondary"> @ Coretec Solutions Africa</span></h2>
          <p className="text-white text-sm">May 2018 - Present</p>
          <ul className="marker:text-secondary text-gray text-sm list-disc space-y-4 px-4">
            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
            <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
          </ul>
        </div>
          
          </>}
        </div>
      </div>
    </section>
  );
};

export default Experience;
