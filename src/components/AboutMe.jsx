import React from "react";

const AboutMe = () => {
  return (
    <>
      <section id="about" className="py-20 md:px-5 bg-black/95 text-white mb-1">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5 text-center">
            <span className="text-[#ff014f]">About</span> Me
          </h2>
          <p className="text-lg text-white/80 w-3/4 mx-auto">
          I am a hardworking junior web developer with a passion for football, traveling, and photography. Specializing in landscape and macro photography, you also enjoy photo editing and have some experience with video editing. Though you describe yourself as a bit introverted, you become extroverted around people you connect with. You love adventure, playing games on your phone or PC, and maintaining a chill attitude toward life.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
