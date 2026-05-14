"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Shield, Zap, Database, Globe, CheckCircle2 } from "lucide-react";

const partners = [
  { name: "Amazon Web Services", icon: Cloud, color: "text-orange-500" },
  { name: "Amazon Bedrock", icon: Cpu, color: "text-blue-500" },
  { name: "Claude AI", icon: Zap, color: "text-purple-500" },
  { name: "CloudFront CDN", icon: Globe, color: "text-cyan-500" },
  { name: "DynamoDB", icon: Database, color: "text-blue-600" },
  { name: "AWS Shield", icon: Shield, color: "text-green-500" },
];

const capabilities = [
  {
    title: "AI-Powered NPC Dialogue",
    description:
      "Our NPCs don't repeat canned lines — they generate contextually appropriate dialogue in real time using Claude AI. Each NPC has a defined personality, backstory, and knowledge boundary. Players in Thailand hear Thai cultural references; players in Saudi Arabia get Arabic idioms. The system maintains conversation history per player, creating the illusion of persistent memory that deepens immersion across play sessions.",
    metric: "10+ Languages",
    bulletPoints: ["Context-aware personality system", "Per-player conversation memory", "Cultural adaptation layer"],
  },
  {
    title: "Smart Push Notifications",
    description:
      "Generic push notifications get ignored. Ours are written by Claude Haiku in real time, personalized to each player's recent activity, preferred play times, and engagement patterns. A lapsed player might receive a message about their guild missing them; an active player gets teased about a new challenge matching their skill level. This approach boosted open rates from an industry-average 12% to over 18%.",
    metric: "18%+ Open Rate",
    bulletPoints: ["Individual player personalization", "Optimal send-time prediction", "A/B tested copy generation"],
  },
  {
    title: "Real-time Translation",
    description:
      "Traditional game localization is slow and expensive — hiring translators, managing spreadsheets, waiting weeks for updates. Our AI translation pipeline handles the entire flow: extracting new strings, translating with cultural context (not just literal meaning), adapting UI layouts for RTL languages, and deploying updates within hours. What used to take 3-5 days per language now completes in under 4 hours for all 10+ supported languages simultaneously.",
    metric: "3-5 Days → 4 Hours",
    bulletPoints: ["Cultural context preservation", "RTL layout auto-adaptation", "Continuous deployment pipeline"],
  },
  {
    title: "AI Anti-Cheat System",
    description:
      "Rule-based anti-cheat systems are easy to circumvent and generate excessive false positives that punish legitimate players. Our ML-based system analyzes behavioral patterns — reaction times, decision sequences, resource acquisition rates — to identify cheaters with surgical precision. The model retrains weekly on new data, staying ahead of evolving cheat methods. Reducing false positives from 5% to 0.5% means 90% fewer wrongful bans, directly improving player trust and retention.",
    metric: "0.5% False Positive",
    bulletPoints: ["Behavioral pattern analysis", "Weekly model retraining", "90% fewer wrongful bans"],
  },
  {
    title: "Dynamic Difficulty Adjustment",
    description:
      "Players quit games that are too hard or too easy. Our AI monitors real-time performance signals  rates, session lengths, spending patterns, rage-quit indicators — and subtly adjusts difficulty parameters to keep each player in their optimal challenge zone. This isn't about making games easier; it's about matching the right challenge to the right player at the right moment. The result: 23% higher Day-30 retention compared to static difficulty curves.",
    metric: "+23% Retention",
    bulletPoints: ["Real-time performance monitoring", "Invisible difficulty tuning", "Per-player challenge optimization"],
  },
  {
    title: "Predictive Player Analytics",
    description:
      "Our predictive models forecast player behavior 7-14 days ahead with 85% accuracy. We can identify players likely to churn before they show obvious signs, enabling proactive retention interventions. We predict spending propensity to optimize offer timing, forecast server load for capacity planning, and model viral coefficients to amplify organic growth. These predictions feed directly into automated systems that act without human intervention.",
    metric: "85% Accuracy",
    bulletPoints: ["7-14 day behavior forecasting", "Proactive churn prevention", "Automated intervention triggers"],
  },
];

export function PartnersSection() {
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
            Technology & Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Powered by{" "}
            <span className="text-gradient">World-Class Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Our AI capabilities are built on the most advanced cloud
            infrastructure available.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            As an AWS Advanced Technology Partner, we have direct access to Amazon Bedrock&apos;s
            latest model releases, dedicated solution architects, and priority support channels.
            This partnership ensures our AI infrastructure scales reliably as we grow — from our
            current 14.9B tokens/day to our projected 50B+ tokens/day by end of 2025.
          </p>
        </motion.div>

        {/* Partner Logo Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
            className="flex gap-8 items-center"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
              >
                <partner.icon className={`w-6 h-6 ${partner.color}`} />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Six Core AI Capabilities
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Each capability is production-proven at scale, processing millions of requests daily
            across all our game titles and markets.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-white border-2 border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {cap.title}
                    </h4>
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-xs font-bold text-primary whitespace-nowrap">
                      {cap.metric}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="space-y-2">
                    {cap.bulletPoints.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
