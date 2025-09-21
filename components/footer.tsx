import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#DBE3E5] to-[#9CB0BB] text-black py-8 h-full sm:px-20 px-4">
      <div className="container mx-auto sm:px-4 px-0">
        <p className="text-2xl sm:text-4xl font-cormorant tracking-widest font-bold">
          THE SAVANNAH STATION
        </p>
        <p className="text-xs sm:text-sm font-proza-libre font-medium sm:tracking-[1.1em] tracking-[0.7em] mb-10 opacity-70 px-1">
          HISTORIC EVENT CENTER
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start lg:gap-8 gap-4 w-full ">
          <div className=" space-y-5 opacity-80 sm:text-xl text-sm font-proza-libre ">
            <p>+1 912-233-5400</p>
            <p className="w-full ">
              601 Cohen St, Savannah, GA 31401, United States
            </p>
            <div className="flex space-x-4 ">
              <div className="p-2 border border-black rounded-full cursor-pointer ">
                <Facebook className="w-4 h-4 text-black" />
              </div>
              <div className="p-2 border border-black rounded-full cursor-pointer ">
                <Instagram className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold text-2xl font-proza-libre mb-3">
              Info
            </h4>
            <ul className="space-y-2 sm:text-lg text-sm opacity-80 font-proza-libre flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/history">History</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact Us</Link>
            </ul>
          </div>

          <div className="sm:block hidden">
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
          </div>
          <div className="sm:hidden block">
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
          </div>
        </div>

        <div className="flex border-t border-black mt-8 pt-4 text-center text-sm opacity-75 justify-between">
          <p>©2025 - All rights reserved by Savannah Station</p>
          <p>
            Owned & Managed by <u>HOS Management</u> Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
