"use client";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
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
import Image from "next/image";

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
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start lg:gap-8 gap-4 w-full "
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 flex-1">
            <Image
              src={"/logo.png"}
              width={60}
              height={100}
              alt="sav station logo"
              className="object-contain  h-full w-auto"
            />
            <div className="w-fit h- flex flex-col justify-center ">
              <motion.p
                className="text-xs  sm:text-[12px] font-jacques-francios  font-medium tracking-widest opacity-70 px-1"
                variants={fadeInUp}
              >
                THE UNION AT
              </motion.p>
              <motion.p
                className="text-2xl  sm:text-3xl font-cormorant tracking-widest font-bold"
                variants={fadeInUp}
              >
                THE SAVANNAH STATION
              </motion.p>
              <motion.p
                className="text-xs  font-proza-libre tracking-[0.3em] opacity-70 px-1"
                variants={fadeInUp}
              >
                HISTORIC EVENT CENTER
              </motion.p>
            </div>
          </div>

          <motion.div
            className="opacity-80 font-proza-libre flex flex-col justify-between gap-4"
            variants={fadeInLeft}
          >
            <div>
              <p className="font-proza-libre text-[20px]">ADDRESS</p>
              <p className="w-fit  font-proza-libre font-medium text-[22px]">
                601 Cohen St,
                <br /> Savannah, GA 31401,
                <br /> United States
              </p>
            </div>
            <div className="flex space-x-4 ">
              <motion.div
                className="p-2 bg-transparent hover:bg-[#222] hover:text-white border transition-all duration-200 border-stone-800 text-stone-800 rounded-full cursor-pointer "
                variants={hoverScale}
                whileHover="hover"
                whileTap="rest"
              >
                <Link
                  className="flex gap-2 items-center text-sm"
                  href={
                    "https://www.google.com/maps/place/601+Cohen+St,+Savannah,+GA+31401/@32.072735,-81.1030621,184m/data=!3m1!1e3!4m6!3m5!1s0x88fb9e43f64e9559:0x5fc8ff412e905423!8m2!3d32.0724605!4d-81.1029279!16s%2Fg%2F11c3q13pgb?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                  }
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className=" opacity-80 font-proza-libre flex flex-col justify-between h-full gap-4"
            variants={fadeInLeft}
          >
            <div>
              <p className="font-proza-libre text-[20px]">PHONE</p>
              <p className="w-fit  font-proza-libre font-medium text-[22px]">
                (+1) 912-231-7275
              </p>
            </div>
            <div className="flex space-x-4 ">
              <motion.div
                className="p-2 bg-transparent hover:bg-[#222] hover:text-white border transition-all duration-200 border-stone-800 text-stone-800 rounded-full cursor-pointer "
                variants={hoverScale}
                whileHover="hover"
                whileTap="rest"
              >
                <Facebook className="w-4 h-4 " />
              </motion.div>
              <motion.div
                className="p-2 bg-transparent hover:bg-[#222] hover:text-white border transition-all duration-200 border-stone-800 text-stone-800 rounded-full cursor-pointer "
                variants={hoverScale}
                whileHover="hover"
                whileTap="rest"
              >
                <Link
                  href={"https://www.instagram.com/theunion.savannahstation/"}
                >
                  <Instagram className="w-4 h-4 " />
                </Link>
              </motion.div>
            </div>
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
