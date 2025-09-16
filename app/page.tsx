import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            width={1000}
            height={1000}
            src="/image3.png"
            alt="Savannah Station Interior"
            className="w-full h-full object-cover"
          />
          {/* This adds a subtle dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Centered Content Container for Title and Navigation */}
        <div className="absolute inset-0 flex flex-col items-center justify-between z-10 text-center">
          <div className="text-white text-center mt-10">
            <h1 className="text-3xl lg:text-6xl font-cormorant font-bold uppercase mb-1 tracking-[0.1em]">
              THE SAVANNAH STATION
            </h1>
            <p className="text-xs lg:text-lg opacity-90 font-inter font-light lg:tracking-[1.6em] lg:[word-spacing:1.0em] tracking-[1.1em] [word-spacing:0.5em]">
              HISTORIC EVENT CENTER
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-stone-50 py-18 pt-35">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="lg:text-5xl md:text-3xl font-cormorant font-bold mb-4 ">
              We want to celebrate with you!
            </h2>
            <p className="mb-6 text-lg text-stone-600">
              Tell us about your event, we can plan it together
            </p>
            <Link href="/contact">
              <Button className="bg-stone-800 hover:bg-[#4b4737] text-white px-8 py-3 text-lg">
                Enquire Now
              </Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
              <div className="text-center">
                <div className="w-16 h-px bg-stone-400 mx-auto mb-6"></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre  text-stone-800 ">
                  2
                </p>
                <p className="text-xs font-light text-stone-500 mt-2">
                  Event Rooms
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-px bg-stone-400 mx-auto mb-6"></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  9800 Sq. Mt
                </p>
                <p className="text-xs font-light text-stone-500  mt-2">
                  Total Event Space
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-px bg-stone-400 mx-auto mb-6"></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  450
                </p>
                <p className="text-xs font-light text-stone-500  mt-2">
                  Capacity Largest Space
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-stone-400 mt-30 mb-30"></div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="lg:text-5xl md:text-3xl font-cormorant font-bold mb-4">
                Experience Unforgettable Moments at Savannah Station
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Where elegance meets versatility. Whether you&apos;re planning a
                wedding, conference, or social gathering , our stunning venue is
                designed to make every event unforgettable.
              </p>
            </div>
            <div>
              <Image
                width={1000}
                height={1000}
                src="/_DSC3650.jpg"
                alt="Event Space"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="order-2 md:order-1">
              <Image
                width={1000}
                height={1000}
                src="/_DSC3512 copy.jpg"
                alt="Wedding Celebration"
                className="w-full h-full object-cover  shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="lg:text-5xl md:text-3xl font-cormorant font-bold mb-4">
                A Unique Atmosphere that Enhances Every Celebration and
                Gathering
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Our beautifully designed spaces create the perfect backdrop for
                your special moments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="lg:text-5xl md:text-3xl font-cormorant font-bold mb-4">
                Indulge in the Grandeur of the Grand Room & Cocktail Room
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Experience the height of sophistication within two of Savannah
                Station&apos;s most captivating spaces.
              </p>
            </div>
            <div>
              <Image
                width={1000}
                height={1000}
                src="/_DSC3559 copy.jpg"
                alt="Grand Room"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <Image
              width={1000}
              height={1000}
              src="/_DSC3609 copy.jpg"
              alt="Celebration"
              className="w-full h-150 object-cover shadow-lg"
            />
          </div>

          <div className="text-center">
            <p className="lg:text-5xl md:text-3xl font-cormorant font-bold mb-3">
              Plan Your Perfect Event Today
            </p>
            <p className="text-sm font-inter font-light mb-10">
              Discover the ideal venue for your next event. Schedule a tour or
              reach out for details!
            </p>
            <Link href="/contact">
              <Button className="bg-stone-800 hover:bg-[#4b4737] text-white px-8 py-3 text-lg">
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
