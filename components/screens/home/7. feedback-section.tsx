"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mock Data based on Figma
const TESTIMONIALS = [
  {
    id: 1,
    image: "https://placehold.co/200x200/cccccc/ffffff?text=User", // Placeholder, replace with actual assets if available
    name: "Lorem Ipsum",
    role: "Founder, UMEED",
    quote:
      "“ Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. ”",
  },
  {
    id: 2,
    image: "https://placehold.co/200x200/cccccc/ffffff?text=User",
    name: "Jane Doe",
    role: "Co-Founder, UMEED",
    quote:
      "“ Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. ”",
  },
  {
    id: 3,
    image: "https://placehold.co/200x200/cccccc/ffffff?text=User",
    name: "John Smith",
    role: "Director, UMEED",
    quote:
      "“ Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. ”",
  },
];


export default function FeedbackSection() {
  return (
    <section className=" w-full bg-primary py-20 lg:py-32 relative overflow-hidden text-white font-serif">
      <div className="bg-primary container mx-auto px-4 relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl leading-tight font-normal tracking-tight">
            People Who’ve Trusted Us
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-12 ">
          {/* Custom Navigation Buttons */}
          <button
            id="swiper-button-prev-custom"
            className=" absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 p-3 hover:bg-white/10 rounded-full transition-all hidden md:block cursor-pointer group"
          >
            <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 text-white/70 group-hover:text-white transition-colors" />
          </button>
          <button
            id="swiper-button-next-custom"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 p-3 hover:bg-white/10 rounded-full transition-all hidden md:block cursor-pointer group"
          >
            <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 text-white/70 group-hover:text-white transition-colors" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            navigation={{
              prevEl: "#swiper-button-prev-custom",
              nextEl: "#swiper-button-next-custom",
            }}
            className="w-full"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col gap-y-12 items-center text-center cursor-grab active:cursor-grabbing pb-4">
                  {/* Avatar */}
                  <div className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className=" space-y-2">
                    <h3 className="text-2xl lg:text-4xl font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm lg:text-base font-bold uppercase tracking-widest text-white/80">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg lg:text-xl leading-relaxed italic text-white/90 font-serif">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-pagination-custom flex justify-center gap-3 mt-16" />
        </div>
      </div>

      {/* Styles for custom pagination dots */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active-custom {
          background: #ffffff;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
