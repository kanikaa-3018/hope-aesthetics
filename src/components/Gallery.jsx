import React, { useState } from "react";
import f1 from "../../public/f1.jpg";
import f2 from "../../public/f2.jpg";
import f3 from "../../public/f3.jpg";
import f4 from "../../public/f4.jpg";
import f5 from "../../public/f5.jpg";
import i1 from "../../public/i1.jpg"; // Treatment images
import i2 from "../../public/i2.jpg";
import i3 from "../../public/i3.jpg";
import i4 from "../../public/i4.jpg";
import i5 from "../../public/i5.jpg";
import i6 from "../../public/i6.jpg";
import i7 from "../../public/i7.jpg";
import i8 from "../../public/i8.jpg";
import i9 from "../../public/i9.jpg";
import i10 from "../../public/i10.jpg";
import i11 from "../../public/i11.jpg";
import i12 from "../../public/i12.jpg";
import i13 from "../../public/i13.jpg";
import i14 from "../../public/i14.jpg";
import kashish from "../../public/kashish.png";
import pfp from "../../public/pfp.jpeg";
import aman from "../../public/aman.jpg";
import srishti from "../../public/srishti.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image to preview

  const images = [
    { src: f1, name: "Skin Analyzer / HydraFacial Machine" },
    { src: f2, name: "Cosmetic laser machine/ Skin Rejuvenation device" },
    { src: f3, name: "Skin care products" },
    { src: f4, name: "Orthodontic Tools" },
    { src: f5, name: "Dental Chair" },
  ];

  const reviews = [
    {
      name: "Aman Goel",
      email: "goyalaaman@gmail.com",
      photo: aman,
      review:
        "I underwent PRP treatment at Hope Aesthetics and couldn't be happier with the exceptional care I received. Despite having a significant phobia of needles, the team went above and beyond to make me feel comfortable and at ease throughout the process. Their patience, professionalism, and compassionate approach truly stood out. I highly recommend Hope Aesthetics for anyone seeking effective treatment with a personal touch.",
      rating: 5,
    },
    {
      name: "Kashish Agarwal",
      email: "agarwalkashish81@gmail.com",
      photo: kashish,
      review:
        "I, Kashish Agarwal, have been receiving treatments for hair fall and dental care at Hope Aesthetics, and the results have been outstanding. My entire family has been trusting Hope Aesthetics for years, and the consistent care and expertise we receive keep us coming back. Their personalized approach and exceptional service make every visit worthwhile.",
      rating: 5,
    },
    {
      name: "Kanika Singhal",
      email: "kanikasinghal0308@gmail.com",
      photo: pfp,
      review:
        "I visited Hope Aesthetics for dandruff and hair fall issues, and the results have been incredible. The treatments were effective, and the team provided excellent guidance on aftercare to maintain the improvements. My scalp feels healthier, and the hair fall has significantly reduced. I’m so glad I chose Hope Aesthetics for this journey!",
      rating: 5,
    },
    {
      name: "Srishti Singh",
      email: "srishtisinghrawat@gmail.com",
      photo: srishti,
      review:
        "I received treatment for acne post-pregnancy at Hope Aesthetics, and my experience was truly remarkable. The treatment was quick, effective, and tailored to my needs. What impressed me the most was the aftercare support provided through WhatsApp, even during my trip. The team ensured I was well-guided and cared for every step of the way, making my journey to clear skin smooth and satisfying.",
      rating: 5,
    },
  ];

  const treatmentImages = [
    { src: i1, description: "Live treatment session for HydraFacial" },
    { src: i2, description: "Orthodontic treatment in progress" },
    { src: i3, description: "Dental procedure happening live" },
    { src: i4, description: "Facial treatment with advanced technology" },
    { src: i5, description: "Skin rejuvenation session underway" },
    { src: i6, description: "Live consultation for hair restoration" },
    { src: i7, description: "Advanced laser treatment session" },
    { src: i8, description: "Advanced laser treatment session" },
    { src: i9, description: "Advanced laser treatment session" },
    { src: i10, description: "Advanced laser treatment session" },
    { src: i11, description: "Advanced laser treatment session" },
    { src: i12, description: "Advanced laser treatment session" },
    { src: i13, description: "Advanced laser treatment session" },
    { src: i14, description: "Advanced laser treatment session" },
  ];

  const openPreview = (src) => {
    setSelectedImage(src);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col gap-12 bg-[#f9f9f9] pt-12 " id="gallery">
      {/* Header */}
      <div className="text-center py-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-[#441752]">
          Here's a Glimpse of Services Offered by Us!
        </h1>
        <p className="text-md text-gray-600 mt-2">
          Explore our wide range of aesthetic and healthcare services.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 -mb-8">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Service Highlights
        </h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-sm text-center px-2">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Treatment Images Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          Live Treatment Sessions in Action
        </h2>
        <p className="text-md text-gray-600 text-center mb-5">
          See how complex treatments are provided by Hope Aesthetics.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {treatmentImages.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={item.src}
                alt={item.description}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openPreview(item.src)} // Open preview on click
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}

      {/* Customer Reviews */}

      <div className="bg-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold  mb-6 text-center text-[#441752]">
            Our Customer Reviews
          </h2>
          <div className="flex gap-4 items-center justify-start overflow-x-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center min-w-[350px] mx-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{review.email}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-center mb-4 line-clamp-5 w-[250px]">
                  {review.review}
                </p>
                <div className="flex">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, i) => (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
