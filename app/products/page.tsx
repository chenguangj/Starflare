"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { cn } from "@/lib/utils"
import { Gamepad2, Puzzle, Swords, Globe, Clock, Globe2, Sparkles, Trophy, Users, TrendingUp, Zap, Target, BarChart3, Shield, Brain, Layers } from "lucide-react"

const tabs = [
  { id: "card", label: "Card Strategy", icon: Gamepad2 },
  { id: "casual", label: "Casual Puzzle", icon: Puzzle },
  { id: "strategy", label: "Strategy Battle", icon: Swords },
]

const tabContent = {
  card: {
    title: "Card Strategy Games",
    icon: Layers,
    description: "Our flagship product line targeting Southeast Asia & Middle East markets. Real-time competitive card battles with deep strategic gameplay that keeps players engaged for months.",
    features: [
      "Real-time PvP matchmaking across regions",
      "Multilingual NPC dialogue powered by Claude AI",
      "AI-driven balance auto-tuning for card meta",
      "Cultural adaptation for each market",
      "Dynamic card rarity system with AI pricing",
      "Seasonal events with localized themes",
    ],
    metrics: [
      { value: "8M+", label: "Monthly Active Players" },
      { value: "$4.2", label: "Average ARPU" },
      { value: "42min", label: "Avg. Session Length" },
    ],
    techHighlights: [
      "Claude AI generates 500K+ unique NPC dialogues daily",
      "Real-time card balance adjustments every 4 hours",
      "Sub-50ms matchmaking across 6 server regions",
    ],
    markets: "India, Thailand, Arabic-speaking regions",
    highlight: "Core revenue driver with highest ARPU",
  },
  casual: {
    title: "Casual Puzzle Games",
    icon: Puzzle,
    description: "Lightweight casual games designed for mass-market appeal. Low barrier to entry with high retention mechanics that turn casual players into daily active users through smart AI personalization.",
    features: [
      "AI-personalized push notifications",
      "Open rate improved from 12% to 18%+",
      "Dynamic difficulty adjustment per player",
      "Social features with friend challenges",
      "AI-generated daily puzzle variations",
      "Reward timing optimized by ML models",
    ],
    metrics: [
      { value: "12M+", label: "Total Downloads" },
      { value: "68%", label: "DAU/MAU Ratio" },
      { value: "18%", label: "Push Open Rate" },
    ],
    techHighlights: [
      "AI adjusts difficulty in real-time based on player frustration signals",
      "Personalized notification timing increases engagement 50%",
      "A/B testing framework runs 200+ experiments simultaneously",
    ],
    markets: "Pan-Southeast Asia, India",
    highlight: "Highest DAU/MAU ratio in portfolio",
  },
  strategy: {
    title: "Strategy Battle Games",
    icon: Swords,
    description: "Deep strategy games for competitive players who enjoy tactical decision-making and long-term progression. Built for the esports-ready generation with AI-powered fair play systems.",
    features: [
      "AI anti-cheat system (false positive: 5% → 0.5%)",
      "Automated tournament management",
      "Real-time strategy analytics dashboard",
      "Seasonal ranked competitive modes",
      "AI-powered replay analysis for players",
      "Dynamic matchmaking based on skill + playstyle",
    ],
    metrics: [
      { value: "2.5M", label: "Competitive Players" },
      { value: "0.5%", label: "False Positive Rate" },
      { value: "15K", label: "Daily Tournaments" },
    ],
    techHighlights: [
      "ML-based cheat detection reduced false positives by 90%",
      "Automated tournament brackets handle 15K events daily",
      "Player skill modeling uses 47 behavioral dimensions",
    ],
    markets: "Middle East, Southeast Asia",
    highlight: "Strongest esports potential",
  },
}

const markets = [
  { region: "India", languages: "Hindi, Tamil, Telugu", localization: "Cricket & Bollywood cultural elements, festival-themed events", players: "8M+" },
  { region: "Thailand", languages: "Thai", localization: "Buddhist calendar events, local humor and memes adapted", players: "3.5M+" },
  { region: "Indonesia", languages: "Bahasa Indonesia", localization: "Ramadan events, local celebrity collaborations", players: "4M+" },
  { region: "Vietnam", languages: "Vietnamese", localization: "Lunar New Year themes, local gaming culture references", players: "2.5M+" },
  { region: "Middle East", languages: "Arabic (RTL)", localization: "Islamic cultural norms, right-to-left UI, regional holidays", players: "2M+" },
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("card")
  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <main className="relative">
      <Navbar />

      {/* Hero - Full screen matching homepage style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-60 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-32 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
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
              <Gamepad2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                AI-Native Game Portfolio
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
              <span className="text-foreground">Games That </span>
              <span className="text-gradient inline-block">Connect</span>
              <br />
              <span className="text-foreground">Cultures</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
            >
              Three core game categories delivering{" "}
              <span className="font-semibold text-primary">AI-enhanced experiences</span>{" "}
              to players across{" "}
              <span className="font-semibold text-primary">12 countries</span>
            </motion.p>

            {/* Extended description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              From competitive card battles to casual puzzles and deep strategy,
              each game is crafted with cultural intelligence and powered by real-time AI
              that adapts to every player's unique style and preferences.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16"
            >
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                <span>AI-personalized gameplay</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Deep cultural localization</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>AI anti-cheat protection</span>
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
                { value: "3", label: "Game Categories", sublabel: "Card, Casual, Strategy" },
                { value: "20M+", label: "Total Players", sublabel: "Across all titles" },
                { value: "85%", label: "Day-7 Retention", sublabel: "Above industry avg" },
                { value: "10+", label: "Languages", sublabel: "Native localization" },
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

      {/* Tabs */}
      <section id="game-categories" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our <span className="text-gradient">Game Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each category is purpose-built for its audience, powered by AI systems that understand player behavior at scale.
            </p>
          </motion.div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-hover scale-105"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-soft"
                )}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Main card */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-md">
                  <content.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{content.title}</h3>
                  <span className="text-sm text-primary font-medium">{content.highlight}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-3xl">
                {content.description}
              </p>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                {content.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">{metric.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Features grid */}
              <div className="mb-10">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {content.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech highlights */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  AI Technology Highlights
                </h4>
                <div className="space-y-3">
                  {content.techHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 p-4 rounded-xl border border-primary/10 bg-primary/[0.02]">
                      <Brain className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Markets */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-6 border-t border-border">
                <Globe className="w-4 h-4 text-primary" />
              <span>Primary Markets: {content.markets}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Operations */}
      <section id="localization" className="py-24 border-t border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Global <span className="text-gradient">Localization</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep cultural adaptation powered by AI — not just translation, but true cultural intelligence that resonates with local players.
            </p>
          </motion.div>

          {/* Localization highlights - top stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { icon: Clock, value: "4 hours", label: "Localization Cycle", sublabel: "Down from 3-5 days" },
              { icon: Globe2, value: "10+", label: "Languages", sublabel: "Simultaneous output" },
              { icon: Target, value: "95%", label: "Cultural Accuracy", sublabel: "Human-validated" },
              { icon: TrendingUp, value: "40%", label: "Retention Boost", sublabel: "With localized content" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-hover hover:border-primary/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient mb-1">{item.value}</div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Market cards */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Markets We Serve
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {markets.map((market, index) => (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{market.region}</h4>
                    <span className="text-sm font-bold text-gradient">{market.players}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{market.languages}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{market.localization}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Localization process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              AI-Powered Localization Pipeline
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Content Analysis", desc: "AI identifies cultural context and tone requirements" },
                { step: "02", title: "Multi-Language Gen", desc: "Claude generates 10+ language variants simultaneously" },
                { step: "03", title: "Cultural Validation", desc: "Local experts review AI output for cultural fit" },
                { step: "04", title: "A/B Deploy", desc: "Localized content tested against engagement metrics" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-5 rounded-xl bg-card border border-border"
                >
                  <div className="text-3xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Technology in Gaming */}
      <section id="ai-tech" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AI That Makes Games <span className="text-gradient">Better</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every game in our portfolio is enhanced by intelligent systems that understand players and adapt in real time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Intelligent NPCs",
                description: "Claude AI powers NPC dialogues that adapt to player personality, language, and cultural context — generating 500K+ unique interactions daily.",
              },
              {
                icon: Target,
                title: "Dynamic Difficulty",
                description: "ML models analyze player frustration and engagement signals in real-time, adjusting challenge levels to maintain optimal flow state.",
              },
              {
                icon: Shield,
                title: "AI Anti-Cheat",
                description: "Behavioral analysis detects cheating patterns with 99.5% accuracy, reducing false positives from 5% to 0.5% — protecting fair play without punishing honest players.",
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Player behavior models predict churn 7 days in advance with 82% accuracy, enabling proactive retention interventions.",
              },
              {
                icon: Users,
                title: "Smart Matchmaking",
                description: "Multi-dimensional skill modeling considers 47 behavioral dimensions for matches that feel fair and fun, not just balanced by rank.",
              },
              {
                icon: TrendingUp,
                title: "Live Ops Automation",
                description: "AI generates and schedules in-game events, promotions, and content drops based on player engagement patterns and cultural calendars.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section id="success-metrics" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Results That <span className="text-gradient">Speak</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-first approach delivers measurable improvements across every metric that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { value: "20M+", label: "Monthly Active Players", change: "+180% YoY" },
              { value: "85%", label: "Day-7 Retention", change: "+23% vs industry" },
              { value: "4.6★", label: "Average Store Rating", change: "Across all titles" },
              { value: "$2.8M", label: "Monthly Revenue", change: "+65% after AI integration" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border shadow-soft"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-primary font-medium">{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Before/After comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Before AI Integration</h4>
                <ul className="space-y-3">
                  {[
                    "Manual content localization: 3-5 days per language",
                    "Static difficulty curves causing 40% early churn",
                    "5% false positive rate in anti-cheat",
                    "Generic push notifications: 12% open rate",
                    "Manual tournament management for 500 events/day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-red-400 mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">After AI Integration</h4>
                <ul className="space-y-3">
                  {[
                    "AI localization: 4 hours for 10+ languages",
                    "Dynamic difficulty: 85% Day-7 retention",
                    "0.5% false positive rate with ML detection",
                    "Personalized notifications: 18%+ open rate",
                    "Automated tournaments: 15K events/day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
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
              Ready to <span className="text-gradient">Partner</span> With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you're looking to publish in emerging markets or integrate AI into your game operations, we'd love to explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-hover hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="/ai-platform"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/20 text-foreground font-medium hover:bg-secondary hover:border-primary/40 transition-all duration-300 shadow-soft"
              >
                Explore AI Platform
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
