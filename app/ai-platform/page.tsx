"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import {
  Code,
  Globe,
  Brain,
  Cpu,
  Shield,
  BarChart3,
  MessageSquare,
  Zap,
  Database,
  Server,
  ArrowDown,
  Clock,
  TrendingDown,
  CheckCircle2,
  Sparkles,
  Activity,
  Layers,
} from "lucide-react";

const scenarios = [
  {
    id: "coding",
    icon: Code,
    title: "AI Coding & Dev Productivity",
    subtitle: "200+ engineers across Thailand · Singapore · Bangalore",
    model:
      "Claude Sonnet 4.6 (complex generation) + Haiku 4.5 (fast completion)",
    dailyTokens: "~580M tokens/day",
    techStack: "Cocos Creator (TypeScript), Unity (C#), Go, Python",
    capabilities: [
      {
        label: "Smart Code Review",
        detail: "PR review time: 4.2h → ≤1.5h (↓64%)",
      },
      {
        label: "Bug Diagnosis",
        detail: "Localization time: 3.5h → ≤1h (↓71%)",
      },
      {
        label: "AI Code Generation",
        detail: "IDE completion for VS Code / JetBrains",
      },
      {
        label: "Auto Test Generation",
        detail: "Unit & integration test scaffolding",
      },
    ],
  },
  {
    id: "customer",
    icon: MessageSquare,
    title: "Multilingual AI Customer Service & Localization",
    subtitle: "12 countries · 10+ languages · Real-time conversations",
    model: "Sonnet (complex dialogue/localization) + Haiku (moderation/QA)",
    dailyTokens: "~5,095M tokens/day",
    techStack: "Real-time chat, content pipeline, moderation system",
    capabilities: [
      { label: "Intent Recognition", detail: "72% (Qwen) → 94%+ (Claude)" },
      { label: "Auto Resolution Rate", detail: "≥70%, response <3s" },
      { label: "Content Moderation", detail: "85 items/sec, 94.2% accuracy" },
      { label: "Cost Savings", detail: "$150K/mo → ≤$60K/mo (↓60%+)" },
    ],
  },
  {
    id: "operations",
    icon: Brain,
    title: "Game Operations AI Agent & Analytics",
    subtitle: "Intelligent operations across all game titles",
    model: "Haiku 4.5 (high throughput) + Sonnet (deep analysis)",
    dailyTokens: "~9,250M tokens/day",
    techStack: "Agent framework, analytics pipeline, recommendation engine",
    capabilities: [
      {
        label: "Card Balance Analysis",
        detail: "Adjustment cycle: 3 weeks → ≤3 days (↓86%)",
      },
      {
        label: "Anti-Cheat System",
        detail: "False positive: 5% → 0.5% (↓90%)",
      },
      {
        label: "Operations Copilot",
        detail: "Analysis: 3 days → 5 min (NL→SQL→Report)",
      },
      {
        label: "NPC Dynamic Dialogue",
        detail: "3M calls/day, <800ms, 10+ languages",
      },
      { label: "Personalized Push", detail: "Open rate: 12% → 18%+" },
      { label: "Churn Prediction", detail: "Accuracy ≥75%" },
    ],
  },
];

const comparisonData = [
  {
    scenario: "Multilingual Intent Recognition (6 langs, 1200 samples)",
    claude: "92.6%",
    qwen: "73.7%",
    gap: "+18.9pp",
  },
  {
    scenario: "Code Generation Accuracy (450 tasks)",
    claude: "84.8%",
    qwen: "61.0%",
    gap: "+23.8pp",
  },
  {
    scenario: "Long-Context Bug Diagnosis (20 cases)",
    claude: "85.0%",
    qwen: "35.0%",
    gap: "+50.0pp",
  },
  {
    scenario: "Content Moderation Throughput (10K items)",
    claude: "85/s, 94.2%",
    qwen: "45/s, 78.5%",
    gap: "+89% throughput",
  },
  {
    scenario: "Card Balance Reasoning (5 cases)",
    claude: "4.2/5",
    qwen: "2.8/5",
    gap: "+1.4 pts",
  },
  {
    scenario: "Weighted Overall Score",
    claude: "92.3",
    qwen: "56.5",
    gap: "+35.8",
    highlight: true,
  },
];

const architecture = [
  { layer: "Access Layer", detail: "CloudFront + ALB (Dual AZ)", icon: Globe },
  {
    layer: "Routing Layer",
    detail: "GameAI Hub — Smart routing (95% → Haiku, 5% → Sonnet)",
    icon: Zap,
  },
  {
    layer: "AI Layer",
    detail: "7 Bedrock Agents + Knowledge Bases (RAG) + OpenSearch",
    icon: Brain,
  },
  {
    layer: "Cache Layer",
    detail: "ElastiCache Redis (response cache hit rate 45%+)",
    icon: Database,
  },
  { layer: "Data Layer", detail: "Aurora MySQL + S3", icon: Server },
];

const timeline = [
  {
    phase: "Phase 0",
    time: "2026/05",
    content: "AI Readiness Assessment",
    mrr: "—",
  },
  {
    phase: "Phase 1 MVP",
    time: "2026/06-07",
    content: "AI Coding + India Customer Service",
    mrr: "~$50K",
  },
  {
    phase: "Phase 2 Expansion",
    time: "2026/07-09",
    content: "Full-language CS + Moderation + Anti-Cheat",
    mrr: "~$150K",
  },
  {
    phase: "Phase 3 Full Scale",
    time: "2026/10-11",
    content: "All scenarios live + optimization",
    mrr: "~$200K",
  },
];

export default function AIPlatformPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero - Full screen matching homepage style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-48 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2.5s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 shadow-soft"
            >
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Powered by Amazon Bedrock & Claude AI
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-foreground">The </span>
              <span className="text-gradient inline-block">AI Engine</span>
              <br />
              <span className="text-foreground">Behind Our Games</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
            >
              Processing{" "}
              <span className="font-semibold text-primary">
                14.9 billion tokens daily
              </span>{" "}
              across 3 core AI scenarios with{" "}
              <span className="font-semibold text-primary">
                72% cost optimization
              </span>
            </motion.p>

            {/* Extended description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Built on Claude Sonnet 4.6 and Haiku 4.5, our platform delivers
              enterprise-grade AI for coding productivity, multilingual customer
              service, and intelligent game operations — all running on AWS
              infrastructure with smart model routing.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>7 Bedrock Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <span>99.9% uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Enterprise security</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  value: "14.9B",
                  label: "Tokens/Day",
                  sublabel: "AI inference scale",
                },
                {
                  value: "$200K",
                  label: "Monthly MRR",
                  sublabel: "Platform revenue",
                },
                {
                  value: "72%",
                  label: "Cost Saved",
                  sublabel: "vs base pricing",
                },
                {
                  value: "200+",
                  label: "Engineers",
                  sublabel: "Using AI daily",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Module 1: AI Scenarios */}
      <section id="scenarios" className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground mb-4"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
              Three Core Scenarios
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AI Capability <span className="text-gradient">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform serves three distinct AI workloads, each optimized
              for its unique performance and cost requirements.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                    <scenario.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scenario.subtitle}
                    </p>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="text-2xl font-bold text-gradient">
                      {scenario.dailyTokens}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      daily throughput
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Model
                    </span>
                    <div className="text-foreground mt-1 font-medium">
                      {scenario.model}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Tech Stack
                    </span>
                    <div className="text-foreground mt-1 font-medium">
                      {scenario.techStack}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {scenario.capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-white hover:border-primary/20 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {cap.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {cap.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 2: Comparison Table */}
      <section
        id="comparison"
        className="py-24 border-t border-border relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground mb-4"
            >
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
              Benchmark Results
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Claude vs Qwen <span className="text-gradient">Comparison</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              April 2026 blind test across 1,200 samples and 450 code tasks.
              Claude consistently outperforms across all scenarios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
              <div className="grid grid-cols-4 gap-4 p-5 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border text-sm font-semibold">
                <div className="text-foreground">Test Scenario</div>
                <div className="text-center text-primary">
                  Claude Sonnet 4.6
                </div>
                <div className="text-center text-muted-foreground">
                  Qwen-Max
                </div>
                <div className="text-center text-foreground">Gap</div>
              </div>
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.scenario}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-4 gap-4 p-5 border-b border-border last:border-0 ${row.highlight ? "bg-gradient-to-r from-primary/5 to-accent/5" : "hover:bg-secondary/30 transition-colors"}`}
                >
                  <div
                    className={`text-sm ${row.highlight ? "font-bold text-foreground" : "text-foreground"}`}
                  >
                    {row.scenario}
                  </div>
                  <div
                    className={`text-center text-sm ${row.highlight ? "font-bold text-primary" : "text-primary font-medium"}`}
                  >
                    {row.claude}
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    {row.qwen}
                  </div>
                  <div
                    className={`text-center text-sm font-medium ${row.highlight ? "text-primary font-bold" : "text-primary"}`}
                  >
                    {row.gap}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 text-center"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Key Takeaway:
                </span>{" "}
                Claude achieves a weighted overall score of{" "}
                <span className="font-bold text-primary">92.3</span> vs Qwen's
                56.5 — a <span className="font-bold text-primary">+63%</span>{" "}
                improvement that directly translates to better player
                experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Module 3: Architecture */}
      <section id="architecture" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground mb-4"
            >
              <Server className="w-3.5 h-3.5 text-primary" />
              Infrastructure
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A 5-layer architecture designed for high throughput, low latency,
              and cost efficiency at scale.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-3">
              {architecture.map((layer, index) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <layer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-lg">
                        {layer.layer}
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {layer.detail}
                      </div>
                    </div>
                    <div className="hidden md:block text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                      Layer {index + 1}
                    </div>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="w-4 h-4 text-primary/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Architecture highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-3 gap-4"
            >
              {[
                {
                  label: "Dual AZ Deployment",
                  desc: "High availability across availability zones",
                },
                {
                  label: "Smart Routing",
                  desc: "95% requests to Haiku for cost efficiency",
                },
                {
                  label: "45% Cache Hit Rate",
                  desc: "Redis response caching reduces AI calls",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/50 text-center"
                >
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module 4: Cost Optimization */}
      <section
        id="cost"
        className="py-24 border-t border-border relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground mb-4"
            >
              <TrendingDown className="w-3.5 h-3.5 text-primary" />
              Cost Efficiency
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient">72%</span> Cost Reduction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart optimization strategies that reduce our AI infrastructure
              costs from $723K to $200K per month without sacrificing
              performance.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cost breakdown card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Cost Breakdown
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <span className="text-muted-foreground">
                      Base Price (no optimization)
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      $723K/mo
                    </span>
                  </div>

                  <div className="space-y-3 pl-4 border-l-2 border-primary/30">
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Prompt Cache (Sonnet 45% hit, Haiku 78% hit)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        ElastiCache response cache (45% hit rate)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Smart model routing (95% requests → Haiku)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Batch processing for non-realtime workloads
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <span className="text-primary font-medium">Actual MRR</span>
                    <span className="text-2xl font-bold text-gradient">
                      ~$200K/mo
                    </span>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    Total Savings:{" "}
                    <span className="text-primary font-semibold">
                      $523K/month (72% reduction)
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Optimization strategies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Optimization Strategies
                </h3>
                {[
                  {
                    title: "Intelligent Model Routing",
                    desc: "GameAI Hub routes 95% of requests to Haiku 4.5 ($0.25/MTok) and only escalates complex tasks to Sonnet 4.6 ($3/MTok).",
                    saving: "~60% savings",
                  },
                  {
                    title: "Multi-Layer Caching",
                    desc: "Prompt caching reduces repeated context costs. Redis response cache eliminates redundant AI calls entirely.",
                    saving: "~25% savings",
                  },
                  {
                    title: "Batch Processing",
                    desc: "Non-realtime workloads (analytics, reports, content generation) run in batch mode at 50% discount.",
                    saving: "~15% savings",
                  },
                  {
                    title: "Token Optimization",
                    desc: "Structured prompts, response compression, and context windowing minimize token usage per request.",
                    saving: "~12% savings",
                  },
                ].map((strategy, index) => (
                  <motion.div
                    key={strategy.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {strategy.title}
                      </h4>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {strategy.saving}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {strategy.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Timeline */}
      <section id="timeline" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground mb-4"
            >
              <Clock className="w-3.5 h-3.5 text-primary" />
              Roadmap
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Project <span className="text-gradient">Milestones</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A phased rollout strategy that minimizes risk while maximizing
              value delivery at each stage.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-stretch gap-5"
                >
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-5 h-5 rounded-full shrink-0 ${index === 0 ? "bg-primary" : "bg-border"} border-2 border-primary shadow-sm`}
                    />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-foreground">
                          {item.phase}
                        </span>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.mrr}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {item.time}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Build With Our <span className="text-gradient">AI Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you're looking to integrate AI into your game operations
              or explore partnership opportunities, let's discuss how our
              platform can accelerate your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-hover hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/20 text-foreground font-medium hover:bg-secondary hover:border-primary/40 transition-all duration-300 shadow-soft"
              >
                See Our Games
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
