"use client";
import {
  Briefcase,
  Code,
  Palette,
  FileText,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Check,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code className="w-6 h-6 text-[#7b8650]" />,
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
    icon: <Palette className="w-6 h-6 text-[#7b8650]" />,
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
    icon: <Briefcase className="w-6 h-6 text-[#7b8650]" />,
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
    icon: <FileText className="w-6 h-6 text-[#7b8650]" />,
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
    icon: <Zap className="w-8 h-8 text-[#7b8650]" />,
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
    icon: <TrendingUp className="w-8 h-8 text-[#7b8650]" />,
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
    icon: <Globe className="w-8 h-8 text-[#7b8650]" />,
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
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={`text-3xl md:text-5xl font-bold mb-4`}>Our Services</h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          At Northlight Creative Studios, we blend design and technology to
          create digital experiences that inspire, engage, and convert.
        </p>
      </div>

      {/* Layout with Services + Sticky Offers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Services Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sticky Offers */}
        <aside className="lg:sticky lg:top-20 h-fit bg-indigo-50 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold">Special Offers</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>✨ First 2 orders are FREE!</li>
            <li>
              ✨ Free month of maintenance and support for websites after launch
            </li>
            <li>✨ Bundle deals: Copy Audits + Mini Brand Guides</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Claim Offer 🚀
          </Link>
        </aside>
      </div>

      {/* Packages Section */}
      <div className="mt-20">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-10`}>
          Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl shadow-md p-6 border ${
                pkg.highlight
                  ? "border-[#7b8650] ring-2 ring-[#7b8650]"
                  : "border-gray-100"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 right-3 bg-[#7b8650] text-white text-xs px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                {pkg.icon}
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{pkg.tagline}</p>
              <p className="text-lg font-bold text-gray-800">
                {pkg.priceNaira}
              </p>
              <p className="text-sm text-gray-500">{pkg.priceIntl}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>
                      <Check className="w-4 h-4 text-[#7b8650]" />
                    </span>{" "}
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block text-center bg-[#7b8650] text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
