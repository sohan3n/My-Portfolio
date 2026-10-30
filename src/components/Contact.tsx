"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
            Let's <span className="text-emerald-600 dark:text-emerald-400">Talk.</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Info & Socials */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Build something together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              I am currently open for new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 text-emerald-600 dark:text-emerald-400">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Chittagong, Bangladesh
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                isIconOnly
                as={Link}
                href="https://github.com/sohan3n"
                target="_blank"
                variant="flat"
                className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              </Button>
              <Button
                isIconOnly
                as={Link}
                href="https://www.linkedin.com/in/mainurr-zaman/"
                target="_blank"
                variant="flat"
                className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="bc640b7a-d321-4e98-9eae-0b686a3b6dbf" />
              
              {/* Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-slate-800 dark:text-slate-100 resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                isLoading={status === "submitting"}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 rounded-lg shadow-md shadow-emerald-500/20 mt-2"
              >
                Send Message
              </Button>

              {status === "success" && (
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm font-medium text-center mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}