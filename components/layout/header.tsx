import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

export function Header() {
  return (
    <header className="hidden lg:flex absolute top-0 left-0 w-full z-50 px-8 py-6 md:px-20  items-center justify-between">
      {/* Logo */}
      <Link href="/" className="relative w-[139px] h-[97px] shrink-0">
        <Image
          src="/assets/logo.svg"
          alt="UMEED Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8 font-serif text-white text-base">
        <Link
          href="/"
          className="hover:text-primary-foreground/80 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-primary-foreground/80 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/programs"
          className="hover:text-primary-foreground/80 transition-colors"
        >
          Our Programs
        </Link>
        <Link
          href="/blogs"
          className="hover:text-primary-foreground/80 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/resources"
          className="hover:text-primary-foreground/80 transition-colors"
        >
          Our Resources
        </Link>
      </nav>

      {/* OTA Button */}
      <Button shape="pill" size="lg" asChild>
        <Link href="/get-involved">
          Get Involved
          <HeartHandshake className="size-5" />
        </Link>
      </Button>
    </header>
  );
}
