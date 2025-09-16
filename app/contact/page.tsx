"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import Image from "next/image";

export default function ContactPage() {
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, phone }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Enquiry sent successfully!");
    } else {
      alert("Failed to send enquiry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <div className="bg-[#F4F3F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="lg:text-7xl text-4xl font-cormorant font-bold mb-4 text-stone-800">
              Enquiry
            </h1>
            <p className="text-stone-700 font-proza-libre text-md lg:text-lg">
              We eagerly anticipate helping you plan your upcoming event at
              Savannah Station
            </p>
          </div>

          {/* Contact Form */}
          <div className="p-8 text-center">
            <form
              className="space-y-8 lg:max-w-3xl max-w-xl mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Event */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Event"
                  {...register("event")}
                  className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600"
                />
                {errors.event && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.event.message}
                  </p>
                )}
              </div>

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Surname */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Surname"
                  {...register("surname")}
                  className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600"
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.surname.message}
                  </p>
                )}
              </div>

              {/* Phone with flags */}
              <div className="relative">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  placeholder="123-456-7890"
                  onChange={(value) => {
                    setPhone(value);
                    setValue("phone", value);
                  }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid black",
                    borderRadius: "100px",
                    width: "100%",
                    fontSize: "16px",
                    padding: "10px 10px 10px 50px",
                  }}
                  buttonStyle={{
                    background: "transparent",
                    border: "none",
                  }}
                  dropdownStyle={{
                    background: "#F4F3F0",
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Mail"
                  {...register("email")}
                  className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={3}
                  {...register("message")}
                  className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-8">
                <Button
                  type="submit"
                  className="bg-stone-800 hover:bg-[#4b4737] text-white px-12 py-4 text-lg font-medium rounded-full"
                >
                  Enquire Now
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-8 mb-16 mt-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="lg:text-6xl text-4xl font-cormorant font-bold mb-6 text-stone-800">
                  REACH OUT TO SAVANNAH STATION
                </h3>
                <p className="leading-relaxed text-stone-700 font-proza-libre mb-6 text-lg">
                  Feel free to contact us with any questions, reservation
                  requests, or inquiries for further details. We are here to
                  help you create the perfect event experience.
                </p>
                <div className="space-y-2 text-stone-700 font-proza-libre leading-relaxed">
                  <p>
                    Phone: <strong>+1 912 233-5400</strong>
                  </p>
                  <p>
                    Mail: <strong>events@savannahstation.com</strong>
                  </p>
                  <p>
                    Address:{" "}
                    <strong>
                      601 Cohen St, Savannah, GA 31401, United States
                    </strong>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Image
                  width={600}
                  height={400}
                  src="/_DSC3609 copy.jpg"
                  alt="Venue Interior"
                  className="w-full h-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24 pt-16 bg-[#E9E6E1] w-full">
        <h3 className="text-4xl lg:text-6xl font-cormorant font-bold mb-8 text-center text-stone-800">
          Will Remember Your Happy Moments
        </h3>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            <Image
              width={500}
              height={300}
              src="/_DSC3609 copy.jpg"
              alt="Wedding Celebration"
              className="w-full h-100 object-cover"
            />
            <Image
              width={500}
              height={300}
              src="/_DSC3609 copy.jpg"
              alt="Dinner Reception"
              className="w-full h-100 object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
