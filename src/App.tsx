/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowForward, 
  TrendingFlat, 
  CheckCircle, 
  AutoAwesome, 
  Insights, 
  Language, 
  Psychology, 
  Mail, 
  Share, 
  OpenInNew,
  ArrowRightAlt
} from "./components/Icons";

// Custom Icon components using Lucide (mapped from the Material Symbols in the prompt)
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Globe, 
  Brain, 
  Mail as MailIcon, 
  Share2, 
  ExternalLink,
  MoveRight
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-tighter text-on-surface font-headline">Griffin Tech</div>
      <div className="hidden md:flex items-center space-x-8">
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label font-medium text-sm" href="#founders">Founders</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label font-medium text-sm" href="#socialgriffin">SocialGriffin</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label font-medium text-sm" href="#blog">Blog</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label font-medium text-sm" href="#media">Media</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="btn-gradient text-white px-6 py-2.5 rounded-full font-label font-bold text-sm shadow-lg hover:opacity-90 transition-all">
          Contact Us
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 z-10"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full font-label">
          Intelligence Redefined
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">
          Architecting the <span className="text-gradient">Next Era</span> of Synthetic Systems.
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Griffin Tech builds advanced AI infrastructures that bridge the gap between complex data and human intuition. 
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-gradient text-white px-8 py-4 rounded-full font-label font-bold text-base shadow-xl flex items-center gap-2 hover:btn-glow transition-all">
            Explore Ecosystem <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-surface-container-low text-primary px-8 py-4 rounded-full font-label font-bold text-base hover:bg-surface-container-high transition-colors">
            Our Thesis
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            alt="Abstract high-tech AI visualization" 
            className="w-full h-full object-cover" 
            src="/images/ai.png"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  </section>
);

const SocialGriffin = () => (
  <section className="py-24 bg-surface-container-low" id="socialgriffin">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <Sparkles className="text-secondary w-8 h-8 mb-4" />
              <h4 className="font-bold mb-2">Auto-Curation</h4>
              <p className="text-sm text-on-surface-variant">Intelligent trend detection and content mapping.</p>
            </div>
            <div className="bg-secondary text-white p-6 rounded-xl shadow-lg">
              <BarChart3 className="w-8 h-8 mb-4" />
              <h4 className="font-bold mb-2">Predictive Viral</h4>
              <p className="text-sm opacity-90">AI models that forecast engagement before you post.</p>
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <Globe className="text-primary w-8 h-8 mb-4" />
              <h4 className="font-bold mb-2">Global Sync</h4>
              <p className="text-sm text-on-surface-variant">Localized presence across every digital frontier.</p>
            </div>
            <div className="bg-surface-container-highest p-6 rounded-xl shadow-sm">
              <Brain className="text-on-surface w-8 h-8 mb-4" />
              <h4 className="font-bold mb-2">Persona AI</h4>
              <p className="text-sm text-on-surface-variant">Maintain brand voice with synthetic precision.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="font-label text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">The Flagship</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-on-surface">SocialGriffin: The Autonomous Social Engine</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Stop manual posting. SocialGriffin utilizes proprietary LLMs to manage, optimize, and scale your brand's digital presence across all platforms simultaneously.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "94% Average Engagement Increase",
              "Real-time Sentiment Analysis",
              "Zero-touch Content Pipeline"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://www.socialgriffin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-secondary font-bold font-label text-sm hover:gap-5 transition-all">
            View SocialGriffin <MoveRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Founders = () => (
  <section className="py-24 bg-surface-container-lowest" id="founders">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Built by Decades of Innovation</h2>
        <p className="text-on-surface-variant">Our leadership brings over 40 combined years of experience in distributed systems, machine learning, and venture scaling.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
           {
            name: "Ciaran O'Donnell",
            role: "Co-Founder",
            desc: "Two decades of engineering at the highest level, from Google to global finance. A technologist who builds the complex, cutting-edge systems that power the world’s biggest industries.",
            img: "/images/ciaran-odonnell.png"
          }, {
            name: "Kyle Kelin",
            role: "Co-Founder",
            desc: "Veteran consultant and sales architect who has scaled revenue and loyalty for hundreds of businesses. A master of sustainable growth and strategic relationship building.",
            img: "https://themorningprompt.com/wp-content/uploads/2026/01/kyle-kelin-photo-bw.png?w=500"
          },
        
          {
            name: "Natalie O'Donnell",
            role: "Co-Founder",
            desc: "A dual-continent entrepreneur and tech leader. Fuses deep financial industry expertise with a proven track record of scaling small businesses into international successes.",
            img: "/images/natalie-odonnell.png"
          }
        ].map((founder, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-surface-container-low">
              <img 
                alt={founder.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src={founder.img}
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
            <p className="text-primary font-label text-[10px] font-semibold mb-4 tracking-wider uppercase">{founder.role}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{founder.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section className="py-24 bg-surface-container-low/50" id="blog">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Latest Insights</h2>
          <p className="text-on-surface-variant">Thoughts on the future of autonomous systems.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 font-label font-bold text-primary text-sm group">
          View All Posts <ArrowRightAlt className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "The Shift to Agentic Social Workflows",
            category: "Engineering",
            readTime: "5 min read",
            desc: "Exploring how AI agents are moving beyond chat to autonomous execution in brand marketing.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuJSAzNaH6OO8nWQjKYQwI9JCdJisEK3jgpI47BnQJwGn_i8clIQ78tScxdjz5Zl_Sbl58WXypc0qPdFgkZalwY8LDsArpajNEd3qodJA-sGxtV-sgy9Sh1j7-lBcEujlZTn5n1fwo4g-2eyworjxo2pUDFKl-domeTUq1KMiDwWxbedk04mH-QLNj5Hh2nOVrbUUfp2XSSfIT12zk_DoSlqqAlDaflN88PoOv1aEyE5uYqBhJ3zcl8Xs4nXwXsXCY535fQgNieSA"
          },
          {
            title: "Privacy in the Age of Synthetic Data",
            category: "Security",
            readTime: "8 min read",
            desc: "How Griffin Tech maintains the integrity of brand data within proprietary LLM environments.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLuZi7y0wz3ZfLfoh54AUg5N-GpZOauPUZC5u8XrHc5mh1MsToK853MwboCR3BAHmJKpRnlDX3H0YwOOb56ixsOWd8dl8qvkRNOLKS0Cb_K9_Z1IFp6bkHVg9fYZvlIDabipQBgQF6PR7AsWSxHZ_CO2TT6N4Oc0_M-k2ISSRz_jKU7pI4NSbHsdlSMSfYpbCc1mv3w4j9mQxvIdxqCTTnSENCDTmXLNe_LoggD7igbDGbWL9ubU3Y-3atLKZUVNyhMGhnCLoKgmM"
          },
          {
            title: "Human-AI Hybrid Creativity",
            category: "Future",
            readTime: "4 min read",
            desc: "Why the best results come from AI augmentation rather than complete replacement.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBAWKzuzd4j_1dSKifTykawMmfw1bUm5j8HWwIMrNYlIyCDE8pht4gsjCROpmCjONHmC9QNM5XIc6SWlF6tK4pOZFjtZuTiKUmAXQQHHTX-CLFnt3_gQN7Y92tOSVKxnU_u0i2keF_uXnrwmZsCGS8GZfyysqnxDOQLqZiXjZDYaDNLIyBDMiJ-eyLBhrcbCtn1gUxGp8_3lgAZ-f_3r-DptZlN1VoOhqw46ABjQ0ult0hJ55docsNyniAHp49CY9CXmi5q5rdggo"
          }
        ].map((post, i) => (
          <article key={i} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={post.img}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-primary/10 text-primary rounded">{post.category}</span>
                <span className="text-xs text-on-surface-variant font-label">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{post.desc}</p>
              <a className="text-primary font-bold font-label text-xs inline-flex items-center gap-1" href="#">
                Read Post <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 bg-background" id="media">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-on-surface rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect with Griffin</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              We're always open to collaborating with media outlets, researchers, and forward-thinking enterprises. For all inquiries, reach out to our communications team.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase">Media Queries</p>
                  <a className="text-xl font-bold hover:text-primary-container transition-colors" href="mailto:contact@griffintech.ai">contact@griffintech.ai</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase">Social Media</p>
                  <div className="flex gap-4 mt-1">
                    <a className="hover:text-primary-container transition-colors font-label font-bold text-sm" href="#">X (Twitter)</a>
                    <a className="hover:text-primary-container transition-colors font-label font-bold text-sm" href="#">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl">
            <h4 className="text-2xl font-bold mb-6">Inquiry Form</h4>
            <form className="space-y-4">
              <input className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary-container outline-none" placeholder="Your Name" type="text" />
              <input className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary-container outline-none" placeholder="Email Address" type="email" />
              <textarea className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary-container outline-none" placeholder="How can we help?" rows={4}></textarea>
              <button className="w-full bg-white text-on-surface font-bold py-4 rounded-xl hover:bg-primary-container hover:text-white transition-all " disabled>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-12 px-6 border-t border-outline-variant/20 bg-surface-container-low">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <div className="md:col-span-1">
        <span className="text-xl font-bold text-on-surface mb-4 block">Griffin Tech</span>
        <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
          Building the cognitive infrastructure for the 21st century. High-performance AI for high-performance brands.
        </p>
      </div>
      {[
        { title: "Platform", links: ["SocialGriffin", "Enterprise API", "Custom LLMs"] },
        { title: "Company", links: ["Founders", "Blog", "Media Kit"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security Ethics"] }
      ].map((col, i) => (
        <div key={i}>
          <h5 className="font-bold text-on-surface mb-6 font-label text-[10px] uppercase tracking-widest">{col.title}</h5>
          <ul className="space-y-4 text-sm">
            {col.links.map((link, j) => (
              <li key={j}><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10">
      <p className="text-on-surface-variant text-xs text-center">© 2024 Griffin Tech LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SocialGriffin />
        <Founders />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
