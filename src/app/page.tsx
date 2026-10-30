import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Skills />
      {/* We will drop the About, Skills, Projects, and Contact sections here next */}
    </main>
  );
}