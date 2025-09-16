"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    // Add positioning classes here to make the component fixed and centered
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm shadow-md rounded-lg">
      <div className="flex justify-center space-x-2 p-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-5 py-2 text-sm font-medium tracking-wide transition-colors hover:underline hover:underline-offset-2",
              pathname === item.href
                ? "text-[#4b4737] underline "
                : "text-black hover:-translate-y-1"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
