"use client";

import { motion } from "framer-motion";
import { timeline } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Star, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const typeConfig = {
  education: { icon: GraduationCap, color: "text-blue-500",   bg: "bg-blue-500/10 border-blue-500/20", shadow: "shadow-blue-500/20" },
  work:       { icon: Briefcase,    color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/20", shadow: "shadow-purple-500/20" },
  milestone:  { icon: Star,         color: "text-amber-500",  bg: "bg-amber-500/10 border-amber-500/20", shadow: "shadow-amber-500/20" },
  current:    { icon: Zap,          color: "text-green-500",  bg: "bg-green-500/10 border-green-500/20", shadow: "shadow-green-500/20" },
} as const;

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "3+",   label: "Years Experience" },
  { value: "15+",  label: "Projects Completed" },
  { value: "10+",  label: "Happy Clients" },
  { value: "500+", label: "Weekly Downloads" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Intro & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-10">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" className="mb-4 bg-primary/5 border-primary/20 text-primary px-3 py-1 text-sm font-medium">
                  Who am I
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Crafting Digital <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Experiences</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I&apos;m a full-stack developer from Ahmedabad, India, passionate about building
                  intelligent, scalable products that are fast, accessible, and a joy to use.
                </p>
                <div className="flex gap-4">
                  <Button className="rounded-md" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume <Download className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-5 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <p className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{stat.value}</p>
                      <p className="text-sm font-medium text-muted-foreground leading-tight">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                My Journey
              </h3>

              {/* Modern Timeline Container */}
              <div className="relative pl-12 md:pl-0 mt-4 md:mt-0">
                {/* Vertical Line for Desktop */}
                <div className="hidden md:block absolute left-[120px] top-4 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border/50 to-transparent" />
                
                {/* Vertical Line for Mobile */}
                <div className="md:hidden absolute left-[16px] top-4 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border/50 to-transparent" />

                <div className="space-y-12">
                  {timeline.map((item, index) => {
                    const { icon: Icon, color, bg, shadow } = typeConfig[item.type];

                    return (
                      <motion.div
                        key={`${item.year}-${index}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
                      >
                        {/* Year (Desktop: Left, Mobile: Top) */}
                        <div className="md:w-24 shrink-0 flex items-start md:justify-end pt-2">
                          <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {item.year}
                          </span>
                        </div>

                        {/* Animated Node */}
                        <div className="absolute left-[-48px] md:left-[104px] top-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-background border-2 ${bg.split(' ')[1]} shadow-lg ${shadow} z-10 relative group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-4 h-4 ${color}`} />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1">
                          <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group/card">
                            
                            {/* Card Hover Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 ${bg.split(' ')[0]}`} />

                            <div className="flex flex-wrap items-center gap-3 mb-3 relative z-10">
                              <h4 className="text-lg font-bold text-foreground">
                                {item.title}
                              </h4>
                              {item.type === "current" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-green-500/10 text-green-500 border border-green-500/20 animate-pulse">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;