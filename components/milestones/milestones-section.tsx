"use client";

import { motion } from "framer-motion";
import { Rocket, Trophy, Users, Zap, Globe, Brain } from "lucide-react";

const milestones = [
  {
    year: "2021",
    quarter: "Q3",
    icon: Rocket,
    title: "Company Founded",
    description:
      "Starflare was established in Thailand by a team of veteran game developers and AI researchers who shared a conviction: the next billion gamers would come from emerging markets, and AI would be the key to serving them at scale. Our founding thesis was simple — lightweight games designed for low-end devices, enhanced by intelligent systems that personalize every interaction. We started with 8 people, a seed round, and a prototype card game.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    quarter: "Q1",
    icon: Zap,
    title: "First Game Launch",
    description:
      "After 6 months of development and extensive playtesting with Thai and Vietnamese focus groups, we launched our flagship card strategy game 'Realm of Cards' simultaneously in Thailand and Vietnam. The game reached 500K downloads in its first 30 days — far exceeding our 200K target. Key to this success was our decision to use local mythology and art styles rather than generic fantasy themes. Thai players saw Naga and Garuda cards; Vietnamese players got Lac Long Quan legends.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    year: "2022",
    quarter: "Q4",
    icon: Users,
    title: "5M Users Milestone",
    description:
      "By the end of 2022, we crossed 5 million registered users across Southeast Asia with 3 live game titles. This rapid growth validated our market thesis and attracted Series A funding. More importantly, our unit economics proved sustainable: customer acquisition cost (CAC) was 60% below Western market benchmarks thanks to organic virality in group-oriented Asian social networks. We expanded the team to 25 people and began R&D on our AI platform.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    year: "2023",
    quarter: "Q2",
    icon: Brain,
    title: "AI Platform Integration",
    description:
      "This was our inflection point. We deployed Claude AI via Amazon Bedrock across all game titles, transforming static systems into intelligent ones. NPC dialogue became dynamic and multilingual. Push notifications became personalized. Anti-cheat moved from rules to ML. The impact was immediate and measurable: Day-7 retention increased 15%, customer support tickets dropped 40% (AI handled common queries), and our content production speed tripled. We became an AWS Advanced Technology Partner the same quarter.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    year: "2024",
    quarter: "Q1",
    icon: Globe,
    title: "Middle East Expansion",
    description:
      "Armed with our AI-powered localization pipeline, we expanded into the UAE, Saudi Arabia, and Egypt with full Arabic support — including right-to-left UI, culturally appropriate content moderation, and prayer-time-aware notification scheduling. The Middle East quickly became our highest ARPU region, with Saudi players spending 2.5x the global average. We partnered with regional gaming influencers and integrated local payment methods (STC Pay, Mada) to minimize purchase friction.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    year: "2025",
    quarter: "Q1",
    icon: Trophy,
    title: "20M+ Players",
    description:
      "We reached 20 million registered users across 12 countries, processing 14.9 billion AI tokens daily — making us one of the largest Claude AI consumers in the gaming industry. Our team grew to 45 people, yet our per-employee output rivals studios 5x our size thanks to AI-augmented workflows. Revenue grew 180% year-over-year, and we're now preparing for our next phase: expansion into Latin America and North Africa, targeting 50M players by end of 2026.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export function MilestonesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

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
            Our Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            From Zero to{" "}
            <span className="text-gradient">20 Million Players</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            A rapid growth story powered by AI innovation and deep market
            understanding.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In just four years, Starflare grew from an 8-person startup to a
            global gaming company serving 20 million players. Each milestone
            below represents not just a number, but a strategic decision that
            compounded into our current position. Our growth wasn&apos;t
            accidental — it was the result of disciplined market selection,
            relentless product iteration, and a willingness to bet early on AI
            as a core capability rather than a nice-to-have feature.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative lg:flex items-center lg:mb-16 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`lg:w-[calc(50%-2.5rem)] ${isLeft ? "lg:pr-10" : "lg:pl-10"}`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative p-6 lg:p-8 rounded-2xl bg-white border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <milestone.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-foreground">
                            {milestone.year} {milestone.quarter}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className={`hidden lg:block absolute ${
                      isLeft
                        ? "right-1/2 translate-x-1/2"
                        : "left-1/2 -translate-x-1/2"
                    } px-5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-white shadow-lg z-10`}
                  />

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
