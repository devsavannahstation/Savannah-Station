import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

const galleryImages = [
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
  "/image2.png",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <div className="bg-[#DBE3E5] sm:py-20 py-5 sm:px-20 px-1">
        <div className="container mx-auto px-4 ">
          <div className="text-center sm:py-20 py-5 sm:mb-20 mb-5">
            <h1 className=" lg:text-7xl text-4xl font-cormorant font-bold mb-3">
              Gallery
            </h1>
            <p className="text-black font-proza-libre text-sm lg:text-lg">
              Will Remember Your Happy Moments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((src, index) => (
              <div key={index} className="p-1 w-full">
                <div className="relative w-full h-80 aspect-square">
                  <div className="absolute inset-0 z-50 bg-transparent border-2 border-white m-5 opacity-70"></div>
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
