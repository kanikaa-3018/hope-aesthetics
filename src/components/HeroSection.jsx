import * as React from "react";
import dentall from "../../public/dentall.jpeg";
import skinn from "../../public/skinn.jpeg";
import hairr from "../../public/hairr.jpeg";
import teeth from "../../public/teeth.png";
import tooth from "../../public/tooth.png";
import toothfilling from "../../public/tooth-filling.png";
import drySkin from "../../public/dry-skin.png";
import skinCell from "../../public/skin-cell.png";
import cream from "../../public/cream.png";
import repair from "../../public/repair.png";
import hairColor from "../../public/hair-color.png";
import hairF from "../../public/hair-follicle.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const sections = [
    {
      title: "Dental Care",
      description:
        "Experience world-class dental services for a perfect smile. From cleanings to cosmetic dentistry, we cater to all your dental needs with state-of-the-art technology.",
      image: dentall,
      bgColor: "bg-blue-100",
      p1: teeth,
      p2: tooth,
      p3: toothfilling,
      t1: "Teeth Whitening",
      t2: "Root Canal Treatment",
      t3: "Dental Implants",
    },
    {
      title: "Skin Care",
      description:
        "Rejuvenate your skin with advanced skincare treatments. We specialize in acne treatment, anti-aging solutions, and personalized skincare plans tailored to your needs.",
      image: skinn,
      bgColor: "bg-pink-100",
      p1: drySkin,
      p2: skinCell,
      p3: cream,
      t1: "Chemical Peels",
      t2: "Microneedling",
      t3: "Laser Skin Resurfacing",
    },
    {
      title: "Hair Care",
      description:
        "Achieve the hair of your dreams with our expert hair care solutions. From hair loss treatment to nourishing therapies, we bring back life to your locks.",
      image: hairr,
      bgColor: "bg-yellow-50",
      p1: repair,
      p2: hairColor,
      p3: hairF,
      t1: "Hair Transplant",
      t2: "PRP Therapy",
      t3: "Laser Hair Therapy",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {sections.map((section, index) => (
              <CarouselItem key={index}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg shadow-md ${section.bgColor}`}
                >
                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold capitalize mb-2 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                      HOPE AESTHETICS
                    </h1>
                    <p className="text-sm md:text-md font-semibold italic mb-6">
                      La Dentale and Cosmetic Avenue
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-400">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-md mb-4">
                      {section.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                      {[section.p1, section.p2, section.p3].map((icon, i) => (
                        <div
                          key={i}
                          className="bg-[rgb(253,253,253,0.5)] px-6 py-2 rounded-lg font-semibold underline-offset-1 flex flex-col gap-2 items-center w-24"
                        >
                          <img src={icon} alt="" width={40} height={40} />
                          <p className="text-xs md:text-sm font-semibold text-center">
                            {section[`t${i + 1}`]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="flex-1 flex justify-center">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="object-cover rounded-lg w-48 h-64 md:w-[300px] md:h-[400px] shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
