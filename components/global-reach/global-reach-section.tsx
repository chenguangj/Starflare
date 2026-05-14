"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp, Users, Wifi } from "lucide-react";

const regions = [
  {
    name: "Southeast Asia",
    countries: ["Thailand", "Vietnam", "Indonesia", "Philippines", "Malaysia"],
    players: "12M+",
    description:
      "Our largest and most mature market. Southeast Asia's young, mobile-first population is ideal for lightweight games. We entered Thailand first in 2022, leveraging local cultural themes in card game art and storylines. The region now accounts for 60% of our total revenue, with Thailand and Vietnam as the top two markets. Our games are optimized for the region's prevalent 4G networks and budget Android devices (2-3GB RAM), ensuring smooth gameplay even in rural areas.",
    growth: "+45% YoY",
    position: { top: "45%", left: "72%" },
    dotPosition: { top: "48%", left: "74%" },
  },
  {
    name: "South Asia",
    countries: ["India", "Bangladesh", "Sri Lanka"],
    players: "5M+",
    description:
      "India represents our fastest-growing market with massive untapped potential. We focus on tier-2 and tier-3 cities where smartphone penetration is rapidly increasing but premium gaming options remain limited. Our AI-powered Hindi and Bengali localization — going beyond simple translation to adapt humor, cultural references, and monetization pricing — has been key to achieving 3x higher retention than competitors who only offer English interfaces.",
    growth: "+120% YoY",
    position: { top: "42%", left: "62%" },
    dotPosition: { top: "45%", left: "64%" },
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Egypt", "Turkey"],
    players: "3M+",
    description:
      "Entered in early 2024, the Middle East has quickly become our highest ARPU (Average Revenue Per User) region. Saudi Arabia and UAE players spend 2.5x the global average on in-game purchases. Our AI handles right-to-left Arabic UI adaptation, culturally appropriate content moderation, and prayer-time-aware push notification scheduling. We partnered with regional influencers and integrated local payment methods (STC Pay, Apple Pay ME) to reduce purchase friction.",
    growth: "+200% YoY",
    position: { top: "38%", left: "52%" },
    dotPosition: { top: "42%", left: "55%" },
  },
];

const connectionLines = [
  { from: { x: 55, y: 42 }, to: { x: 64, y: 45 } },
  { from: { x: 64, y: 45 }, to: { x: 74, y: 48 } },
  { from: { x: 55, y: 42 }, to: { x: 74, y: 48 } },
];

export function GlobalReachSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium mb-6"
          >
            Global Presence
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connecting Players{" "}
            <span className="text-gradient">Across the Globe</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            From Southeast Asia to the Middle East, our games bring joy to
            millions of players in diverse markets.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our expansion strategy is deliberate: we enter markets where mobile gaming demand is high
            but quality lightweight options are scarce. In each new region, we spend 3-6 months on
            deep cultural research before launching — studying local gaming preferences, social dynamics,
            spending habits, and even device distribution data to ensure our games feel native, not imported.
          </p>
        </motion.div>

        {/* Map Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[2/1] rounded-3xl bg-gradient-to-br from-primary/5 via-white to-accent/5 border-2 border-border overflow-hidden shadow-soft"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {connectionLines.map((line, index) => (
                <motion.line
                  key={index}
                  x1={line.from.x}
                  y1={line.from.y}
                  x2={line.to.x}
                  y2={line.to.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.3 }}
                />
              ))}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(221, 83%, 53%)" />
                  <stop offset="100%" stopColor="hsl(262, 83%, 68%)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Region dots with pulse */}
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                className="absolute"
          style={region.dotPosition}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 -m-3 w-10 h-10 rounded-full bg-primary/20 animate-ping" />
                <div className="absolute inset-0 -m-2 w-8 h-8 rounded-full bg-primary/10" />
                {/* Center dot */}
                <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg border-2 border-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Region Cards - now with full descriptions */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-white border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">
                          {region.name}
                        </h4>
                        <span className="text-xs text-gradient font-bold">
                          {region.players} players
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-bold">{region.growth}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {region.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground font-medium"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-border text-center"
          >
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">Next on our roadmap:</span>{" "}
              Latin America (Brazil, Mexico) and North Africa (Morocco, Tunisia) are targeted for H2 2025.
              Early market research shows strong demand for card strategy games in Brazil&apos;s mobile-first
              gaming community, and our Arabic language capabilities give us a natural advantage in North Africa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
