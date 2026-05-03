"use client";
import React, { useEffect, useState } from "react";
import { Calendar, GitBranch, GitCommit, Star, TrendingUp, Activity, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  username: string;
}
interface GithubStats {
  user: {
    totalContributions: number;
  };
  contributions: {
    count: number;
    date: string;
  }[];
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch(`/api/github?username=${username}`);
        if (!response.ok) throw new Error(`Error fetching data`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError("Failed to fetch github stats");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubStats();
  }, [username]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto min-h-[400px] flex items-center justify-center relative">
        {/* Animated Loading Rings */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <div className="absolute w-24 h-24 border-4 border-secondary/20 border-b-primary rounded-full animate-[spin_1.5s_linear_reverse]" />
          <Github className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 rounded-3xl bg-destructive/5 border border-destructive/20 text-center">
        <p className="text-destructive font-medium">{error || "No data available"}</p>
      </div>
    );
  }

  const currentStreak = stats.contributions.slice().reverse().reduce((streak, day, index) => {
    if (index === 0 && day.count === 0) return 0;
    if (day.count > 0) return streak + 1;
    return streak;
  }, 0);

  const maxContributions = Math.max(...stats.contributions.map((day) => day.count));
  const last30Days = stats.contributions.slice(-30);

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

  return (
    <div className="relative w-full max-w-8xl mx-auto py-10 group/wrapper">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50 group-hover/wrapper:opacity-100 transition-opacity duration-1000" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10"
      >
        
        {/* LEFT COLUMN: Profile info & Streak */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Main Title Card */}
          <motion.div variants={itemVariants} className="flex-1 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-primary/20 mb-8 shadow-lg shadow-primary/5">
                  <Github className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">Code Activity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A real-time view of my daily open-source contributions, commits, and coding habits.
                </p>
              </div>

              <div className="mt-12">
                <a 
                  href={`https://github.com/${username}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]"
                >
                  <TrendingUp className="w-4 h-4" />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Current Streak Card */}
          <motion.div variants={itemVariants} className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 flex items-center justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" /> Current Streak
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-foreground">{currentStreak}</p>
                <span className="text-sm font-medium text-muted-foreground">days</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-orange-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-orange-500/60 transition-colors">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Stats & Graph */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Commits Card */}
            <motion.div variants={itemVariants} className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500" />
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-blue-500" /> Total Contributions
                  </p>
                  <p className="text-4xl font-bold text-foreground">
                    {stats.user.totalContributions.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                  <GitCommit className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            {/* Best Day Card */}
            <motion.div variants={itemVariants} className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors duration-500" />
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" /> Highest Single Day
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-foreground">{maxContributions}</p>
                    <span className="text-sm font-medium text-muted-foreground">commits</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Bar Chart for Last 30 Days */}
          <motion.div variants={itemVariants} className="flex-1 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                30-Day Velocity
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </h4>
              <span className="text-xs font-medium px-3 py-1 bg-secondary/50 rounded-full text-muted-foreground">
                Commit Frequency
              </span>
            </div>

            <div className="h-[140px] w-full flex items-end justify-between gap-1 sm:gap-2">
              <TooltipProvider delayDuration={0}>
                {last30Days.map((day, i) => {
                  const heightPercent = maxContributions > 0 ? Math.max(8, (day.count / maxContributions) * 100) : 8;
                  const isZero = day.count === 0;

                  return (
                    <Tooltip key={day.date}>
                      <TooltipTrigger asChild>
                        <div className="relative group/bar flex-1 flex flex-col justify-end h-full cursor-pointer">
                          {/* Hover Highlight Backdrop */}
                          <div className="absolute inset-x-0 bottom-0 h-[120%] bg-secondary/30 rounded-t-md opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none -z-10" />
                          
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: `${heightPercent}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.8, 
                              delay: i * 0.02, 
                              ease: [0.16, 1, 0.3, 1] 
                            }}
                            className={cn(
                              "w-full rounded-t-sm transition-all duration-300 relative",
                              isZero 
                                ? "bg-secondary border-t border-border/50" 
                                : "bg-primary shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                            )}
                          >
                            {!isZero && (
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-sm" />
                            )}
                          </motion.div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top" 
                        className="bg-card/95 backdrop-blur-md border border-border/50 shadow-2xl p-3 rounded-xl"
                        sideOffset={10}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-foreground text-sm flex items-center gap-2">
                            <span className={cn("w-2 h-2 rounded-full", isZero ? "bg-muted-foreground" : "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]")} />
                            {day.count} {day.count === 1 ? 'Commit' : 'Commits'}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {new Date(day.date).toLocaleDateString(undefined, {
                              weekday: 'short',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
            
            {/* Chart X-axis line */}
            <div className="w-full h-px bg-border/50 mt-4 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-border" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-border" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubStats;
