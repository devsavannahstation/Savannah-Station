"use client";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  gentleScale,
  staggerContainer,
  staggerItem,
  heroTitle,
  heroSubtitle,
  letterAnimation,
  imageReveal,
  buttonHover,
  viewportSettings,
} from "@/lib/animations";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            width={1000}
            height={1000}
            src="/hero.jpg"
            alt="Savannah Station Interior"
            className="w-full h-full object-cover"
          />
          {/* This adds a subtle dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Centered Content Container for Title and Navigation */}
        <div className="absolute inset-0 flex flex-col items-center justify-between z-10 text-center">
          <motion.div
            className="text-white text-center mt-10"
            initial="hidden"
            animate="visible"
          >
            <Image
              width={1000}
              height={1000}
              src="/logo_light.png"
              alt="Savannah Station Logo"
              className="w-full h-36 object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#DBE3E5]  pt-35 ">
        <div className="container mx-auto px-5 w-full">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div className="space-y-5 mb-6" variants={staggerContainer}>
              <motion.h2
                className="sm:text-6xl text-3xl font-cormorant font-bold "
                variants={fadeInUp}
              >
                We want to celebrate with you!
              </motion.h2>
              <motion.p
                className="text-xl font-proza-libre text-stone-600"
                variants={fadeInUp}
              >
                Tell us about your event, we can plan it together
              </motion.p>
            </motion.div>
            <motion.div variants={gentleScale}>
              <Link href="/contact">
                <motion.div
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button className="bg-stone-800 hover:bg-[#4b4737] text-white max-w-3xs w-56 h-16 py-5 px-10 text-2xl font-proza-libre font-medium rounded-2xl">
                    Inquire Now
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row justify-between max-w-4xl mx-auto items-center gap-12 mt-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.div
                className="text-center flex flex-col items-center gap-4 font-proza-libre"
                variants={staggerItem}
              >
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="sm:text-5xl text-2xl   text-stone-800 ">2</p>
                <p className="text-xs font-light text-stone-500 ">
                  Event Rooms
                </p>
              </motion.div>

              <motion.div
                className="text-center flex flex-col items-center gap-4 font-proza-libre"
                variants={staggerItem}
              >
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  9800 Sq. Mt
                </p>
                <p className="text-xs font-light text-stone-500">
                  Total Event Space
                </p>
              </motion.div>

              <motion.div
                className="text-center flex flex-col items-center gap-4 font-proza-libre"
                variants={staggerItem}
              >
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  450
                </p>
                <p className="text-xs font-light text-stone-500">
                  Capacity Largest Space
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className=" h-px bg-stone-400 mt-30 mb-30 w-7xl mx-auto "></div>

          <section className="sm:px-20 mb-28">
            <motion.div
              className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div
                className="space-y-4 order-2 sm:order-1"
                variants={fadeInLeft}
              >
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  Experience Unforgettable <br /> Moments at Savannah Station
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Where elegance meets versatility. Whether you&apos;re planning
                  a wedding, conference, or social gathering , our stunning
                  venue is designed to make every event unforgettable.
                </p>
              </motion.div>
              <motion.div
                className="order-1 sm:order-2 relative"
                variants={imageReveal}
              >
                <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/grid_1.jpg"
                  alt="Event Space"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="relative max-h-94" variants={imageReveal}>
                <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/grid_2.jpg"
                  alt="Wedding Celebration"
                  className="w-full h-full max-h-94 object-cover"
                />
              </motion.div>
              <motion.div className=" space-y-4" variants={fadeInRight}>
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  A Unique Atmosphere that Enhances Every Celebration and
                  Gathering
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Our beautifully designed spaces create the perfect backdrop
                  for your special moments.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div
                className="space-y-4 order-2 sm:order-1"
                variants={fadeInLeft}
              >
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  Host grand occasions in the stately Grand Room
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  With soaring ceilings and a classic ambiance, the Grand Room
                  is perfect for hosting weddings, galas, or corporate events
                </p>
              </motion.div>
              <motion.div
                className="order-1 sm:order-2 relative"
                variants={imageReveal}
              >
                <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/grid_3.jpg"
                  alt="Grand Room"
                  className="w-full h-full object-cover "
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="relative" variants={imageReveal}>
                <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/grid_4.jpg"
                  alt="Wedding Celebration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div className=" space-y-4" variants={fadeInRight}>
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  The Cocktail Room is Designed for Moments and Conversation
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Its cozy atmosphere sets the stage for unforgettable
                  conversations, laughter, and connection, making every event
                  feel personal and special.
                </p>
              </motion.div>
            </motion.div>
          </section>

          <motion.div
            className="relative mb-16 sm:mx-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={imageReveal}
          >
            <div className="absolute inset-0 z-30 bg-transparent border-2 border-white mx-14 my-10 opacity-70"></div>
            <Image
              width={1000}
              height={1000}
              src="/landing.jpg"
              alt="Celebration"
              className="w-full h-150 object-cover shadow-lg aspect-[16/9]"
            />
          </motion.div>

          <motion.div
            className="text-center py-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div className="space-y-5 mb-12" variants={staggerItem}>
              <motion.p
                className="lg:text-5xl md:text-3xl font-cormorant font-bold "
                variants={fadeInUp}
              >
                Plan Your Perfect Event Today
              </motion.p>
              <motion.p
                className="text-xl font-proza-libre text-stone-600"
                variants={fadeInUp}
              >
                Discover the ideal venue for your next event. Schedule a tour or
                reach out for details!
              </motion.p>
            </motion.div>
            <motion.div variants={gentleScale}>
              <Link href="/contact">
                <motion.div
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button className="bg-stone-800 hover:bg-[#4b4737] text-white max-w-3xs w-56 h-16 py-5 px-10 text-2xl font-proza-libre font-medium rounded-2xl">
                    Inquire Now
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <Navigation />
      </div>
      <Footer />
    </div>
  );
}
