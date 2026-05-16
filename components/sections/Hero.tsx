"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Code2, FolderOpen, Terminal } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

// ─── Constants ────────────────────────────────────────────────────────────────
const LINES = [
  "I build products people actually use.",
  "Full-stack. Fast. Production-ready.",
  "I turn ideas into scalable products.",
  "From zero to deployed — end to end.",
  "Let's ship something remarkable.",
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
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight min-h-[3.5rem] md:min-h-[4rem] tracking-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500">
        {displayed}
      </span>
      <span
        className="inline-block w-[3px] h-[0.85em] ml-[4px] align-middle rounded-sm bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"
        style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.08s" }}
        aria-hidden="true"
      />
    </h1>
  );
};

// ─── Spotlight ───────────────────────────────────────────────────────────────
const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: useTransform(
          [mouseX, mouseY],
          ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, oklch(0.6 0.25 270 / 0.08), transparent 80%)`
        ),
      }}
    />
  );
};

// ─── Floating Cards ───────────────────────────────────────────────────────────
const FloatingCard = ({ children, delay = 0, yOffset = 20, className = "" }: { children: React.ReactNode, delay?: number, yOffset?: number, className?: string }) => {
  const y = useMotionValue(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, yOffset, 0] }}
        transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="p-5 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 shadow-2xl group hover:border-primary/50 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <Spotlight />

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse delay-700 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        {/* Left column */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal Status Strip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6 font-mono text-xs text-muted-foreground"
          >
            <span className="text-green-400">▶</span>
            <span className="text-muted-foreground/60">~/raj-aghera</span>
            <span className="text-muted-foreground/40">$</span>
            <span className="text-foreground/70">npm run build-future</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-foreground/80">
                Open to freelance & full-time
              </span>
            </Badge>
          </motion.div>

          <TypewriterHeading />

          <p className="text-xl md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            I engineer full-stack web products — from pixel-perfect UIs to battle-tested APIs — built for scale, speed, and the real world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 gap-2">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm border-border hover:bg-primary/5 transition-all hover:scale-105 active:scale-95 gap-2">
              <Link href="https://github.com/AgheraRaj" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Social Proof / Tech Stack row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center gap-6 text-muted-foreground/60"
          >
            <p className="text-sm font-medium uppercase tracking-widest">Tech Stack</p>
            <div className="flex gap-4">
              <span className="hover:text-primary transition-colors cursor-default">React</span>
              <span className="hover:text-primary transition-colors cursor-default">Next.js</span>
              <span className="hover:text-primary transition-colors cursor-default">TypeScript</span>
              <span className="hover:text-primary transition-colors cursor-default">Node.js</span>
              <span className="hover:text-primary transition-colors cursor-default">PostgreSQL</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column — Enhanced Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[600px] hidden lg:block w-full"
        >
          {/* Card 1: Architecture */}
          <FloatingCard delay={0.4} yOffset={-20} className="top-[5%] left-[10%] z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform shadow-inner">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold">Full-Stack Architect</p>
                <p className="text-xs text-muted-foreground">UI → API → Database</p>
              </div>
            </div>
          </FloatingCard>

          {/* Card 2: Projects */}
          <FloatingCard delay={0.6} yOffset={25} className="top-[30%] right-[5%] z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-500 group-hover:scale-110 transition-transform shadow-inner">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold">9+ Shipped Projects</p>
                <p className="text-xs text-muted-foreground">Real products. Real impact.</p>
              </div>
            </div>
          </FloatingCard>

          {/* Card 3: Code Snippet */}
          <FloatingCard delay={0.8} yOffset={-15} className="bottom-[15%] left-[5%] z-30 scale-110">
            <div className="flex flex-col gap-3 min-w-[200px]">
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60 ml-2">developer.ts</span>
              </div>
              <div className="text-xs font-mono">
                <p><span className="text-primary">const</span> raj = {"{"}</p>
                <p className="pl-4">available: <span className="text-green-400">true</span>,</p>
                <p className="pl-4">focus: <span className="text-fuchsia-400">&apos;impact&apos;</span>,</p>
                <p className="pl-4">ships: <span className="text-fuchsia-400">&apos;on time&apos;</span></p>
                <p>{"}"};</p>
              </div>
            </div>
          </FloatingCard>

          {/* Card 4: Now Building */}
          <FloatingCard delay={1.0} yOffset={18} className="top-[68%] left-[50%] z-10">
            <div className="flex items-center gap-3 min-w-[190px]">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Now Building</p>
                <p className="text-sm font-bold leading-tight">Portfolio v3.0</p>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40 font-bold">Explore</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;