import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
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
          <div className="absolute inset-0 bg-black/40"></div>
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
      <div className="bg-[#DBE3E5] py-18 pt-35 ">
        <div className="container mx-auto px-5 w-full">
          <div className="text-center mb-12">
            <div className="space-y-5 mb-6">
              <h2 className="sm:text-6xl text-3xl font-cormorant font-bold ">
                We want to celebrate with you!
              </h2>
              <p className="text-xl font-proza-libre text-stone-600">
                Tell us about your event, we can plan it together
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-stone-800 hover:bg-[#4b4737] text-white max-w-3xs w-56 h-16 py-5 px-10 text-2xl font-proza-libre font-medium rounded-2xl">
                Inquire Now
              </Button>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between max-w-4xl mx-auto items-center gap-12 mt-10">
              <div className="text-center flex flex-col items-center gap-4 font-proza-libre">
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="sm:text-5xl text-2xl   text-stone-800 ">2</p>
                <p className="text-xs font-light text-stone-500 ">
                  Event Rooms
                </p>
              </div>

              <div className="text-center flex flex-col items-center gap-4 font-proza-libre">
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  9800 Sq. Mt
                </p>
                <p className="text-xs font-light text-stone-500">
                  Total Event Space
                </p>
              </div>

              <div className="text-center flex flex-col items-center gap-4 font-proza-libre">
                <div className="w-16 h-px bg-stone-400 mx-auto "></div>
                <p className="lg:text-5xl md:text-2xl font-proza-libre text-stone-800">
                  450
                </p>
                <p className="text-xs font-light text-stone-500">
                  Capacity Largest Space
                </p>
              </div>
            </div>
          </div>

          <div className=" h-px bg-stone-400 mt-30 mb-30 w-7xl mx-auto "></div>

          <section className="sm:px-20 mb-28">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16">
              <div className="space-y-4 order-2 sm:order-1">
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  Experience Unforgettable <br /> Moments at Savannah Station
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Where elegance meets versatility. Whether you&apos;re planning
                  a wedding, conference, or social gathering , our stunning
                  venue is designed to make every event unforgettable.
                </p>
              </div>
              <div className="order-1 sm:order-2 relative">
                <div className="absolute inset-0 z-50 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/_DSC3650.jpg"
                  alt="Event Space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16">
              <div className="relative">
                <div className="absolute inset-0 z-50 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/_DSC3512 copy.jpg"
                  alt="Wedding Celebration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" space-y-4">
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  A Unique Atmosphere that Enhances Every Celebration and
                  Gathering
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Our beautifully designed spaces create the perfect backdrop
                  for your special moments.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-start mb-16">
              <div className="space-y-4 order-2 sm:order-1">
                <h3 className="sm:text-[52px] text-3xl font-cormorant font-bold  leading-tight">
                  Indulge in the Grandeur of the Grand Room & Cocktail Room
                </h3>
                <p className="text-stone-600 text-xl font-proza-libre leading-tight max-w-xl">
                  Experience the height of sophistication within two of Savannah
                  Station&apos;s most captivating spaces.
                </p>
              </div>
              <div className="order-1 sm:order-2 relative">
                <div className="absolute inset-0 z-50 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/_DSC3559 copy.jpg"
                  alt="Grand Room"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </section>

          <div className="relative mb-16 sm:mx-20">
            <div className="absolute inset-0 z-50 bg-transparent border-2 border-white m-5 opacity-70"></div>
            <Image
              width={1000}
              height={1000}
              src="/_DSC3609 copy.jpg"
              alt="Celebration"
              className="w-full h-150 object-cover shadow-lg aspect-[16/9]"
            />
          </div>

          <div className="text-center py-16">
            <div className="space-y-5 mb-12">
              <p className="lg:text-5xl md:text-3xl font-cormorant font-bold ">
                Plan Your Perfect Event Today
              </p>
              <p className="text-xl font-proza-libre text-stone-600">
                Discover the ideal venue for your next event. Schedule a tour or
                reach out for details!
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-stone-800 hover:bg-[#4b4737] text-white max-w-3xs w-56 h-16 py-5 px-10 text-2xl font-proza-libre font-medium rounded-2xl">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Navigation />

      <Footer />
    </div>
  );
}
