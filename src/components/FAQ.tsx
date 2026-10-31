import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  ChevronDown,
  BrainCircuit,
  Layers,
  Server,
  Sparkles,
  Briefcase,
  Cpu,
  ArrowUpRight,
  MessageSquare,
  Clock,
  CheckCircle2,
  HelpCircle,
  Terminal,
  Zap,
  ShieldCheck,
  Check,
  Copy,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { faqs, type FAQCategory, type FAQItem } from "@/data/faq";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CATEGORIES: { id: FAQCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Directives", icon: Terminal },
  { id: "ai", label: "AI & Agents", icon: BrainCircuit },
  { id: "fullstack", label: "Full Stack", icon: Layers },
  { id: "backend", label: "Python & DevOps", icon: Server },
  { id: "collaboration", label: "Hiring & Timeline", icon: Briefcase },
];

function getTopicIcon(iconType: FAQItem["iconType"]) {
  switch (iconType) {
    case "ai":
      return <BrainCircuit className="size-4 text-violet" aria-hidden="true" />;
    case "fullstack":
      return <Layers className="size-4 text-cyan" aria-hidden="true" />;
    case "backend":
      return <Server className="size-4 text-cyan" aria-hidden="true" />;
    case "motion":
      return <Sparkles className="size-4 text-amber-400" aria-hidden="true" />;
    case "collab":
      return <Briefcase className="size-4 text-emerald-400" aria-hidden="true" />;
    case "gear":
      return <Cpu className="size-4 text-cyan" aria-hidden="true" />;
    default:
      return <HelpCircle className="size-4 text-cyan" aria-hidden="true" />;
  }
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("tech-stack");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pashabusiness804@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="faq" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Heading + Ultra-Sleek Cyber Consultation Hub (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <SectionHeading
                eyebrow="Knowledge & Clarity"
                title="Questions, Answered."
                lead="Direct insights into my AI integration capabilities, modern full-stack engineering standards, and flexible collaboration models."
              />

              {/* Cyber Architecture Consultation Hub */}
              <div className="group relative mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_94%,transparent)] p-7 sm:p-8 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/20">
                {/* Tech corner marks */}
                <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] text-cyan/30" aria-hidden="true">+</span>
                <span className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-cyan/30" aria-hidden="true">+</span>
                <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-cyan/30" aria-hidden="true">+</span>
                <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-cyan/30" aria-hidden="true">+</span>

                {/* Laser top accent line */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Status bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-emerald-400">
                      Taking Select Engagements
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-cyan">
                    <Clock className="size-3" aria-hidden="true" />
                    <span>Avg reply &lt; 2h</span>
                  </div>
                </div>

                {/* Core Inquiry Offer */}
                <div className="mt-5">
                  <h4 className="font-display text-lg font-bold text-foreground group-hover:text-cyan transition-colors">
                    Have a Custom Architecture in Mind?
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Whether you need an AI agent feasibility review, full-stack sprint estimates, or an NDA signed before discussing code, I respond directly with zero middleman drag.
                  </p>
                </div>

                {/* Key Commitments */}
                <div className="mt-5 space-y-2.5 font-mono text-[11px] text-foreground/85">
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                    <CheckCircle2 className="size-3.5 text-cyan shrink-0" aria-hidden="true" />
                    <span>Direct developer access (No agency overhead)</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                    <CheckCircle2 className="size-3.5 text-cyan shrink-0" aria-hidden="true" />
                    <span>Clean Git commits &amp; strict type contracts</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                    <CheckCircle2 className="size-3.5 text-cyan shrink-0" aria-hidden="true" />
                    <span>Flexible milestones &amp; fast sprint delivery</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/5 pt-5">
                  <Button variant="neon" size="sm" asChild className="flex-1 justify-center shadow-md shadow-cyan/30">
                    <a href="#contact">
                      Start Conversation <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="glass border border-white/10 text-xs hover:border-cyan/40 hover:text-cyan cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1.5 text-cyan">
                        <Check className="size-3.5 text-emerald-400" aria-hidden="true" /> Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Copy className="size-3.5" aria-hidden="true" /> Copy Email
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Search + Category Chips + Accordion (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Unified Search & Category Control Bar */}
            <div className="space-y-3.5">
              {/* Telemetry Indicator */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono">
                <span className="text-cyan font-bold flex items-center gap-1.5">
                  <Terminal className="size-3 text-cyan" aria-hidden="true" />
                  Knowledge Matrix / Directives
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                  Status: Verified
                </span>
              </div>

              {/* Sleek Cyber Search Bar */}
              <div className="relative group">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-cyan/70 transition-colors group-focus-within:text-cyan" aria-hidden="true" />
                <input
                  id="faq-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. AI Agents, FastAPI, Pricing, Timeline)..."
                  className="w-full rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] py-3 pl-10 pr-24 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan focus-visible:ring-2 focus-visible:ring-cyan transition-colors backdrop-blur-xl group-hover:border-cyan/40 shadow-inner"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="rounded-lg bg-white/5 p-1 text-muted-foreground hover:bg-cyan/10 hover:text-cyan cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                      title="Clear search"
                    >
                      <X className="size-3.5" aria-hidden="true" />
                    </button>
                  ) : (
                    <span className="hidden sm:inline-block rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                      HUD / Search
                    </span>
                  )}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {CATEGORIES.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? faqs.length
                      : faqs.filter((f) => f.category === cat.id).length;
                  const isActive = activeCategory === cat.id;
                  const Icon = cat.icon;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-[border-color,background-color,color,transform] duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                        isActive
                          ? "bg-cyan/15 border border-cyan text-cyan shadow-sm shadow-cyan/30 scale-102"
                          : "border border-white/5 bg-white/[0.03] text-muted-foreground hover:text-foreground hover:border-white/20"
                      }`}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                      <span>{cat.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                          isActive
                            ? "bg-cyan/25 text-cyan font-bold"
                            : "bg-white/5 text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion Cards Container */}
            <div className="mt-6 space-y-3.5">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id;

                  return (
                    <article
                      key={faq.id}
                      className={cn(
                        "group relative rounded-2xl border transition-[border-color,background-color,box-shadow] duration-300 overflow-hidden backdrop-blur-xl",
                        isOpen
                          ? "border-cyan/50 bg-[color-mix(in_oklab,var(--panel-strong)_95%,transparent)] shadow-md shadow-cyan/20"
                          : "border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_82%,transparent)] hover:border-cyan/35 hover:bg-[color-mix(in_oklab,var(--panel)_90%,transparent)]"
                      )}
                    >
                      {/* Tech corner marks */}
                      <span className="pointer-events-none absolute top-2.5 left-2.5 font-mono text-[9px] text-cyan/30" aria-hidden="true">+</span>
                      <span className="pointer-events-none absolute top-2.5 right-2.5 font-mono text-[9px] text-cyan/30" aria-hidden="true">+</span>

                      {/* Top laser line when open */}
                      {isOpen && (
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent" />
                      )}

                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : faq.id)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                          <div className="flex items-center gap-3.5">
                            <span
                              className={cn(
                                "flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                                isOpen
                                  ? "bg-cyan/15 ring-1 ring-cyan/40"
                                  : "bg-white/5 group-hover:bg-white/10"
                              )}
                            >
                              {getTopicIcon(faq.iconType)}
                            </span>
                            <span
                              className={cn(
                                "font-display text-sm font-semibold transition-colors duration-300 sm:text-base",
                                isOpen
                                  ? "text-foreground font-bold"
                                  : "text-foreground/90 group-hover:text-cyan"
                              )}
                            >
                              {faq.q}
                            </span>
                          </div>

                          <span
                            className={cn(
                              "flex size-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300",
                              isOpen
                                ? "border-cyan/40 bg-cyan/15 text-cyan rotate-180"
                                : "border-white/10 bg-white/5 text-muted-foreground group-hover:text-foreground"
                            )}
                          >
                            <ChevronDown className="size-4" aria-hidden="true" />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/5 px-5 pt-4 pb-5">
                              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                {faq.a}
                              </p>

                              {/* Tag chips & Telemetry */}
                              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {faq.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-lg border border-cyan/20 bg-cyan/5 px-2.5 py-0.5 text-[10px] font-mono text-cyan"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                                <span className="font-mono text-[9px] text-emerald-400/90 flex items-center gap-1">
                                  <CheckCircle2 className="size-3 text-emerald-400" aria-hidden="true" />
                                  Doc. Verified (2026)
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-[var(--border)] bg-surface-2/40 p-10 text-center">
                  <Search className="size-10 text-muted-foreground/40" aria-hidden="true" />
                  <h4 className="mt-4 font-display text-base font-semibold text-foreground">
                    No matching questions found
                  </h4>
                  <p className="mt-1.5 max-w-sm text-xs text-muted-foreground">
                    We couldn’t find any questions matching “{searchQuery}”. Try a different keyword or browse all topics.
                  </p>
                  <Button
                    variant="neon"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-5"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
