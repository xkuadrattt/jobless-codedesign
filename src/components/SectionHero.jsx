import React from "react";

const SectionHero = function () {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center font-primary">
      <div className="flex flex-col gap-[1rem] mb-9 items-center [&>*]:max-w-[41rem] [&>*]:text-center">
        <h1 className="text-2xl md:text-4xl font-semibold leading-9 md:leading-[3rem]">
          Get Connected to the Best Remote Jobs in Your Field
        </h1>
        <p className="text-black/60 leading-8">
          Discover a wide range of remote opportunities on our platform and take
          control of your career
        </p>
      </div>
      <div className="flex justify-center md:gap-8 [&>button]:block md:mt-4">
        <button className="px-4 py-3 bg-primary text-white rounded-3xl mr-4 hover:bg-primary/90 drop-shadow-2xl">
          Explore Remote Jobs
        </button>
        <button className="font-semibold text-primary hover:text-primary/90">
          How it works?
        </button>
      </div>
    </section>
  );
};

export default SectionHero;
