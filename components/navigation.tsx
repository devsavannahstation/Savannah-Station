"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/history", label: "History", mobileLabel: "History" },
  { href: "/gallery", label: "Gallery", mobileLabel: "Gallery" },
  { href: "/contact", label: "Contact Us", mobileLabel: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    // Responsive navigation with mobile-optimized sizing
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm shadow-md rounded-lg h-16 sm:h-20 sm:w-2xl w-[95vw] max-w-sm sm:max-w-2xl px-3 sm:px-10 py-3 sm:py-5">
      <div className="flex justify-between items-center h-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "py-1 text-xs sm:text-xl font-proza-libre font-medium tracking-wide transition-colors duration-300 ease-in-out hover:underline hover:underline-offset-4 sm:hover:underline-offset-8 text-center",
              pathname === item.href
                ? "text-[#211D1E] underline underline-offset-4 sm:underline-offset-8"
                : "text-black hover:-translate-y-1"
            )}
          >
            <span className="block sm:hidden">{item.mobileLabel}</span>
            <span className="hidden sm:block">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
