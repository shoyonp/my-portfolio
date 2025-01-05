import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import gadget from "../assets/gadget.png";
import food from "../assets/food-sharing.png";
import movie from "../assets/movie-portal.png";
import Projects from "./Projects";
const ProjectCard = (project) => {
    console.log(project);
  return (
    <div>
      <Swiper
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
      </Swiper>
    </div>
  );
};

export default ProjectCard;
