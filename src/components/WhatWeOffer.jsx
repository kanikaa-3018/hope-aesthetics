import { useState } from "react";

const WhatWeOffer = () => {
  const [selectedSection, setSelectedSection] = useState("dental");

  const sections = {
    dental: [
      { title: "General Dentistry", description: "Routine check-ups, cleanings, fillings, extractions, and more." },
      { title: "Cosmetic Dentistry", description: "Teeth whitening, veneers, crowns, bridges, and smile design." },
      { title: "Restorative Dentistry", description: "Dental implants, crowns, bridges, and dentures to restore your smile." },
      { title: "Pediatric Dentistry", description: "Gentle dental services for children, from routine check-ups to fillings." },
      { title: "Orthodontics", description: "Braces and Invisalign to straighten your teeth and improve your smile." },
      { title: "Oral Surgery", description: "Wisdom teeth removal, dental implant placement, and other surgeries." },
      { title: "Dental Implants", description: "Permanent tooth replacement solutions to restore your smile." },
      { title: "Smile Design", description: "Customized smile makeovers to enhance your appearance and self-esteem." },
      { title: "Teeth Whitening & Bleaching", description: "Brighten your teeth with professional whitening solutions." },
      { title: "Pyorrhea and Gum Treatments", description: "Comprehensive care for gum health and periodontal diseases." },
      { title: "Ultrasonic Scaling", description: "Advanced cleaning for removing plaque and tartar buildup." },
      { title: "Migraine Treatment", description: "Specialized dental care to help manage migraines." },
      { title: "Dimple Plasty", description: "Aesthetic enhancement for creating natural dimples." },
    ],
    skin: [
      { title: "Medical Facials", description: "Custom facials to target specific skin concerns." },
      { title: "Cosmetic Lasers", description: "Advanced laser treatments for skin rejuvenation and tightening." },
      { title: "Hydra Facial", description: "A deep cleansing and hydrating facial for glowing skin." },
      { title: "Facial Contouring", description: "Non-surgical techniques to enhance your facial structure." },
      { title: "PRP (Skin & Hair)", description: "Platelet-rich plasma therapy for skin and hair rejuvenation." },
      { title: "Botox & Fillers", description: "Wrinkle reduction and volume enhancement treatments." },
      { title: "Anti-Aging Treatments", description: "Solutions to reduce fine lines, wrinkles, and age spots." },
      { title: "Acne & Scar Treatments", description: "Effective solutions for acne and scar management." },
      { title: "Skin Whitening", description: "Advanced procedures to brighten and even out skin tone." },
      { title: "BB Glow Facial", description: "Semi-permanent makeup effect for radiant skin." },
      { title: "Lip Lightening", description: "Treatments to restore natural lip color and brightness." },
    ],
    health: [
      { title: "Laser Hair Reduction", description: "Permanent hair removal solutions using advanced laser technology." },
      { title: "Hair Regrowth Treatments", description: "Therapies to stimulate hair growth and strengthen hair follicles." },
      { title: "Hair Transplant Surgery", description: "Surgical solutions for hair restoration." },
      { title: "Plasmolifting", description: "Platelet-rich plasma therapy for hair and scalp health." },
      { title: "Permanent Makeup", description: "Long-lasting solutions for brows, lips, and eyeliner." },
      { title: "Body Shaping & Liposuction", description: "Non-surgical and surgical body contouring solutions." },
      { title: "Scar & Hair Camouflage", description: "Techniques to conceal scars and improve hair density appearance." },
    ],
  };

  return (
    <div className="flex flex-col gap-6 bg-[#E5D9F2]  pb-16" id="facilities">
      <div className="text-center pt-8 pb-4">
        <h1 className="text-md text-gray-700">What we Offer at</h1>
        <h1 className="font-extrabold text-4xl md:text-5xl text-gray-800">HOPE AESTHETICS</h1>
      </div>

      {/* Section navigation */}
      <div className="w-full flex justify-center mb-8 gap-4 px-4">
        <div
          onClick={() => setSelectedSection("dental")}
          className={`cursor-pointer flex items-center justify-center w-48 h-16 rounded-lg shadow-md font-bold text-lg transition-all duration-300 ${
            selectedSection === "dental" ? "bg-[#441752] text-white scale-105" : "bg-white text-gray-700"
          } hover:shadow-lg`}
        >
          Dental Services
        </div>
        <div
          onClick={() => setSelectedSection("health")}
          className={`cursor-pointer flex items-center justify-center w-48 h-16 rounded-lg shadow-md font-bold text-lg transition-all duration-300 ${
            selectedSection === "health" ? "bg-[#441752] text-white scale-105" : "bg-white text-gray-700"
          } hover:shadow-lg`}
        >
          Hair Treatments
        </div>
        <div
          onClick={() => setSelectedSection("skin")}
          className={`cursor-pointer flex items-center justify-center w-48 h-16 rounded-lg shadow-md font-bold text-lg transition-all duration-300 ${
            selectedSection === "skin" ? "bg-[#441752] text-white scale-105" : "bg-white text-gray-700"
          } hover:shadow-lg`}
        >
          Skin Care
        </div>
      </div>

      {/* Section content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-12">
        {sections[selectedSection].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 border-t-4 border-[#441752] transition-transform duration-200 transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
