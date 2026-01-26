import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  LucideYoutube,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className=" text-white font-sans w-full overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-primary border-b border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-xl sm:text-2xl mb-3 text-white">
                Stay Connected
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-sans">
                Join our community and receive inspiring stories, leadership
                tips, and event updates directly in your inbox by subscribing to
                our newsletter.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-primary">
        <div className="bg-primary container mx-auto">
          <div className=" bg-primary grid px-4 py-12 md:py-16  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1: Empowering Women Leaders (Span 5 cols) */}
            <div className="bg-primary lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl mb-6">
                  Empowering Women Leaders
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                  We are dedicated to empowering women to lead with confidence,
                  purpose, and impact. Through mentorship, education, and
                  community, we're building the next generation of female
                  leaders who will shape our world.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:connect@umeedforwomen.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    connect@umeedforwomen.com
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-white/90 leading-relaxed">
                    19-4-332/C-1, Kishanbagh, Bahadurpura, <br />
                    Hyderabad, Telangana-500064
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (Span 3 cols) */}
            <div className="lg:col-span-3 lg:pl-8">
              <h3 className="font-serif text-xl sm:text-2xl mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/programs", label: "Our Programs" },
                  { href: "https://umeedforwomen.wordpress.com/", label: "Blogs" },
                  { href: "/resources", label: "Our Resources" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect With Us (Span 4 cols) */}
            <div className="bg-primary lg:col-span-4 lg:pl-8">
              <h3 className="font-serif text-xl sm:text-2xl mb-6">
                Connect With Us
              </h3>
              <p className="text-white/80 mb-6">
                Follow our journey and join our community
              </p>
              <div className="flex items-center gap-4">
                {[
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/Umeedforwomen",
                  },
                  {
                    Icon: LucideYoutube,
                    href: "https://www.youtube.com/channel/UC_BMd-b-L6mcfkBZGoeiVYA",
                  },
                  {
                    Icon: Instagram,
                    href: "#https://www.instagram.com/umeedforwomen/",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/company/umeedforwomen/?viewAsMember=true",
                  },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-primary">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-white/50 text-sm font-sans">
            © UMEED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
