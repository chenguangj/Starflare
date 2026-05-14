"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Globe,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  BarChart3,
  Clock,
} from "lucide-react";

const pipeline = [
  {
    icon: MessageSquare,
    title: "Player Input",
    description: "Real-time player actions & behavioral data",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Claude AI Processing",
    description: "Claude Sonnet 4.6 & Haiku 4.5 inference",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Safety & Anti-Cheat",
    description: "AI-powered fraud detection & content moderation",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Response",
    description: "Sub-200ms latency personalized experiences",
    gradient: "from-amber-500 to-orange-500",
  },
];

const techCards = [
  {
    icon: Cpu,
    title: "14.9B Tokens/Day",
    description:
      "Our AI infrastructure processes 14.9 billion tokens every single day — equivalent to reading the entire English Wikipedia 50 times over. This massive throughput powers everything from NPC dialogue generation to real-time anti-cheat analysis, player behavior prediction, and dynamic content personalization across all game titles simultaneously.",
    stat: "99.97%",
    statLabel: "Uptime SLA",
    details: "Zero unplanned downtime in the last 6 months",
  },
  {
    icon: Database,
    title: "Multi-Model Architecture",
    description:
      "We employ an intelligent routing layer that directs each AI request to the optimal model based on complexity, latency requirements, and cost. Simple tasks like push notification copy go to Claude Haiku 4.5 (fast, cheap), while complex tasks like game balance analysis route to Claude Sonnet 4.6 (deeper reasoning). This architecture reduced our AI costs by 40% while actually improving response quality.",
    stat: "40%",
    statLabel: "Cost Reduction",
    details: "Smart routing between Sonnet & Haiku models",
  },
  {
    icon: Globe,
    title: "Edge Deployment",
    description:
      "Gaming demands low latency — players won't tolerate delays in competitive matches. We deploy AI inference endpoints across AWS regions in Singapore, Mumbai, Bahrain, and Tokyo, ensuring that no player is more than one network hop away from our AI systems. Combined with aggressive caching of common inference patterns, we achieve P95 latency under 200ms globally.",
    stat: "<200ms",
    statLabel: "P95 Latency",
    details: "4 AWS regions, edge-optimized inference",
  },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-secondary/20 to-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium mb-6"
          >
            AI Infrastructure
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Built on{" "}
            <span className="text-gradient">Enterprise-Grade AI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Our proprietary AI pipeline processes billions of tokens daily,
            delivering personalized gaming experiences at scale.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Unlike traditional game studios that bolt AI onto existing systems as an afterthought,
            Starflare was built AI-native from day one. Every system — from matchmaking to monetization,
            from content generation to community management — is designed around intelligent automation.
            This architectural decision means our 45-person team operates with the output of a studio 5x our size.
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg font-semibold text-foreground mb-2"
          >
            Real-Time AI Processing Pipeline
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Every player action flows through our four-stage AI pipeline in under 200 milliseconds.
            The system handles 170,000+ concurrent requests at peak, auto-scaling across multiple AWS availability zones.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {pipeline.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 w-56">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {index < pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="hidden lg:flex items-center px-3"
                  >
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary/40 to-accent/40" />
                    <ArrowRight className="w-4 h-4 text-primary/40" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16 py-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Avg. Response:</span>
            <span className="font-bold text-foreground">87ms</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft text-sm">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Peak QPS:</span>
            <span className="font-bold text-foreground">170K+</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Auto-scale:</span>
            <span className="font-bold text-foreground">0→100 pods in 90s</span>
          </div>
        </motion.div>

        {/* Tech Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {techCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-white border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">
                        {card.stat}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {card.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <p className="text-xs text-primary/70 font-medium">
                    {card.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
