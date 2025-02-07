import React from "react";

const Education = () => {
  return (
    <div id="education">
      <section className="bg-black/95 text-white py-5 px-6 lg:px-24">
        <div className="w-11/12  mx-auto">
          {/* Section Heading */}
          <div className="mb-8">
            <p className="text-white/80 text-sm text-center ">
              I hold a Bachelor's degree in Computer Science from University
              DIU, where I gained a strong foundation in programming,
              algorithms, and software development. My academic journey included
              projects, research, and internships that enhanced my technical and
              problem-solving skills, preparing me for real-world challenges in
              the tech industry.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {/* Education Item */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">
                🎓
              </div>
              <div className="ml-4 mt-4 lg:mt-0">
                <h3 className="text-2xl font-semibold">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-white/80 text-md">
                  University Dhaka International Universiy(DIU) - Running
                  Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
