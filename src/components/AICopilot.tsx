import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Terminal,
  Cpu,
  ArrowUpRight,
  RotateCcw,
  Maximize2,
  Minimize2,
  CheckCircle2,
} from "lucide-react";
import portrait from "@/assets/developer-portrait.png";
import { sound } from "@/lib/sound";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  links?: { label: string; href: string }[];
}

const PRESET_QUERIES = [
  {
    q: "What is Pasha's core tech stack?",
    a: "Muhammad Mubashar's core stack pairs modern React 19, TypeScript, and Tailwind CSS v4 on the frontend with high-concurrency Python and FastAPI on the backend. For persistent state, he uses PostgreSQL, Redis in-memory caching, Docker for containerization, and integrates autonomous LLM agents (OpenAI, LangChain, Claude).",
    links: [{ label: "View Tech Stack", href: "#skills" }],
  },
  {
    q: "Tell me about the IBM Bob 2.0 Hackathon win",
    a: "In September 2026, Pasha Dev engineered 'Pasha DevPilot' during the 48-hour global IBM Bob 2.0 Hackathon on Lablab.ai. It is an autonomous AI software engineer featuring a 94.6% auto-fix rate, AST syntax verification, and multi-file refactoring, earning the Innovation & Excellence Distinction Award.",
    links: [{ label: "Inspect Certificate", href: "#hackathons" }],
  },
  {
    q: "Is Pasha available for hire / freelance?",
    a: "Yes! Pasha Dev is currently taking on select engagements, including full-stack MVP builds (0 to 1), Python/FastAPI microservice engineering, autonomous AI agent pipelines, and 60fps cinematic web interfaces. Average response turnaround is under 2 hours.",
    links: [{ label: "Initiate Project", href: "#contact" }],
  },
  {
    q: "How does he architect AI agents?",
    a: "Pasha builds applied AI systems with multi-step tool/function calling, vector embeddings with RAG knowledge grounding, dynamic prompt directives, and autonomous agent loops designed for low latency (< 15ms streaming).",
    links: [{ label: "Explore What I Build", href: "#services" }],
  },
];

export function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "System initialized. I am Pasha DevPilot — the autonomous AI copilot trained on Muhammad Mubashar's architecture, projects, and tech stack. How can I assist your team today?",
      timestamp: "NOW",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleOpen = () => {
    const next = !isOpen;
    if (next) {
      sound.playCommandOpen();
    } else {
      sound.playWhoosh();
    }
    setIsOpen(next);
  };

  const handleSend = (userText: string) => {
    if (!userText.trim() || isTyping) return;

    sound.playBlip(1100, 0.03);
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Find answer or fallback
    const matched = PRESET_QUERIES.find(
      (p) =>
        p.q.toLowerCase().includes(userText.toLowerCase()) ||
        userText.toLowerCase().includes(p.q.toLowerCase().split(" ")[2] || "")
    );

    const botResponseText = matched
      ? matched.a
      : `Received directive regarding "${userText}". Muhammad Mubashar specializes in building full-stack applications with React 19, Python FastAPI, PostgreSQL, and autonomous AI agents. For detailed inquiries or proposals, you can transmit a directive directly via the contact bridge below!`;

    const botLinks = matched?.links || [{ label: "Contact Developer", href: "#contact" }];

    // Realistic typing effect
    setTimeout(() => {
      let currentIdx = 0;
      const botMsgId = `bot-${Date.now()}`;

      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          sender: "bot",
          text: "",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          links: botLinks,
        },
      ]);

      const interval = setInterval(() => {
        currentIdx += 4;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === botMsgId ? { ...m, text: botResponseText.slice(0, currentIdx) } : m
          )
        );

        if (currentIdx >= botResponseText.length) {
          clearInterval(interval);
          setIsTyping(false);
          sound.playChirp();
        }
      }, 25);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[95]">
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleOpen}
          className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-cyan/40 bg-[#070b14]/90 p-2 pr-4 shadow-[0_0_30px_rgba(0,229,255,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] cursor-pointer"
        >
          {/* Pulsing ring aura */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan via-violet to-cyan opacity-40 blur-sm group-hover:opacity-80 transition duration-300" />

          <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan ring-1 ring-cyan/40">
            <Bot className="size-5" />
            <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 border-2 border-black animate-ping" />
          </div>

          <div className="relative flex flex-col text-left font-mono">
            <span className="text-[11px] font-bold text-foreground group-hover:text-cyan transition-colors">
              PASHA AI COPILOT
            </span>
            <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="size-1 rounded-full bg-emerald-400" /> ONLINE // ASK ME
            </span>
          </div>
        </motion.button>
      )}

      {/* Holographic Chat Terminal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[520px] w-[92vw] sm:w-[400px] flex-col overflow-hidden rounded-3xl border-2 border-cyan/40 bg-[#060a14]/98 shadow-[0_0_60px_rgba(0,229,255,0.3)] backdrop-blur-3xl"
          >
            {/* Top Laser Accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_10px_#00e5ff]" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="relative flex size-8 items-center justify-center rounded-xl bg-cyan/15 text-cyan ring-1 ring-cyan/40">
                  <Bot className="size-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-foreground">
                    Pasha DevPilot AI
                  </h4>
                  <p className="font-mono text-[9px] text-cyan uppercase tracking-wider">
                    AUTONOMOUS ASSISTANT v6.0
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    sound.playBlip(750, 0.03);
                    setMessages([
                      {
                        id: "init",
                        sender: "bot",
                        text: "Terminal reset. How can I assist you with Muhammad Mubashar's work or availability?",
                        timestamp: "NOW",
                      },
                    ]);
                  }}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="size-3.5" />
                </button>

                <button
                  type="button"
                  onClick={toggleOpen}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                  title="Close copilot"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3.5 font-mono text-xs no-scrollbar"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/70 mb-1 px-1">
                    <span>{m.sender === "user" ? "YOU" : "DEVPILOT"}</span>
                    <span>•</span>
                    <span>{m.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      m.sender === "user"
                        ? "bg-cyan/20 border border-cyan/40 text-cyan font-medium rounded-tr-xs"
                        : "bg-white/[0.04] border border-white/10 text-foreground/90 rounded-tl-xs shadow-inner"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.text}</p>

                    {m.links && m.links.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {m.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => {
                              sound.playBlip(950, 0.04);
                              setIsOpen(false);
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-bold text-cyan hover:bg-cyan hover:text-black transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="size-2.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-cyan text-[11px] font-mono pl-2">
                  <span className="size-1.5 rounded-full bg-cyan animate-ping" />
                  <span>DEVPILOT IS SYNTHESIZING RESPONSE...</span>
                </div>
              )}
            </div>

            {/* Quick Prompt Directive Chips */}
            <div className="border-t border-white/10 p-2.5 bg-black/40">
              <span className="block font-mono text-[9px] text-muted-foreground uppercase px-1 mb-1.5">
                Suggested Directives:
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {PRESET_QUERIES.map((preset) => (
                  <button
                    key={preset.q}
                    type="button"
                    onClick={() => handleSend(preset.q)}
                    className="whitespace-nowrap rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-muted-foreground hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan transition-colors cursor-pointer"
                  >
                    {preset.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3 bg-black/60"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about tech, projects, or contracts..."
                className="flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex size-9 items-center justify-center rounded-xl bg-cyan text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] disabled:opacity-40 cursor-pointer transition-transform hover:scale-105"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
