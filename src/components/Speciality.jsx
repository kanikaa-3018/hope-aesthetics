import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import aging from "../../public/aging.jpeg";

const specializations = [
  {
    title: "Facial Rejuvenation",
    description:
      "Transform your look with advanced facial treatments tailored to restore youthful radiance and glow.",
    image:
      "https://i.pinimg.com/736x/e1/10/1b/e1101be4f45dfa48de14333f59825cd9.jpg",
  },
  {
    title: "Skin Treatments",
    description:
      "Personalized skincare solutions for flawless, glowing, and healthy skin.",
    image:
      "https://i.pinimg.com/736x/9c/dd/e2/9cdde27b3d00092363f08a3b9e3d3099.jpg",
  },
  {
    title: "Dental Extraction",
    description:
      "Safe and efficient tooth extraction services to ensure your dental health.",
    image:
      "https://i.pinimg.com/236x/df/d9/c7/dfd9c70e0723ee97ab52bf4fe9c6f768.jpg",
  },
  {
    title: "Laser Therapy",
    description:
      "Safe and effective laser treatments for skin resurfacing and hair removal.",
    image:
      "https://i.pinimg.com/736x/5d/03/b5/5d03b5b95979ac12d72991a14de36a99.jpg",
  },
  {
    title: "Anti-Aging Solutions",
    description:
      "Reverse the signs of aging with our state-of-the-art anti-aging treatments.",
    image: aging,
  },
  {
    title: "Teeth Whitening",
    description: "Achieve the perfect teeth.",
    image:
      "https://i.pinimg.com/736x/c4/0f/50/c40f50e26ad1c0c2fce5bb6598f5a4a6.jpg",
  },
  {
    title: "Hair Restoration",
    description:
      "Comprehensive solutions for hair loss and restoration using modern techniques.",
    image:
      "https://i.pinimg.com/236x/ce/55/6a/ce556a23629d81490ecb0f9e90315b36.jpg",
  },
  {
    title: "Root Canal",
    description:
      "Save and restore your natural teeth with painless and effective root canal treatments.",
    image:
      "https://i.pinimg.com/236x/46/12/86/461286106d0fb3c9e71054ef2dfb09f4.jpg",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Maintain oral hygiene with professional teeth cleaning for a healthy and bright smile.",
    image:
      "https://i.pinimg.com/236x/5d/e8/1f/5de81f5a3773e6bea719b54691af5ddf.jpg",
  },
];

export default function Speciality() {
  return (
    <div className="mb-8">
      <h1
        className="text-4xl font-bold text-center mt-16 gradient-text"
        // style={{
        //   textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
        // }}
      >
        Our Specializations
      </h1>
      <div
        className="flex overflow-x-auto gap-6 p-4 my-8 mx-20"
        style={{
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          .flex::-webkit-scrollbar {
            display: none;
          }
          .card-image-container {
            position: relative;
            overflow: hidden;
            height: 200px;
            width: 100%;
          }
          .card-image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }
          .card:hover .card-image {
            transform: scale(1.1);
          }
          .card-content {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        `}</style>
        {specializations.map((specialization, index) => (
          <Card
            className="card w-[300px]"
            key={index}
            sx={{
              maxWidth: 245,
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            <CardActionArea>
              <div className="card-image-container">
                <CardMedia
                  className="card-image"
                  component="img"
                  image={specialization.image}
                  alt={specialization.title}
                />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="card-content font-extrabold hover:underline text-2xl -mb-2"
                >
                  {specialization.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  className="card-content"
                >
                  {specialization.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
          
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
