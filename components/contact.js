import React from "react";

const Contact = () => {
  return (
    <>
      <section className="md:h-screen h-auto sm:py-20 py-4 space-y-4" id="contact">
        <div className="flex items-center justify-center gap-4 text-secondary">
          <p className="text-sm">04.</p>
          <p>What's Next</p>
        </div>
        <h1 className="font-black text-white text-4xl text-center">
          Get In Touch
        </h1>
        <p className="text-center text-xl text-gray w-7/12 mx-auto">
          Discuss a project or just want to say hi? My inbox is always open.
        </p>
        <div className="flex flex-col items-center justify-center h-72 space-y-8">
          <h1 className="text-center text-2xl text-gray">
            Full Stack Developer
          </h1>
          <h1 className="text-center text-2xl text-secondary space-y-4">
            Front End heavy with React and Next.js
          </h1>
          <h1 className="text-center text-2xl text-gray space-y-4">
            Nairobi, Kenya
          </h1>
        </div>
      </section>
    </>
  );
};

export default Contact;
