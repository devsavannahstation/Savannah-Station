"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  formFieldStagger,
  formField,
  imageReveal,
  buttonHover,
  viewportSettings,
} from "@/lib/animations";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      event: "",
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Enquiry sent successfully!", {
          description: "We'll get back to you soon!",
          duration: 4000,
        });
        form.reset();
      } else {
        toast.error("Failed to send enquiry", {
          description: "Please try again or contact us directly.",
          duration: 4000,
        });
      }
    } catch {
      toast.error("Failed to send enquiry", {
        description: "Please check your connection and try again.",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <div className="bg-[#DBE3E5]  sm:py-20 py-5 sm:px-20 px-1">
        <div className="container mx-auto px-4 ">
          <motion.div
            className="text-center space-y-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.h1
              className="lg:text-7xl text-4xl font-cormorant font-bold text-stone-800"
              variants={fadeInUp}
            >
              Inquiry
            </motion.h1>
            <motion.p
              className="text-stone-700 font-proza-libre text-md lg:text-lg"
              variants={fadeInUp}
            >
              We eagerly anticipate helping you plan your upcoming event at
              Savannah Station
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <div className="sm:p-8 p-0 text-center">
            <Form {...form}>
              <motion.form
                className="space-y-8 lg:max-w-3xl max-w-xl mx-auto"
                onSubmit={form.handleSubmit(onSubmit)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={formFieldStagger}
              >
                {/* Event */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="event"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            placeholder="Event"
                            {...field}
                            className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-stone-800"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Name */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-stone-800"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Surname */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            placeholder="Surname"
                            {...field}
                            className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-stone-800"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Phone with flags */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <PhoneInput
                            country={"us"}
                            value={field.value}
                            placeholder="123-456-7890"
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                            inputProps={{
                              name: "phone",
                              required: true,
                              autoFocus: false,
                            }}
                            inputStyle={{
                              background: "transparent",
                              border: "none",
                              borderBottom: "2px solid #DBE3E5",
                              borderRadius: "0",
                              width: "100%",
                              fontSize: "18px",
                              padding: "12px 12px 12px 50px",
                              outline: "none",
                              color: "#1c1917",
                            }}
                            buttonStyle={{
                              background: "transparent",
                              border: "none",
                              borderBottom: "2px solid #DBE3E5",
                            }}
                            dropdownStyle={{
                              background: "#DBE3E5",
                              color: "hsl(var(--popover-foreground))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "6px",
                              boxShadow:
                                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                              zIndex: 50,
                              minWidth: "8rem",
                              padding: "4px",
                              maxHeight: "300px",
                              overflowY: "auto",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Mail"
                            {...field}
                            className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-stone-800"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={formField}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            rows={3}
                            {...field}
                            className="w-full bg-transparent border-0 border-b-2 border-stone-600 focus:outline-none py-3 text-lg placeholder-stone-600 resize-none rounded-none shadow-none focus-visible:ring-0 focus-visible:border-stone-800 min-h-fit"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1 text-left" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit button */}
                <motion.div className="pt-8" variants={formField}>
                  <motion.div
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-stone-800 hover:bg-[#4b4737] disabled:bg-stone-400 disabled:cursor-not-allowed text-white max-w-3xs w-56 h-16 py-5 px-10 text-2xl font-proza-libre font-medium rounded-2xl transition-colors"
                    >
                      {isSubmitting ? "Sending..." : "Inquire Now"}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Form>
          </div>

          <motion.div
            className="space-y-8 mb-16 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div className="space-y-4" variants={fadeInLeft}>
                <h3 className="lg:text-6xl leading-tight text-4xl font-cormorant font-bold  text-stone-800">
                  REACH OUT TO <br /> SAVANNAH <br /> STATION
                </h3>
                <p className="leading-relaxed text-stone-700 font-proza-libre text-lg">
                  Feel free to contact us with any questions, reservation
                  requests, or inquiries for further details. We are excited to
                  welcome you and make you a part of the union at savannah
                  station family
                </p>
                <div className="space-y-2 text-sm text-stone-700 font-proza-libre leading-relaxed">
                  <p>
                    Phone: <strong>+1 912-231-7275</strong>
                  </p>
                  <p>
                    Mail: <strong>info@savstation.com</strong>
                  </p>
                  <p>
                    Address:{" "}
                    <strong>
                      601 Cohen St, Savannah, GA 31401, United States
                    </strong>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="mt-6 aspect-[16/9] relative"
                variants={imageReveal}
              >
                <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
                <Image
                  width={600}
                  height={400}
                  src="/phone.jpg"
                  alt="Venue Interior"
                  className="w-full h-100 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pb-24 sm:pt-16 pt-8 sm:px-0 px-0 bg-[#DBE3E5] w-full">
        <motion.h3
          className="text-4xl lg:text-6xl font-cormorant font-bold mb-8 text-center text-stone-800 sm:px-0 px-1"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          Will Remember Your Happy Moments
        </motion.h3>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div
              className=" aspect-[16/9] relative"
              variants={imageReveal}
            >
              <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
              <Image
                width={500}
                height={300}
                src="/cake.jpg"
                alt="Wedding Celebration"
                className="w-full h-100 object-cover"
              />
            </motion.div>
            <motion.div
              className=" aspect-[16/9] relative"
              variants={imageReveal}
            >
              <div className="absolute inset-0 z-30 bg-transparent border-2 border-white m-5 opacity-70"></div>
              <Image
                width={500}
                height={300}
                src="/dine.jpg"
                alt="Dinner Reception"
                className="w-full h-100 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
