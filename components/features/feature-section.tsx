"use client";

import { motion } from "framer-motion";
import { Sparkles, Gamepad2, Swords, Users, TrendingUp, Globe, Layers, Grid3x3, Shield } from "lucide-react";

const games = [
  {
    icon: Layers,
    title: "Card Strategy Games",
    description:
      "Core competitive card games with real-time PvP battles, multilingual NPC dialogue, and AI-powered balance tuning.",
    details:
      "Our flagship card strategy titles feature deep deck-building mechanics, seasonal ranked ladders, and a thriving competitive scene. Claude AI generates dynamic NPC dialogue in 10+ languages, creating immersive storylines that adapt to each player's progression. The AI balance system continuously monitors win rates across all card combinations and suggests micro-adjustments weekly, maintaining a healthy meta without manual intervention.",
    stats: [
      { label: "Daily Battles", value: "2.5M+" },
      { label: "Card Combinations", value: "50K+" },
      { label: "Avg. Session", value: "28 min" },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Grid3x3,
    title: "Casual Puzzle",
    description:
      "Lightweight casual games with low barrier to entry and high retention. AI-personalized push notifications boost engagement.",
    details:
      "Designed for quick play sessions on low-end devices, our casual puzzle games achieve industry-leading Day-7 retention through AI-driven personalization. The system learns each player's skill level and preferred play times, then delivers tailored challenges and rewards. Smart push notifications — powered by Claude Haiku for cost efficiency — increased open rates from 12% to 18%+, translating directly into higher daily active users and revenue per player.",
    stats: [
      { label: "D7 Retention", value: "42%" },
      { label: "Push Open Rate", value: "18%+" },
      { label: "Avg. Device RAM", value: "2GB" },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Swords,
    title: "Strategy Battle",
    description:
      "Deep strategy games for competitive players. AI anti-cheat system reduces false positive rate from 5% to 0.5%.",
    details:
      "Built for the hardcore strategy audience, these titles feature real-time tactical combat, alliance warfare, and server-wide events. Our proprietary AI anti-cheat system analyzes millions of gameplay actions per hour, identifying sophisticated cheating patterns that rule-based systems miss entirely. By reducing false positives from 5% to 0.5%, we've dramatically improved legitimate player trust while catching 3x more actual cheaters — a critical factor in markets where competitive integrity drives spending.",
    stats: [
      { label: "Cheaters Caught", value: "3x More" },
      { label: "False Positive", value: "0.5%" },
      { label: "Alliance Size", value: "Up to 100" },
    ],
    gradient: "from-amber-500 to-orange-500",
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            Our Games
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Lightweight Games,{" "}
            <span className="text-gradient">Global Reach</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Three core game categories serving 20M+ players across Southeast
            Asia, Middle East, and beyond.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Each category is purpose-built for emerging markets: optimized for low-bandwidth networks,
            compatible with entry-level smartphones, and deeply localized with culturally relevant themes,
            art styles, and monetization models that respect local spending power.
          </p>
        </motion.div>

        {/* Summary stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16 p-6 rounded-2xl bg-secondary/50 border border-border"
        >
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Total Players:</span>
            <span className="font-bold text-foreground">20M+</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Revenue Growth:</span>
            <span className="font-bold text-foreground">+180% YoY</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Markets:</span>
            <span className="font-bold text-foreground">12 Countries</span>
          </div>
        </motion.div>

        <div className="space-y-12">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl bg-white border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-hover overflow-hidden">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* Left: Icon and title */}
                    <div className="flex flex-col">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <game.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                        {game.title}
                      </h3>

                      {/* Stats row */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {game.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="px-4 py-2.5 rounded-xl bg-secondary/70 border border-border"
                          >
                            <div className="text-sm font-bold text-gradient">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Description and details */}
                    <div className="flex flex-col gap-4">
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {game.description}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {game.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.gradient} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
