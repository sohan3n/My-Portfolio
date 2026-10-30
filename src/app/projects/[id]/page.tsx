import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { projects } from "@/data/projects";

// FIX 1: Tell Next.js exactly which project IDs to pre-render
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* FIX 2: Standard Next.js Link styled as a button to prevent client serialization errors */}
        <Link
          href="/#projects"
          className="inline-flex items-center mb-8 text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 tracking-tight">
          {project.title}
        </h1>

        {/* Big Hero Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Details & Tech Stack Split */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Column: Description & Action Links */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* String attributes like as="a" are perfectly safe to pass to Client Components */}
              <Button
                as="a"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-6 shadow-md shadow-emerald-500/20"
              >
                View Live Site
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Button>
              <Button
                as="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 font-medium px-6 py-6"
              >
                View GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="w-full md:w-1/3">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Chip
                    key={index}
                    variant="flat"
                    className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}