"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

export default function Skills() {
  const skillCategories = [
    {
      title: "Foundation",
      skills: ["HTML5", "CSS3", "JavaScript", "ES6 + Problem Solving"],
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "TypeScript (OOP)", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Modular Pattern", "API Integration"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose / ODM"],
    },
    {
      title: "UI Libraries",
      skills: ["Hero UI", "ShadCN"],
    },
    {
      title: "Auth & Security",
      skills: ["BetterAuth", "Role Based Access Control"],
    },
    {
      title: "Advanced Concepts",
      skills: ["DOM vs BOM", "AI Mindset", "AI Integration", "AI Assisted Coding"],
    },
    {
      title: "Payment & Testing",
      skills: ["Stripe", "SSLCommerz", "Intro to Testing"],
    }
  ];

  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
            My <span className="text-emerald-600 dark:text-emerald-400">Skills.</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/30 transition-colors"
            >
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">{category.title}</h4>
              </CardHeader>
              <CardBody className="px-6 py-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Chip 
                      key={skillIndex} 
                      variant="flat" 
                      className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
}