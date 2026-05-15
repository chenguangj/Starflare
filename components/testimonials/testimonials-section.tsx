"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Product Lead, India Market",
    content:
      "Claude AI's multilingual capabilities transformed our localization process. What used to take 3-5 days now completes in under 4 hours.",
    extendedContent:
      "Before Starflare's AI platform, we managed translations through a network of freelance translators and a complex spreadsheet system. Every game update meant weeks of coordination. Now, our AI pipeline handles Hindi, Bengali, Tamil, and Telugu simultaneously — and the quality is actually better because it understands gaming context. The cultural adaptation layer catches things human translators sometimes miss, like adjusting humor references that don't translate across Indian regional cultures.",
    rating: 5,
    gradient: "from-orange-500 to-green-500",
  },
  {
    name: "Sarah Al-Mansouri",
    role: "Operations Director, Middle East",
    content:
      "The AI anti-cheat system is a game-changer. False positive rate dropped from 5% to 0.5%, dramatically improving player trust.",
    extendedContent:
      "In the Middle East market, competitive integrity is everything — players here spend significantly on competitive advantages, and they expect a fair playing field. Our previous rule-based system was banning legitimate high-skill players, causing community outrage. Since switching to the AI-based behavioral analysis, we've caught 3x more actual cheaters while reducing wrongful bans by 90%. Player trust scores in our post-match surveys increased from 6.2 to 8.7 out of 10.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Thanawat Pongpat",
    role: "Community Manager, Thailand",
    content:
      "AI-powered push notifications increased our open rate from 12% to 18%+. The personalization is incredibly effective.",
    extendedContent:
      "Thai players are very social — they play in groups, share achievements on LINE, and respond to messages that feel personal rather than corporate. Our AI notification system learned this quickly. Instead of generic 'Come back and play!' messages, it generates contextual nudges like 'Your guild completed the raid without you last night — they saved your share of the loot.' The open rate improvement directly translated to a 12% increase in daily active users and measurably higher in-app spending.",
    rating: 5,
    gradient: "from-red-500 to-white",
  },
  {
    name: "Nguyen Minh Duc",
    role: "Game Designer, Vietnam",
    content:
      "The dynamic difficulty system keeps players engaged without them even realizing it's working. Retention metrics speak for themselves.",
    extendedContent:
      "As a game designer, I was initially skeptical about AIng my carefully tuned difficulty curves. But the results are undeniable. The system doesn't override design intent — it works within the parameters we set, making micro-adjustments that keep each player in their flow state. Our Day-30 retention jumped from 18% to 22%, which at our scale means hundreds of thousands more active players. The AI also surfaces insights about where players struggle most, helping me improve the base design for everyone.",
    rating: 5,
    gradient: "from-red-500 to-yellow-500",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Trusted by Teams <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Hear from our team members across different markets about their
            experience with our AI platform.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our AI systems don&apos;t just improve metrics — they transform how our regional teams work.
            Product managers spend less time on repetitive localization tasks and more on creative strategy.
            Community managers handle 3x the player base without burning out. Game designers get data-driven
            insights that would take weeks to gather manually. Here&apos;s what they have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-hover overflow-hidden h-full">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Highlight quote */}
                <p className="text-foreground font-semibold leading-relaxed mb-4 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Extended content */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                  {testimonial.extendedContent}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-md`}>
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
