import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import project from "../assets/data/project.json";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        style={{
          "--swiper-navigation-color": "rgb(255, 255, 255)",
          "--swiper-pagination-color": "rgb(255, 255, 255)",
          "--swiper-pagination-bullet-inactive-color": "rgb(255, 255, 255)",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper h-[73svh] justify-center"
      >
        <div>
          {" "}
          {project &&
            project.map((p) => (
              <SwiperSlide key={p.id}>
                <ProjectCard data={p} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </>
  );
}
