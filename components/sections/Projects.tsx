"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, projectCategories } from "@/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, ExternalLink, Github, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof projectCategories)[number];
type Project = (typeof projects)[number];

// ─── Case Study Modal ─────────────────────────────────────────────────────────
const CaseStudyModal = ({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
        </DialogHeader>

        {/* Tech badges */}
        <div className="space-y-5">
          <h4 className="font-semibold mb-2 mt-4 text-muted-foreground uppercase text-xs tracking-wide">
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case study content */}
        <div className="space-y-5 text-sm">
          <div>
            <h4 className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wide">
              Problem
            </h4>
            <p className="leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wide">
              Solution
            </h4>
            <p className="leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-muted-foreground uppercase text-xs tracking-wide">
              Impact
            </h4>
            <p className="leading-relaxed text-primary font-medium">{project.impact}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-2 text-muted-foreground uppercase text-xs tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (p: Project) => void;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3, delay: index * 0.08 }}
  >
    <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2"
            onClick={() => onOpenModal(project)}
          >
            View Case Study
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base">{project.title}</h3>
          <Badge variant="outline" className="text-xs flex-shrink-0">
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  </motion.div>
);

// ─── Projects ─────────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects I&apos;ve built — click any card to see the full case study.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenModal={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case study modal */}
      <CaseStudyModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;