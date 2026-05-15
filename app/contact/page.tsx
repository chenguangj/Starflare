"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Building2,
  Send,
  Sparkles,
  Globe,
  Users,
  Clock,
  Handshake,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const offices = [
  {
    city: "Thailand",
    role: "R&D Headquarters",
    detail: "Core AI & game development team, 150+ engineers",
  },
  {
    city: "Singapore",
    role: "Southeast Asia Operations",
    detail: "Regional publishing, partnerships & business development",
  },
  {
    city: "Bangalore",
    role: "India Engineering Center",
    detail: "India market operations, localization & QA",
  },
];

const interests = [
  "Game Publishing Partnership",
  "AI Technology Licensing",
  "Investor Relations",
  "Media & Press Inquiry",
  "Career Opportunities",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative">
      <Navbar />

      {/* Hero - Full screen matching homepage style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-32 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 shadow-soft"
            >
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Partnership & Collaboration
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-foreground">Let's Build </span>
              <span className="text-gradient inline-block">Together</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
            >
              Whether you're a{" "}
              <span className="font-semibold text-primary">game publisher</span>
              ,{" "}
              <span className="font-semibold text-primary">
                technology partner
              </span>
              , or <span className="font-semibold text-primary">investor</span>{" "}
              — we'd love to explore how we can create value together.
            </motion.p>

            {/* Extended description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              With offices across Asia and a team of 200+ professionals, we're
              always looking for partners who share our vision of AI-native
              gaming for emerging markets.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Response within 2 business days</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>3 offices across Asia</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>200+ team members</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  value: "12",
                  label: "Countries",
                  sublabel: "Active operations",
                },
                {
                  value: "50+",
                  label: "Partners",
                  sublabel: "Across the ecosystem",
                },
                { value: "3", label: "Offices", sublabel: "SZ · SG · BLR" },
                {
                  value: "<48h",
                  label: "Response Time",
                  sublabel: "For all inquiries",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section id="offices" className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Reach Out <span className="text-gradient">Anytime</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below or reach us directly at any of our
              offices. We respond to all inquiries within 2 business days.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Starflare Technology Company Limited
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI-native lightweight gaming company serving 20M+ players
                  across 12 countries in Southeast Asia & Middle East.
                </p>
              </div>

              {/* Offices */}
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Our Offices
                </h4>
                <div className="space-y-3">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-semibold text-foreground">
                          {office.city}
                        </span>
                      </div>
                      <div className="text-sm text-primary font-medium ml-5">
                        {office.role}
                      </div>
                      <div className="text-xs text-muted-foreground ml-5 mt-1">
                        {office.detail}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact methods */}
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Direct Contact
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-sm font-medium text-foreground">
                      General Inquiries
                    </div>
                    <div className="text-sm text-primary mt-1">
                      contact@starflaretech.xyz
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-sm font-medium text-foreground">
                      Business Development
                    </div>
                    <div className="text-sm text-primary mt-1">
                      partnerships@starflaretech.xyz
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-sm font-medium text-foreground">
                      Press & Media
                    </div>
                    <div className="text-sm text-primary mt-1">
                      press@starflaretech.xyz
                    </div>
                  </div>
                </div>
              </div>

              {/* Business scope */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">
                    Business Scope
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Operating across India, Thailand, Indonesia, Vietnam, Saudi
                  Arabia, UAE, Egypt, Pakistan, Bangladesh, Philippines,
                  Malaysia, and Myanmar.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-soft">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message Sent
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 2
                    business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        interest: "",
                        message: "",
                      });
                    }}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-soft"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Send Us a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          e.target.setCustomValidity("");
                        }}
                        onInvalid={(e) =>
                          (e.target as HTMLInputElement).setCustomValidity(
                            "Please fill in this field.",
                          )
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          e.target.setCustomValidity("");
                        }}
                        onInvalid={(e) => {
                          const input = e.target as HTMLInputElement;
                          if (input.validity.valueMissing)
                            input.setCustomValidity(
                              "Please fill in this field.",
                            );
                          else if (input.validity.typeMismatch)
                            input.setCustomValidity(
                              "Please enter a valid email address.",
                            );
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Business Interest *
                      </label>
                      <select
                        id="interest"
                        required
                        value={formData.interest}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            interest: e.target.value,
                          });
                          e.target.setCustomValidity("");
                        }}
                        onInvalid={(e) =>
                          (e.target as HTMLSelectElement).setCustomValidity(
                            "Please select an option.",
                          )
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">Select interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        e.target.setCustomValidity("");
                      }}
                      onInvalid={(e) =>
                        (e.target as HTMLTextAreaElement).setCustomValidity(
                          "Please fill in this field.",
                        )
                      }
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-hover hover:scale-[1.02] transition-all duration-300 h-12 text-base rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We typically respond within 2 business days. Your
                    information is kept confidential.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section
        id="partnership"
        className="py-24 border-t border-border relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ways to <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with partners across the gaming ecosystem — from
              publishers to technology providers to investors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Handshake,
                title: "Game Publishing",
                description:
                  "Partner with us to publish your games in Southeast Asia and Middle East markets. We handle localization, user acquisition, and live ops.",
              },
              {
                icon: MessageSquare,
                title: "AI Technology Licensing",
                description:
                  "License our AI platform for your own game operations — from intelligent NPCs to dynamic difficulty and anti-cheat systems.",
              },
              {
                icon: Globe,
                title: "Market Expansion",
                description:
                  "Leverage our local presence and cultural expertise to expand your games into new emerging markets with confidence.",
              },
              {
                icon: Users,
                title: "Investor Relations",
                description:
                  "We're backed by leading gaming and AI investors. Interested in our growth story? Let's connect.",
              },
              {
                icon: Building2,
                title: "Strategic Alliance",
                description:
                  "Explore deeper integration opportunities — co-development, shared technology, or joint ventures in new markets.",
              },
              {
                icon: Mail,
                title: "Media & Press",
                description:
                  "Journalists, analysts, and content creators — reach out for press kits, interviews, or industry commentary.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently <span className="text-gradient">Asked</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with Starflare.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What markets do you operate in?",
                a: "We operate across 12 countries in Southeast Asia and the Middle East, including India, Thailand, Indonesia, Vietnam, Saudi Arabia, UAE, Egypt, Pakistan, Bangladesh, Philippines, Malaysia, and Myanmar.",
              },
              {
                q: "What types of games do you publish?",
                a: "We focus on lightweight games across three categories: card strategy, casual puzzle, and strategy battle games. All our titles are enhanced with AI for personalization, localization, and live operations.",
              },
              {
                q: "How does your AI technology licensing work?",
                a: "We offer modular AI solutions that can be integrated into your existing game operations. This includes intelligent NPC dialogue, dynamic difficulty adjustment, AI anti-cheat, and automated localization. Pricing is based on usage volume.",
              },
              {
                q: "What's the typical partnership timeline?",
                a: "From initial conversation to live deployment, a typical publishing partnership takes 3-6 months. Technology licensing can be faster — usually 4-8 weeks for integration and testing.",
              },
              {
                q: "Do you invest in game studios?",
                a: "Yes, we selectively invest in studios building games for emerging markets, particularly those with strong potential in our core geographies. Reach out through the Investor Relations interest to discuss.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {item.q}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient">Start</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Scroll back up to send us a message, or reach out directly at any
              of our email addresses. We look forward to hearing from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-hover hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
                Back to Top
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/20 text-foreground font-medium hover:bg-secondary hover:border-primary/40 transition-all duration-300 shadow-soft"
              >
                Explore Our Vision
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
