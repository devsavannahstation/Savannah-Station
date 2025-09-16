import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <div className="bg-[#F4F3F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl lg:text-8xl font-cormorant font-bold mb-4">
              "Our Service comes from Our History"
            </h1>
          </div>

          <div className="space-y-16 mt-16">
            {/* Historic Building Section */}
            <div className="text-center mb-20">
              <Image
                width={1000}
                height={1000}
                src="/history1.png"
                alt="Historic Savannah Station"
                className="w-full  mx-auto h-94 lg:h-150 object-cover mb-16"
              />
              <h2 className="text-3xl lg:text-5xl font-cormorant font-bold mb-6 tracking-wider">
                History of Savannah Station
              </h2>
              <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                Savannah&apos;s recorded history begins in 1733. That&apos;s the year
                General James Oglethorpe and the 120 passengers of the good ship
                "Anne" landed on a bluff high along the Savannah River in
                February. Oglethorpe named the 13th and final American colony
                "Georgia" after England&apos;s King George II. Savannah became its
                first city.
              </p>
            </div>

            {/* Gilded Age President Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  width={1000}
                  height={1000}
                  src="/history2.png"
                  alt="Gilded Age President"
                  className="w-full h-94 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-cormorant font-bold mb-6">
                  Gilded Age President
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  Savannah was symbolically gifted to President Abraham Lincoln
                  by Union General William T. Sherman during the American Civil
                  War. On December 22, 1864, Sherman sent a telegram to Lincoln,
                  offering the city of Savannah as a Christmas gift. This
                  gesture occurred after Sherman&apos;s successful capture of the
                  city during his March to the Sea campaign. Sherman&apos;s message
                  read in part, "I beg to present you as a Christmas gift the
                  city of Savannah with 150 heavy guns and plenty of ammunition
                  and also about 25,000 bales of cotton". This act was more
                  symbolic than a literal transfer of ownership, as it
                  represented a strategic military victory and a significant
                  step toward ending the war.
                </p>
              </div>
            </div>

            {/* Historic Plans */}
            <div className="text-center m-28">
              <Image
                width={1000}
                height={1000}
                src="/history3.png"
                alt="Historic Building Plans"
                className="lg:w-full max-w-4xl mx-auto w-120 h-90 lg:h-150 object-cover mb-6"
              />
            </div>

            {/* Southern Service Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div className="text-center">
                <h3 className="text-4xl font-cormorant font-bold mb-6">
                  Architect Symbol
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  Savannah Union Station was designed by architect Frank Pierce
                  Milburn in a blend of Spanish Renaissance and Elizabethan
                  styles. The station featured an impressive octagonal rotunda,
                  80 feet in diameter, serving as the main waiting room. The
                  exterior was constructed with pressed brick, granite, and
                  terra cotta trimmings, including two towers. The station was
                  completed in 1902 at a cost of $150,000.
                </p>
              </div>
              <div >
                <Image
                  width={1000}
                  height={1000}
                  src="/history2.png"
                  alt="Station Exterior"
                  className="w-full h-94 object-cover mb-6"
                />
              </div>
            </div>

            {/* Heritage Badges */}
            <div className="text-center ">
              <div className="flex justify-center lg:space-x-16 space-x-8 mb-16">
                <Image
                  width={1000}
                  height={1000}
                  src="/history1.png"
                  alt="Heritage Society"
                  className="lg:w-75 lg:h-75 w-50 h-50 object-contain rounded-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/history1.png"
                  alt="Heritage Society"
                  className="lg:w-75 lg:h-75 w-50 h-50 object-contain rounded-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/history1.png"
                  alt="Heritage Society"
                  className="lg:w-75 lg:h-75 w-50 h-50object-contain rounded-full"
                />
              </div>

              <div className="text-center mb-20">
                <h2 className="text-3xl lg:text-5xl font-cormorant font-bold mb-6 tracking-wider">
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
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  width={1000}
                  height={1000}
                  src="/history2.png"
                  alt="Gilded Age President"
                  className="w-full h-94 lg:h-120 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-cormorant font-bold mb-6">
                  62 years of Legacy
                </h3>
                <p className="text-stone-600 text-xs lg:text-lg mab-4 mx-auto max-w-5xl font-proza-libre leading-relaxed opacity-90">
                  Union Station became the heart of Black Savannah, with its
                  surroundings hosting numerous Black-owned businesses,
                  including theaters, funeral homes, and insurance companies.
                  Despite segregation, with separate waiting rooms for Black and
                  white passengers, the area thrived culturally and
                  economically.
                </p>
              </div>
            </div>

            <div className="text-center mt-20">
              <Image
                width={1000}
                height={1000}
                src="/history3.png"
                alt="Historic Building Plans"
                className="lg:w-full max-w-4xl mx-auto w-120 h-90 lg:h-150 object-cover mb-2"
              />
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
