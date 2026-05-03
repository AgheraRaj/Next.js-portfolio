"use client";

import GithubStats from "@/components/github-stats";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="min-h-screen bg-background md:mx-5">
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* GitHub Activity */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          GitHub Activity
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GithubStats username="AgheraRaj" />
        </motion.div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;