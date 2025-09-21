"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-b to-[#DBE3E5] from-[#9CB0BB] text-black py-6">
      <div className="container mx-auto px-4 text-center">
        <Image
          width={1000}
          height={1000}
          src="/logo_dark.png"
          alt="Savannah Station Logo"
          className="w-full h-36 object-contain"
        />
      </div>
    </header>
  );
}
