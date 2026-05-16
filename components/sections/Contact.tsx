"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Validation schema ─────────────────────────────────────────────────────────
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

// ─── Contact Section ──────────────────────────────────────────────────────────
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (_values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate network delay for now
      await new Promise((r) => setTimeout(r, 1000));

      toast.success("Got it.", {
        description: "I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try emailing me directly at rajaghera2004@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rajaghera2004@gmail.com",
      href: "mailto:rajaghera2004@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8128524724", 
      href: "tel:+918128524724",
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background glow for modern interactive feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Got a Project? <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Let&apos;s Talk.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it&apos;s a product you want to build from scratch, a codebase that needs rescuing, or a role you think I&apos;d crush — my inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="grid gap-6">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  target={info.target}
                  rel={info.rel}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="font-medium mb-4 text-foreground">Find Me Online</p>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com/AgheraRaj" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="https://www.linkedin.com/in/raj-aghera-391b25248/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6 md:p-8 shadow-md relative group overflow-hidden"
          >
            {/* Interactive Form Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-background/50 focus:bg-background transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-background/50 focus:bg-background transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What are we building?" className="bg-background/50 focus:bg-background transition-colors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about the project — what it does, where you&apos;re at, and what you need from me..."
                          className="min-h-[150px] resize-none bg-background/50 focus:bg-background transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full gap-2 relative overflow-hidden group/btn" disabled={isSubmitting}>
                  <div className="absolute inset-0 bg-primary/20 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send It →
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;