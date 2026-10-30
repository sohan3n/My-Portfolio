"use client";

import { Card, CardBody } from "@heroui/card";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-slate-100 dark:bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
            About <span className="text-emerald-600 dark:text-emerald-400">Me.</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="flex flex-col gap-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              My journey into software development is rooted in a deep appreciation for structured learning and problem-solving. Through rigorous technical training and hands-on engineering tracks, I have dedicated myself to mastering modern web architectures, focusing heavily on the MERN stack and Next.js.
            </p>
            <p>
              I thrive on organizing complex concepts into intuitive systems. As the founder and curriculum developer for Speakwip Valley, I discovered a profound passion for designing logical, step-by-step educational frameworks. I bring that exact same structural mindset to my development work—architecting clean, typed code and building seamless, user-centric web applications.
            </p>
            <p>
              Beyond the screen, I am fascinated by linguistics and am currently on a dedicated mission to master a Modern Received Pronunciation (RP) accent. When I step away from the keyboard and phonetic drills, I stay energized by staying active outdoors—whether that is playing cricket, jumping into a game of football, or swimming.
            </p>
          </div>

          {/* Visual Cards Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CardBody className="p-6 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Clean Code</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Writing scalable, maintainable logic.</p>
              </CardBody>
            </Card>

            <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CardBody className="p-6 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Curriculum Design</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Speakwip Valley Founder.</p>
              </CardBody>
            </Card>

            <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CardBody className="p-6 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h10"></path>
                    <path d="M9 4v16"></path>
                    <path d="m3 9 3 3-3 3"></path>
                    <path d="M14 8h6"></path>
                    <path d="M14 12h6"></path>
                    <path d="M14 16h6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Linguistics</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Acquiring Modern RP Accent.</p>
              </CardBody>
            </Card>

            <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CardBody className="p-6 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
                    <path d="M2 14s1.5-2 5-2 5 2 5 2 1.5 2 5 2 5-2 5-2"></path>
                    <path d="M2 19s1.5-2 5-2 5 2 5 2 1.5 2 5 2 5-2 5-2"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Active Life</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Football, Cricket & Swimming.</p>
              </CardBody>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}