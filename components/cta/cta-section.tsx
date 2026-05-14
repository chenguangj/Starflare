"use client";

import { motion } from "framer-motion";
import { Cloud, Handshake, Sparkles, CheckCircle2 } from "lucide-react";

const partnershipBenefits = [
  "Direct access to latest Claude model releases before general availability",
  "Dedicated AWS solution architects for gaming workload optimization",
  "Priority support with 15-minute response SLA for production issues",
  "Custom model fine-tuning consultation for gaming-specific use cases",
  "Joint go-to-market programs for new market expansion",
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-white to-accent/5 border-2 border-primary/20 p-12 lg:p-20 overflow-hidden shadow-hover"
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float" />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float"
            style={{ animationDelay: "2s" }}
          />

          {/* Sparkle decorations */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-10 right-20 text-primary/20"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-10 left-20 text-accent/20"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium mb-8 shadow-soft"
              >
                <Cloud className="w-4 h-4" />
                AWS Advanced Technology Partner
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              >
                Powered by <span className="text-gradient">Amazon Bedrock</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed"
              >
                Our entire AI infrastructure runs on AWS, leveraging Amazon
                Bedrock for enterprise-grade AI capabilities with Claude Sonnet
                4.6 and Haiku 4.5 models.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="text-base text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                As one of the earliest gaming companies to adopt Amazon Bedrock at scale, we&apos;ve built
                a deep partnership with AWS that goes beyond simple infrastructure usage. Our collaboration
                includes joint case studies, co-developed best practices for AI in gaming, and early access
                to new Bedrock features. This partnership with Bossunway as our joint delivery partner ensures
                we always operate at the cutting edge of what&apos;s possible with cloud AI in interactive entertainment.
              </motion.p>
            </div>

            {/* Partnership benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-12 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-border"
            >
              <h4 className="font-bold text-foreground mb-4 text-center">
                What Our AWS Partnership Delivers
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {partnershipBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partner cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border-2 border-primary/20 shadow-soft hover:shadow-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-foreground">
                    AWS Advanced Partner
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Amazon Bedrock Native Integration
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border-2 border-accent/20 shadow-soft hover:shadow-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-foreground">
                    Bossunway
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Joint Delivery & Implementation Partner
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
