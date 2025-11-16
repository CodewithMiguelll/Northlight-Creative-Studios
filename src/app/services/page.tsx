"use client";
import {
  Briefcase,
  Code2,
  Palette,
  FileText,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Check,
  Stars,
  ArrowBigLeft,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Podkova, Quicksand } from "next/font/google";

const podkova = Podkova({
  subsets: ["latin"],
  weight: "700",
});
const quickSand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-[#e91e63]" />,
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks like React and Next.js. Optimized for speed, SEO, and scalability.",
    bullets: [
      "Responsive layouts",
      "Clean, maintainable code",
      "SEO-ready builds",
    ],
  },
  {
    icon: <Palette className="w-7 h-7 text-[#e91e63]" />,
    title: "UI/UX Design",
    description:
      "Crafting designs that don’t just look good, but feel intuitive. Balancing style with user experience.",
    bullets: [
      "Wireframes & prototypes",
      "High-fidelity mockups",
      "Design systems",
    ],
  },
  {
    icon: <Briefcase className="w-7 h-7 text-[#e91e63]" />,
    title: "Branding Assets",
    description:
      "Visual identity packages for freelancers and startups. Consistency across your brand’s touchpoints.",
    bullets: [
      "Logo & color palettes",
      "Social media kits",
      "Typography guides",
    ],
  },
  {
    icon: <FileText className="w-7 h-7 text-[#e91e63]" />,
    title: "Scriptwriting for Reels",
    description:
      "Engaging, concise scripts tailored for Instagram and TikTok reels to help you connect with your audience.",
    bullets: [
      "Hook-driven intros",
      "Storytelling flow",
      "Call-to-action integration",
    ],
  },
];

const packages = [
  {
    icon: <Zap className="w-8 h-8 text-[#e91e63]" />,
    title: "Starter",
    tagline: "For individuals & new businesses",
    priceNaira: "₦120,000 – ₦180,000",
    priceIntl: "$300 – $500",
    features: [
      "1–3 page website (home, about, contact/booking)",
      "Mobile-friendly, fast loading",
      "Basic branding (colors, fonts, logo placement)",
      "Google Business Profile setup",
      "2 weeks of post-launch support",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#e91e63]" />,
    title: "Growth",
    tagline: "For businesses ready to scale",
    priceNaira: "₦250,000 – ₦400,000",
    priceIntl: "$800 – $1,200",
    highlight: true,
    features: [
      "5–8 page website (services, portfolio, blog, etc.)",
      "Conversion-focused design (forms, CTAs, email list integration)",
      "Basic SEO setup (keywords, meta tags, Google Analytics)",
      "Social media integration",
      "1 month of post-launch support",
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-[#e91e63]" />,
    title: "Premium",
    tagline: "For serious brands & e-commerce",
    priceNaira: "₦600,000 – ₦1,000,000+",
    priceIntl: "$2,000 – $3,500+",
    features: [
      "Full website or online store (10+ pages or product catalog)",
      "Advanced features (payment integration, booking systems, custom tools)",
      "Content support (copy polish + blog setup)",
      "Full SEO optimization + performance audit",
      "2 months of post-launch support + maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fdfcff] to-[#f3eefb]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1
          className={`${quickSand.className} text-3xl md:text-5xl font-bold mb-4`}
        >
          Our Services
        </h1>
        <div className="h-1 w-20 bg-[#e91e63] mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          At Northlight Creative Studios, we blend design and technology to
          create digital experiences that inspire, engage, and convert.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Services Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h2 className="text-xl font-semibold text-[#121212]">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-1 text-gray-600">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#e91e63]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sticky Offers */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:sticky lg:top-20 h-fit bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#7e57c2]" />
            <h3 className="text-xl font-semibold text-[#121212]">
              Special Offers
            </h3>
          </div>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li> First 2 orders are FREE!</li>
            <li>
             Free month of maintenance and support for websites after launch
            </li>
            <li>Bundle deals: Copy Audits + Mini Brand Guides</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 flex gap-2 items-center justify-center text-center bg-[#7e57c2] text-white px-4 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Claim Offer <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.aside>
      </div>

      {/* Packages Section */}
      <div className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${podkova.className} text-2xl md:text-4xl font-bold text-center mb-12`}
        >
          Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-md p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.highlight
                  ? "border-[#e91e63] ring-2 ring-[#e91e63]"
                  : "border-gray-100"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 right-3 bg-[#e91e63] text-white text-xs px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                {pkg.icon}
                <h3 className="text-xl font-semibold text-[#121212]">
                  {pkg.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-2">{pkg.tagline}</p>
              <p className="text-lg font-bold text-gray-800">
                {pkg.priceNaira}
              </p>
              <p className="text-sm text-gray-500">{pkg.priceIntl}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#e91e63]" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block text-center bg-[#7e57c2] text-white px-4 py-3 rounded-lg shadow hover:bg-purple-700 transition"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
