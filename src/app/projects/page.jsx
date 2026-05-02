"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { projects as allProjects } from "@/data/portfolio";
import StarBackground from "@/components/StarBackground";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StarBackground />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-text-main tracking-tight mb-4">All Projects</h1>
          <p className="text-text-muted text-xl">A complete collection of my work and experiments.</p>
        </div>
        <Projects items={allProjects} isAllProjectsPage={true} />
      </main>
      <Footer />
    </div>
  );
}
