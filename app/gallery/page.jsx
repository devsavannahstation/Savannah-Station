"use client";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  galleryGrid,
  galleryItem,
  viewportSettings,
} from "@/lib/animations";

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <div className="bg-[#DBE3E5] sm:py-20 py-5 sm:px-20 px-1">
        <div className="container mx-auto px-4 ">
          <motion.div
            className="text-center sm:py-20 py-5 sm:mb-20 mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.h1
              className=" lg:text-7xl text-4xl font-cormorant font-bold mb-3"
              variants={fadeInUp}
            >
              Gallery
            </motion.h1>
            <motion.p
              className="text-black font-proza-libre text-sm lg:text-lg"
              variants={fadeInUp}
            >
              Will Remember Your Happy Moments
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={galleryGrid}
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="p-1 w-full"
                variants={galleryItem}
                whileHover="hover"
              >
                <div className="relative w-full h-80 aspect-square">
                  <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
