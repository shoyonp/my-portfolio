import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Projects from "./Projects";
import gadget from "../assets/gadget.png";
import food from "../assets/food-sharing.png";
import movie from "../assets/movie-portal.png";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Detail from "../Page/Detail";
const SwiperProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  return (
    <>
      <div id="projects" className="bg-black/95 p-4 md:p-5 lg:p-10">
        <h2 className="text-4xl font-bold mb-5 text-white text-center">
          My <span className="text-[#ff014f]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto lg:p-10">
          {/* <SwiperF
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Projects
            name="Share Plates"
            detail="A fully functional Food donation platform where users can donates foods and and who needs it he/she can get it."
            img={food}
            id={1}
          ></Projects>
        </SwiperSlide>
        <SwiperSlide>
          <Projects
            name="BD Movies"
            detail="Movie BD is a user-friendly platform designed for movie enthusiasts to discover, explore, and learn about movies.Users can browse top-rated movies, search for their favorite films, and stay updated on the latest releases in Bangladeshi cinema and beyond."
            img={movie}
            id={2}
          ></Projects>
        </SwiperSlide>
        <SwiperSlide>
          <Projects
            name="Gadget Heaven"
            detail="Gadget Heaven is your go-to platform for the latest gadget reviews, specs, and expert insights, helping you stay updated on the newest tech trends and make smarter purchase decisions."
            img={gadget}
            id={3}
          ></Projects>
        </SwiperSlide>
      </SwiperF> */}
          {projects.map((project) => (
            <Projects key={project.id} project={project}></Projects>
          ))}
        </div>
      </div>
    </>
  );
};

export default SwiperProject;
