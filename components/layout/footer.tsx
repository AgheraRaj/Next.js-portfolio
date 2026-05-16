"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Code2, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Bio */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center bg-primary text-primary-foreground shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Raj Aghera</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              Full-stack engineer who builds complete products — from the database schema to the deployed UI. Based in Ahmedabad, available worldwide.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/AgheraRaj" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/raj-aghera-391b25248/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:rajaghera2004@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 lg:col-span-3 lg:col-start-7">
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-7 lg:col-span-3">
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                Ahmedabad, Gujarat, India
              </li>
              <li>
                <a href="mailto:rajaghera2004@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  rajaghera2004@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918128524724" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 8128524724
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Raj Aghera. Built with Next.js & obsession.</p>
            <p className="text-xs text-muted-foreground/50">Ahmedabad, India 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
}