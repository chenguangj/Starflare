"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Activity, Globe, Languages } from "lucide-react";

function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 2000,
    suffix: "万+",
    label: "Registered Users",
    sublabel: "20M+",
    description: "Across all game titles in 12 countries, with 3.5M monthly active users generating consistent engagement and revenue growth.",
  },
  {
    icon: Activity,
    value: 350,
    suffix: "万",
    label: "Monthly Active Users",
    sublabel: "3.5M MAU",
    description: "17.5% MAU/total ratio demonstrates strong retention. Our AI-driven re-engagement campaigns maintain healthy active player ratios.",
  },
  {
    icon: Globe,
    value: 12,
    suffix: "",
    label: "Countries & Regions",
    sublabel: "Global Reach",
    description: "Spanning Southeast Asia, South Asia, and the Middle East — with Latin America and North Africa expansion planned for H2 2025.",
  },
  {
    icon: Languages,
    value: 10,
    suffix: "+",
    label: "Supported Languages",
    sublabel: "Multilingual",
    description: "Including Thai, Vietnamese, Hindi, Bengali, Arabic, Turkish, Indonesian, Tagalog, Malay, and English — all AI-translated and culturally adapted.",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Numbers That Tell Our Story
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Behind every metric is a real impact: players entertained, communities connected,
            and markets transformed. These numbers represent four years of disciplined execution
            in some of the world&apos;s fastest-growing mobile gaming markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 shadow-soft group-hover:shadow-hover transition-all duration-300"
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                {stat.sublabel}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
