import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4b4737] text-white py-8 h-full">
      <div className="container mx-auto px-4">
        <p className="text-2xl lg:text-5xl font-cormorant tracking-wider font-bold">
          THE SAVANNAH STATION
        </p>
        <p className="text-xs lg:text-md font-inter mb-10 lg:tracking-[2.0em] tracking-[1.0em] opacity-70">
          HISTORIC EVENT CENTER
        </p>

        <div className="flex justify-between items-start lg:gap-8 gap-4">

          <div className="flex-1 opacity-80 lg:text-xl text-sm font-proza-libre">
            <p className=" lg:mb-4">+1 912-233-5400</p>
            <p className=" lg:mb-8">
              601 Cohen St, Savannah, GA 31401, United States
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="p-2 border border-gray-400 rounded-full cursor-pointer ">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="p-2 border border-gray-400 rounded-full cursor-pointer ">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

            <div className="ml-90">
              <h4 className="font-semibold mb-3">Info</h4>
              <ul className="space-y-2 lg:text-lg text-md opacity-80">
                <li>Home</li>
                <li>History</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex-2">
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
          </div>

        <div className="flex border-t border-gray-100 mt-8 pt-4 text-center text-sm opacity-75 justify-between">
          <p>©2025 - All rights reserved by Savannah Station</p>
          <p>
            Owned & Managed by <u>HOS Management</u> Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
