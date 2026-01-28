"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Reset state after 3 seconds
    setTimeout(() => {
        setSubmitted(false);
        setEmail("");
    }, 3000);
  };

  return (
    <>
      {/* Hidden iframe to prevent page redirection */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />

      <form
        method="post"
        action="https://subscribe.wordpress.com"
        acceptCharset="utf-8"
        target="hidden_iframe"
        className="flex w-full md:w-auto flex-col lg:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        onSubmit={handleSubmit}
      >
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="w-full h-12 md:min-w-100 px-4 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow duration-300 font-sans"
        />
        <input type="hidden" name="action" value="subscribe" />
        <input type="hidden" name="blog_id" value="183772449" />
        <input
          type="hidden"
          name="source"
          value="https://umeedforwomen.wordpress.com/author/umeedforwomen/?blogid=183772449&blogsub=confirming&blogid=183772449&blogsub=spammed"
        />
        <input type="hidden" name="sub-type" value="actionbar-follow" />
        <input type="hidden" id="_wpnonce" name="_wpnonce" value="ff31970f58" />
        <Button
          variant="secondary"
          disabled={submitted}
          className="w-full lg:w-[120px]  hover:bg-white/90 font-medium "
          size="lg"
          type={submitted ? "button" : "submit"}
        >
          {submitted ? (
            <span className="text-[#9b0258]">Subscribed!</span>
          ) : (
            <>
              <Send className="w-5 h-5 -ml-1 text-[#9b0258]" />
              <span className="text-[#9b0258]">Subscribe</span>
            </>
          )}
        </Button>
      </form>
    </>
  );
}
