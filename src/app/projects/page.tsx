"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Quicksand, Prompt } from "next/font/google";

const quicksandBold = Quicksand({
  variable: "--font-quicksand-bold",
  subsets: ["latin"],
  weight: "700",
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "400",
});

const promptBold = Prompt({
  variable: "--font-prompt-bold",
  subsets: ["latin"],
  weight: "700",
});

const projects = [
  {
    title: "Coffeely",
    description:
      "Designed and developed a modern e-commerce site for a coffee brand, featuring smooth navigation, product showcases, and a warm aesthetic that highlights their beverages.",
    image: "/images/coffeely-logo.png",
    link: "https://coffeely.vercel.app",
  },

  {
    title: "Irressentials",
    description:
      "Built a stylish online store blending multiple product categories into one platform, with a clean layout that makes browsing wines, shoes, and perfumes effortless and engaging.",
    image: "/images/Irressentials.png",
    link: "https://irressentials.vercel.app",
  },

  {
    title: "Rise Of The Rejects Website",
    description:
      "Built with Next.js 15, TypeScript, and Framer Motion, this project extends my screenplay Rise of the Rejects beyond the page — into a cinematic, interactive world that fuses code, creativity, and conviction.",
    image: "/images/rotr-portfolio-logo.png",
    link: "https://riseoftherejects.vercel.app",
  },
  {
    title: "Patricia Essentials Logo Suite",
    description:
      "Designed a sleek and functional logo suite for Patricia Essentials, focusing on brand identity and visual appeal.",
    image: "/images/patricia-essentials.png",
    link: "https://www.canva.com/design/DAGJbq3tjWI/fVqwE7Lx_omyLgnGOISSyQ/view?utm_content=DAGJbq3tjWI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d0f20707a",
  },

  {
    title: "Cariño Logo Suite & Branding",
    description:
      "Created a warm and inviting logo suite for Cariño, including mockups to demonstrate its application across various mediums.",
    image: "/images/carino-logo.png",
    link: "https://www.canva.com/design/DAGJRELQQtU/kQy34_gWYRSSpNW29Y4P5g/view?utm_content=DAGJRELQQtU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0ca49221e",
  },
  {
    title: "African AI Network Branding",
    description:
      "Part of a social media branding campaign — designed a series of posters, onboarding banners, and birthday graphics to give the brand a consistent and engaging digital identity.",
    image: "/images/aan-poster.png",
    link: "https://www.canva.com/design/DAGeQ0ROiPE/GGF8tL0j84cabldhj1X9Ag/view?utm_content=DAGeQ0ROiPE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h98f5d6aabe",
  },
  {
    title: "Memorial Event Branding",
    description:
      "Part of a complete design package: poster, pamphlet, invitation, and VIP Access Card.",
    image: "/images/gmama-poster.png",
    link: "https://www.canva.com/design/DAGtbQ7HOuE/aIYJUlWfrnX1vDt0Mw7QkA/view?utm_content=DAGtbQ7HOuE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4de9fa66f7",
  },
  {
    title: "Kay's Kitchen Logo Suite & Branding",
    description:
      "Designed a modern, versatile logo for Kay's Kitchen, complete with mockups to showcase its real-world use.",
    image: "/images/KK-logo.png",
    link: "https://www.canva.com/design/DAGgxoe2WtI/b4UqeTCZNlFh1iy-5ClO5g/view?utm_content=DAGgxoe2WtI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he2d3123f19",
  },

  {
    title: "Coffeely",
    description:
      "Designed a full branding package for the Coffeely website, including logo, favicon, and variations that capture the warmth and richness of coffee culture.",
    image: "/images/Sub-Logo.png",
    link: "https://www.canva.com/design/DAGGV4J5Xsg/nmXQwbo_mrChzYVhTFRW5A/view?utm_content=DAGGV4J5Xsg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h568606db72",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fdfcff] to-[#f3eefb]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1
          className={`${quicksandBold.className} text-3xl md:text-5xl font-bold mb-4`}
        >
          Welcome To The Gallery!
        </h1>
        <div className="h-1 w-20 bg-[#7e57c2] mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          A showcase of ideas turned into visuals—crafted with purpose, polished
          with style.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-56 transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white">View Project</p>
              </div>

              {/* Text Content */}
              <div className="p-6 bg-white dark:bg-neutral-900">
                <h2
                  className={`${promptBold.className} text-xl font-semibold mb-2 text-[#121212] dark:text-white`}
                >
                  {project.title}
                </h2>
                <p
                  className={`${prompt.className} text-sm text-neutral-600 dark:text-neutral-300 mb-4`}
                >
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#7e57c2] group-hover:text-[#5e3fa8] transition-colors">
                  View Project
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;