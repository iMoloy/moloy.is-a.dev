import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { profile, about, experience, education, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About paragraphs={about} />
        <Projects />
        <Experience items={experience} />
        <Education items={education} />
      </main>
      <Footer />
    </div>
  );
}
