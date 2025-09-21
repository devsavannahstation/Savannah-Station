"use client";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  hoverScale,
  viewportSettings,
} from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#DBE3E5] to-[#9CB0BB] text-black py-8 h-full sm:px-20 px-4">
      <motion.div
        className="container mx-auto sm:px-4 px-0"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={staggerContainer}
      >
        <motion.p
          className="text-2xl sm:text-4xl font-cormorant tracking-widest font-bold"
          variants={fadeInUp}
        >
          THE SAVANNAH STATION
        </motion.p>
        <motion.p
          className="text-xs sm:text-sm font-proza-libre font-medium sm:tracking-[1.1em] tracking-[0.7em] mb-10 opacity-70 px-1"
          variants={fadeInUp}
        >
          HISTORIC EVENT CENTER
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start lg:gap-8 gap-4 w-full "
          variants={staggerContainer}
        >
          <motion.div
            className=" space-y-5 opacity-80 sm:text-xl text-sm font-proza-libre "
            variants={fadeInLeft}
          >
            <p>+1 912-233-5400</p>
            <p className="w-full ">
              601 Cohen St, Savannah, GA 31401, United States
            </p>
            <div className="flex space-x-4 ">
              <motion.div
                className="p-2 border border-black rounded-full cursor-pointer "
                variants={hoverScale}
                whileHover="hover"
                whileTap="rest"
              >
                <Facebook className="w-4 h-4 text-black" />
              </motion.div>
              <motion.div
                className="p-2 border border-black rounded-full cursor-pointer "
                variants={hoverScale}
                whileHover="hover"
                whileTap="rest"
              >
                <Instagram className="w-4 h-4 text-black" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="" variants={fadeInUp}>
            <h4 className="font-semibold text-2xl font-proza-libre mb-3">
              Info
            </h4>
            <motion.ul
              className="space-y-2 sm:text-lg text-sm opacity-80 font-proza-libre flex flex-col gap-2"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <Link href="/">Home</Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="/history">History</Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="/gallery">Gallery</Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="/contact">Contact Us</Link>
              </motion.div>
            </motion.ul>
          </motion.div>

          <motion.div className="sm:block hidden" variants={fadeInRight}>
            <iframe
              width="539px"
              height="320px"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=539px&amp;height=320px&amp;hl=en&amp;q=601%20Cohen%20St,%20Savannah,%20GA%2031401,%20United%20States+(THE%20SAVANNAH%20STATION)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                densità di popolazione Italia mappa
              </a>
            </iframe>
          </motion.div>
          <motion.div className="sm:hidden block" variants={fadeInRight}>
            <iframe
              width="100%"
              height="200px"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=539px&amp;height=320px&amp;hl=en&amp;q=601%20Cohen%20St,%20Savannah,%20GA%2031401,%20United%20States+(THE%20SAVANNAH%20STATION)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                densità di popolazione Italia mappa
              </a>
            </iframe>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex border-t border-black mt-8 pt-4 text-center text-sm opacity-75 justify-between"
          variants={fadeInUp}
        >
          <p>©2025 - All rights reserved by Savannah Station</p>
          <p>
            Owned & Managed by <u>HOS Management</u> Inc
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
