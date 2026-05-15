"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Brain, Sparkles, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IsometricScene } from "@/components/test/isometric-scene";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
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
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="text-foreground">Redefining </span>
            <span className="text-gradient inline-block">
              Lightweight Gaming
            </span>
            <br />
            <span className="text-foreground">for the World</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 leading-relaxed"
          >
            Powering{" "}
            <span className="font-semibold text-primary">20M+ players</span>{" "}
            across{" "}
            <span className="font-semibold text-primary">12 countries</span>{" "}
            with AI-native game development & operations
          </motion.p>

          {/* Extended description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed"
          >
            We combine deep expertise in lightweight game design with cutting-edge AI technology
            to create engaging, culturally-adapted gaming experiences for emerging markets.
            From card strategy to casual puzzles, every interaction is enhanced by intelligent systems
            that understand player behavior and deliver personalized content in real time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-hover transition-all duration-300 hover:scale-105 text-base px-8 h-12 rounded-xl"
            >
              <Link href="/products">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Explore Our Vision
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 text-foreground hover:bg-secondary hover:border-primary/40 transition-all duration-300 hover:scale-105 text-base px-8 h-12 rounded-xl shadow-soft"
            >
              <Link href="/ai-platform">
                See AI Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Enterprise-grade AI security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>10+ languages supported natively</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>14.9B tokens processed daily</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 grid grid-cols-3 gap-4"
          >
            {[
              { value: "20M+", label: "Active Players", sublabel: "Across all titles" },
              { value: "12", label: "Countries", sublabel: "Asia & Middle East" },
              { value: "14.9B", label: "Tokens/Day", sublabel: "AI inference scale" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Isometric Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="w-full max-w-[500px] h-[450px]">
            <IsometricScene />
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
