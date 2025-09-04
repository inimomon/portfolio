// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section className="relative h-[200vh] isolate">
        <div className="sticky top-0 h-screen z-0">
          <Hero />
        </div>

        <div className="absolute top-[100vh] left-0 right-0 z-10">
          <div className="px-10 h-auto bg-black">
            <Projects />
            <Tech />
            <About />
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}