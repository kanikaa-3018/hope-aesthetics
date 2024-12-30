import React from "react";
import myphoto from "../../public/myphoto.jpg";
import vidhi from "../../public/vidhi.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail } from "lucide-react"; // Updated to include icons

const AboutMe = () => {
  return (
    <section className="py-16 bg-gray-50" id="aboutMe">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section: Image and Name */}
          <div className="flex-shrink-0 text-center md:text-left">
            <img
              src={vidhi}
              alt="Dr. Vidhi Sareen"
              className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover"
            />
            <h1 className="mt-6 text-4xl font-bold text-gray-800">
              Dr. Vidhi Sareen
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-600">
              Dentist | Cosmetologist | Entrepreneur | Mind Coach
            </p>

            {/* Contact Information */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-4">
                  <Phone className="text-gray-500" />
                  <span>
                    Phone:{" "}
                    <a href="tel:+917838890618" className="text-blue-500">
                      +91 78388 90618
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-gray-500" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:dr.vidhi@example.com"
                      className="text-blue-500"
                    >
                      hopeaestheticss@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Clinic Locations */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Clinics I'm Available In:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-4">
                  <MapPin className="text-gray-500" />
                  <span>
                    <strong>Ghaziabad</strong> | Address: IIIE-144, Nehru Nagar, Ghaziabad
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="text-gray-500" />
                  <span>
                    <strong>Noida</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="text-gray-500" />
                  <span>
                    <strong>Burari</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="text-gray-500" />
                  <span>
                    <strong>Loni</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="text-gray-500" />
                  <span>
                    <strong>Cosmetic Consultant</strong> in NCR
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Achievements */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              I am a dedicated professional with over 8 years of experience,
              specializing in dentistry, cosmetology, and personal development.
              My mission is to deliver exceptional patient care, empower
              individuals to achieve their aesthetic goals, and help them unlock
              their full potential.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                My Journey
              </h3>
              <p className="text-md text-gray-600">
                From a young age, I have been passionate about enhancing both
                the physical and mental well-being of individuals. After
                completing my degree in Dentistry, I ventured into the world of
                cosmetology, bringing together my love for aesthetics and
                science. Over the years, I’ve had the opportunity to work with
                diverse patients, each journey further shaping my skills and
                approach to care. As an entrepreneur and mind coach, my goal is
                to help people feel confident and empowered in all aspects of
                their lives.
              </p>
            </div>

            <Accordion type="multiple" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Advanced Certifications and Training
                </AccordionTrigger>
                <AccordionContent>
                  I hold certifications in dental implants, cosmetic practices,
                  and hospital administration. These internationally accredited
                  certifications ensure the highest standard of care. I also
                  have a fellowship in cosmetology and expertise in advanced
                  dental surgery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Trainer and Educator</AccordionTrigger>
                <AccordionContent>
                  I am a passionate trainer for cosmetic practices, sharing my
                  knowledge and expertise to help other professionals excel. My
                  commitment to education ensures I stay updated with the latest
                  advancements in the field.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Research and Pharmacovigilance
                </AccordionTrigger>
                <AccordionContent>
                  My research in pharmacovigilance focuses on the safety and
                  efficacy of cosmetic products, enhancing my approach to
                  practice and product development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Professional Experience</AccordionTrigger>
                <AccordionContent>
                  I have established myself as a trusted consultant in Delhi
                  NCR, collaborating with top clinics and hospitals. My
                  expertise spans general dentistry to advanced cosmetic
                  procedures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Skin Care Brand Entrepreneur
                </AccordionTrigger>
                <AccordionContent>
                  As a cosmetic scientist and entrepreneur, I have developed a
                  skincare line that promotes healthy, glowing skin. My products
                  reflect my commitment to quality and innovation in skincare.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
