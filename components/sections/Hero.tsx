"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Code2, FolderOpen, Terminal } from "lucide-react";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────
const LINES = [
  "Hi, I'm Raj Aghera.",
  "I craft full-stack web experiences.",
  "I turn ideas into scalable products.",
  "Clean code. Thoughtful design.",
  "Let's build something great together.",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 350;

// ─── TypewriterHeading ────────────────────────────────────────────────────────
const TypewriterHeading = () => {
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const ms = phase === "pausing" ? 530 : 380;
    const id = setInterval(() => setCursorVisible((v) => !v), ms);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    const target = LINES[lineIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const variance = Math.random() * 30 - 10;
        const id = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          TYPE_SPEED + variance
        );
        return () => clearTimeout(id);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const id = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const variance = Math.random() * 15 - 5;
        const id = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          DELETE_SPEED + variance
        );
        return () => clearTimeout(id);
      } else {
        setPhase("waiting");
      }
    }

    if (phase === "waiting") {
      const id = setTimeout(() => {
        setLineIndex((i) => (i + 1) % LINES.length);
        setPhase("typing");
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(id);
    }
  }, [phase, displayed, lineIndex]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight min-h-[3.5rem] md:min-h-[4rem]">
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.85em] ml-[2px] align-middle rounded-sm bg-primary"
        style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.08s" }}
        aria-hidden="true"
      />
    </h1>
  );
};

// ─── AvailabilityBadge ────────────────────────────────────────────────────────
const AvailabilityBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
    <span className="text-xs font-medium text-green-600 dark:text-green-400">
      Available for freelance
    </span>
  </div>
);

// ─── Floating Cards ───────────────────────────────────────────────────────────
const FloatingCard = ({ children, delay = 0, yOffset = 20, className = "" }: { children: React.ReactNode, delay?: number, yOffset?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, yOffset, 0] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      className="p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-xl group hover:border-primary/50 transition-colors duration-500"
    >
      {children}
    </motion.div>
  </motion.div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AvailabilityBadge />
          <TypewriterHeading />

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Full Stack Developer crafting modern web experiences with a focus on
            performance and clean architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Scroll to contact */}
            <Button asChild variant="default" className="gap-2">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>

            <Button asChild variant="outline" className="gap-2">
              <Link href="https://github.com/AgheraRaj" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right column — Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-[400px] lg:h-[500px] hidden md:block w-full"
        >
          {/* Center decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse" />

          {/* Tech Stack Card */}
          <FloatingCard delay={0.2} yOffset={-15} className="top-[10%] left-[5%] z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium">Stack</p>
                <p className="text-xs text-muted-foreground">React • Next.js • TS</p>
              </div>
            </div>
          </FloatingCard>

          {/* Projects Card */}
          <FloatingCard delay={0.4} yOffset={20} className="top-[45%] right-[0%] z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium">3+ Projects</p>
                <p className="text-xs text-muted-foreground">Deployed & Live</p>
              </div>
            </div>
          </FloatingCard>

          {/* Open to Work Card */}
          <FloatingCard delay={0.6} yOffset={-25} className="bottom-[15%] left-[20%] z-30">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </div>
              <p className="text-sm font-medium">Open to Work</p>
            </div>
          </FloatingCard>

          {/* Code Snippet Card */}
          <FloatingCard delay={0.8} yOffset={15} className="top-[28%] right-[15%] z-30 opacity-80 scale-90">
             <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-muted-foreground" />
              <div className="text-xs font-mono text-muted-foreground">
                <span className="text-blue-500">const</span> developer = <span className="text-purple-500">new</span> FullStack();
              </div>
             </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;