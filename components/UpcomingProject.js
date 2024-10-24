// components/ProjectSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

export default function ProjectSlider({ projects }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      pagination={{ clickable: true }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
