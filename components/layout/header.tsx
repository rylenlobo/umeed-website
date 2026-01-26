"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "https://umeedforwomen.wordpress.com/", label: "Blogs" },
  { href: "/resources", label: "Our Resources" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 lg:px-20 flex items-center justify-between">
      {/* Logo */}
      {!isMobileMenuOpen && (
        <Link
          href="/"
          className="relative w-[200px] h-[130px] lg:w-[139px] lg:h-[97px] shrink-0 z-50"
        >
          <Image
            src="/assets/logo.svg"
            alt="UMEED Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 font-serif text-white text-base">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-primary-foreground/80 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <Button shape="pill" size="lg" asChild>
          <Link href="/get-involved">
            Get Involved
            <HeartHandshake className="size-5" />
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-8 h-8 text-foreground" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-6 lg:hidden min-h-dvh "
          >
            <nav className="flex flex-col gap-12 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 flex justify-center">
                <Button
                  className="w-full"
                  shape="pill"
                  size="lg"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/get-involved">
                    Get Involved
                    <HeartHandshake className="size-5" />
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
