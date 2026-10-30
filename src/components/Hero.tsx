"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
            Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Mainur Zaman.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6">
            Full Stack Web Developer
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
            I engineer robust, scalable web applications. I specialize in building responsive digital solutions using modern architectures like Next.js, React, and TypeScript. I focus on writing clean code and delivering seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              as="a"
              href="#" // Change this to "/resume.pdf" and add download="Mainur_Zaman_Resume.pdf" when ready
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-6 rounded-lg shadow-lg shadow-emerald-500/20 transition-all"
            >
              Download Resume
            </Button>
            <Button
              as={Link}
              href="#contact"
              variant="bordered"
              className="w-full sm:w-auto border-emerald-600/50 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500 font-medium px-8 py-6 rounded-lg transition-all"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-md md:-mt-8">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full md:rounded-2xl overflow-hidden border-4 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            <Image
              src="/me.png"
              alt="Mainur Zaman - Full Stack Developer"
              fill
              className="object-cover object-[50%_10%]"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}