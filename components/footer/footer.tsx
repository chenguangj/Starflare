"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "AI Platform", href: "/ai-platform" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-secondary/30 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient flex items-center justify-center shadow-soft"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Starflare
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-native lightweight gaming company powering 20M+ players across
              12 countries with cutting-edge technology.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Starflare Technology Company
              Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Powered by Amazon Bedrock
              </span>
              <span className="text-border">·</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                AWS Advanced Partner
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
