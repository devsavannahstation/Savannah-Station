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

      <div className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className=" lg:text-7xl text-4xl font-cormorant font-bold mb-3">Gallery</h1>
            <p className="text-black font-proza-libre text-sm lg:text-lg">
              Will Remember Your Happy Moments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        
            {galleryImages.map((src, index) => (
              <div key={index} className="p-1.0 ">
                <div className="relative w-full h-64">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
