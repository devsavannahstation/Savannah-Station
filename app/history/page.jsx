"use client";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  imageReveal,
  viewportSettings,
} from "@/lib/animations";

export default function HistoryPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <Navigation />

      <div className="bg-[#DBE3E5] py-20 sm:px-20 px-5">
        <div className="container mx-auto sm:px-4 px-0">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.h1
              className="text-5xl sm:text-7xl font-cormorant font-bold mb-4"
              variants={fadeInUp}
            >
              "Our Service comes from Our History"
            </motion.h1>
          </motion.div>

          <div className="space-y-16 mt-16">
            {/* Historic Building Section */}
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div variants={imageReveal}>
                <Image
                  width={1000}
                  height={1000}
                  src="/history.jpg"
                  alt="Historic Savannah Station"
                  className="w-full aspect-[16/9]  mx-auto h-94 sm:h-150 object-cover mb-16"
                />
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-5xl font-cormorant font-bold mb-6 tracking-wider"
                variants={fadeInUp}
              >
                History of Savannah Station
              </motion.h2>
              <motion.p
                className="text-stone-600 text-xs lg:text-xl mab-4 mx-auto max-w-6xl font-proza-libre leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                Savannah&apos;s recorded history begins in 1733. That&apos;s the
                year General James Oglethorpe and the 120 passengers of the good
                ship "Anne" landed on a bluff high along the Savannah River in
                February. Oglethorpe named the 13th and final American colony
                "Georgia" after England&apos;s King George II. Savannah became
                its first city.
              </motion.p>
            </motion.div>

            {/* Gilded Age President Section */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center sm:gap-0 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="w-full sm:w-1/2 " variants={fadeInLeft}>
                <Image
                  width={1000}
                  height={1000}
                  src="/gifted.jpg"
                  alt="Gilded Age President"
                  className="w-auto h-94 object-cover aspect-square"
                />
              </motion.div>
              <motion.div className="text-center" variants={fadeInRight}>
                <h3 className="sm:text-5xl text-4xl font-cormorant font-bold mb-6">
                  Gifted to President
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  Savannah was symbolically gifted to President Abraham Lincoln
                  by Union General William T. Sherman during the American Civil
                  War. On December 22, 1864, Sherman sent a telegram to Lincoln,
                  offering the city of Savannah as a Christmas gift. This
                  gesture occurred after Sherman&apos;s successful capture of
                  the city during his March to the Sea campaign. Sherman&apos;s
                  message read in part, "I beg to present you as a Christmas
                  gift the city of Savannah with 150 heavy guns and plenty of
                  ammunition and also about 25,000 bales of cotton". This act
                  was more symbolic than a literal transfer of ownership, as it
                  represented a strategic military victory and a significant
                  step toward ending the war.
                </p>
              </motion.div>
            </motion.div>

            {/* Historic Plans */}
            <motion.div
              className="text-center sm:m-28 sm:mx-0 sm:my-0 mx-5 my-10 m-0"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={imageReveal}
            >
              <Image
                width={1000}
                height={1000}
                src="/map.png"
                alt="Historic Building Plans"
                className="lg:w-full sm:max-w-4xl max-w-full mx-auto sm:w-120 w-full h-90 lg:h-150 object-cover mb-6"
              />
            </motion.div>

            {/* Southern Service Section */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-16 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div
                className="text-center w-full sm:w-2/3"
                variants={fadeInLeft}
              >
                <h3 className="sm:text-5xl text-4xl font-cormorant font-bold mb-6">
                  Architect Symbol
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mb-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  Savannah Union Station was designed by architect Frank Pierce
                  Milburn in a blend of Spanish Renaissance and Elizabethan
                  styles. The station featured an impressive octagonal rotunda,
                  80 feet in diameter, serving as the main waiting room. The
                  exterior was constructed with pressed brick, granite, and
                  terra cotta trimmings, including two towers. The station was
                  completed in 1902 at a cost of $150,000.
                </p>
              </motion.div>
              <motion.div variants={fadeInRight}>
                <Image
                  width={1000}
                  height={1000}
                  src="/architect.jpg"
                  alt="Station Exterior"
                  className="w-auto h-94 object-cover mb-6 aspect-square"
                />
              </motion.div>
            </motion.div>

            {/* Heritage Badges */}
            <motion.div
              className="text-center "
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div
                className="flex sm:flex-row flex-col items-center justify-center lg:space-x-16  gap-8 mb-16"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/logo_1.png"
                    alt="Heritage Society"
                    className="lg:w-75 lg:h-75 w-50 h-50 object-contain rounded-full"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/logo_2.png"
                    alt="Heritage Society"
                    className="lg:w-75 lg:h-75 w-50 h-50 object-contain rounded-full"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/logo_3.png"
                    alt="Heritage Society"
                    className="lg:w-75 lg:h-75 w-50 h-50object-contain rounded-full"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="text-center sm:py-20 py-10"
                variants={fadeInUp}
              >
                <h2 className="sm:text-5xl text-4xl lg:text-5xl font-cormorant font-bold mb-6 tracking-wider">
                  Export and Import Hub
                </h2>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  The station served as a major hub for the Atlantic Coast Line
                  Railroad, Seaboard Air Line Railroad, and Southern Railway. It
                  was a key point of entry for visitors and commerce,
                  contributing significantly to the local economy. Several
                  notable trains stopped at Union Station, such as the Champion,
                  Everglades, Havana Special, Palmetto, Silver Meteor, and
                  Sunland.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-between gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInLeft}>
                <Image
                  width={1000}
                  height={1000}
                  src="/62.jpg"
                  alt="Gilded Age President"
                  className="w-auto h-94 lg:h-94 object-cover aspect-square"
                />
              </motion.div>
              <motion.div className="text-center" variants={fadeInRight}>
                <h3 className="text-5xl font-cormorant font-bold mb-6">
                  62 years of Legacy
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-3xl font-proza-libre leading-relaxed opacity-90">
                  Union Station became the heart of Black Savannah, with its
                  surroundings hosting numerous Black-owned businesses,
                  including theaters, funeral homes, and insurance companies.
                  Despite segregation, with separate waiting rooms for Black and
                  white passengers, the area thrived culturally and
                  economically.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={imageReveal}
            >
              <Image
                width={1000}
                height={1000}
                src="/rail.jpg"
                alt="Historic Building Plans"
                className="lg:w-full sm:max-w-4xl max-w-full mx-auto sm:w-120 w-full h-90 lg:h-150 object-cover mb-2"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
