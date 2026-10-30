"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-slate-100 dark:bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects.</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl hover:border-emerald-500/30 transition-all group flex flex-col h-full"
            >
              <CardBody className="p-0 overflow-hidden relative h-56 shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </CardBody>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                  {project.summary}
                </p>
                
                <Button 
                  as={Link} 
                  href={`/projects/${project.id}`}
                  className="w-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white font-semibold transition-colors mt-auto"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
}