"use client";

import { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sohan3n",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mainurr-zaman/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/Sohan3n",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/sohan3n",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/80 backdrop-blur-md py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-100 text-sm font-bold">
          &copy; {currentYear} Mainur Zaman. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              isIconOnly
              as={Link}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              aria-label={social.name}
              className="text-slate-100 font-bold hover:text-emerald-400"
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}