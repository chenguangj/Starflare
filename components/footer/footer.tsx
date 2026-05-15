"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Zap, Globe, ArrowUpRight, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Home",
    links: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/#features" },
      { label: "Technology", href: "/#tech-stack" },
      { label: "Global Reach", href: "/#global-reach" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Overview", href: "/products" },
      { label: "Game Categories", href: "/products#game-categories" },
      { label: "Localization", href: "/products#localization" },
      { label: "AI Technology", href: "/products#ai-tech" },
    ],
  },
  {
    title: "AI Platform",
    links: [
      { label: "Overview", href: "/ai-platform" },
      { label: "AI Scenarios", href: "/ai-platform#scenarios" },
      { label: "Architecture", href: "/ai-platform#architecture" },
      { label: "Cost & Roadmap", href: "/ai-platform#cost" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get in Touch", href: "/contact" },
      { label: "Our Offices", href: "/contact#offices" },
      { label: "Partnership", href: "/contact#partnership" },
      { label: "FAQ", href: "/contact#faq" },
    ],
  },
];

export function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // 检查是否是锚点链接（包含 #）
    if (href.includes("#")) {
      e.preventDefault();

      const [path, hash] = href.split("#");

      // 如果是当前页面的锚点
      if (!path || path === window.location.pathname) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // 如果是其他页面的锚点，先跳转页面
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-secondary/50 border-t border-border">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top section with stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, value: "20M+", label: "Players Worldwide" },
              { icon: Globe, value: "12", label: "Countries" },
              { icon: Zap, value: "14.9B", label: "Tokens/Day" },
              { icon: Sparkles, value: "10+", label: "Languages" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-sm"
            >
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8"
                >
                  <Image
                    src="/gemini-svg.svg"
                    alt="Starflare"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </motion.div>
                <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Starflare
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                AI-native lightweight gaming company powering 20M+ players
                across 12 countries with cutting-edge technology.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-medium shadow-hover hover:scale-105 transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1"
            >
              {footerLinks.map((column, columnIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + columnIndex * 0.05 }}
                >
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wider">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors relative group inline-flex items-center gap-1"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-border/50 pt-8 pb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Starflare Technology Company Limited. All rights reserved.
            </p>

            {/* Company Address */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 text-primary" />
              <span>RM 509, 5/F THE CLOUD 111 TUNG CHAU ST TAI KOK TSUI HONG KONG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
