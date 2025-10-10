"use client";
import { Quicksand, Prompt, Podkova } from "next/font/google";
import { FlipWords } from "@/components/ui/flip-words";
import HeroSectionOne from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar, Linkedin, Instagram, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import ListCard from "@/components/card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

{/*
  Made with love by Miguel Uwakwe ❤️ 
  If you're seeing this, it means you have access to the source code of my creative agency website.
  Please do not use any part of this code without my permission. 
  If you like what you see, consider hiring me for your next project!
  Reach me at: chikaimauwakwe@gmail.com
  Or Instagram: @_big.migz
  Jesus loves you and so do I!
*/}

// Font for headings.

const quicksandBold = Quicksand({
  variable: "--font-quicksand-bold",
  subsets: ["latin"],
  weight: "700",
});

const quicksandSemiBold = Quicksand({
  variable: "--font-quicksand-bold",
  subsets: ["latin"],
  weight: "500",
});

//Font for subheadings

const podkovaBold = Podkova({
  variable: "--font-podkova",
  subsets: ["latin"],
  weight: "700",
});

//Font for body text.
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "400",
});

const words = ["Idea", "Product", "Website", "Vision"];

const testimonials = [
  {
    quote:
      "During his six-month collaboration with our AI agency, Miguel consistently delivered high-quality graphics for our Instagram campaigns, colleague birthday posts, and onboarding banners. His designs were always on-brand, creative, and timely. We appreciated his reliability and fresh eye for detail.",
    name: "Enwono Edo",
    designation: "Chief Executive Officer at African AI Network",
    src: "/images/egide.jpg",
  },
  {
    quote:
      "I had the pleasure of collaborating with Miguel on a project, and I was blown away by his skills and work ethic. He's a true creative genius, and his passion for design and development shines through in every project he takes on. Plus, he's a joy to work with, always positive and communicative.",
    name: "Aaliyah Junaid",
    designation: "Fullstack/Blockchain Developer at Evento",
    src: "/images/Aaliyah-Junaid-CTO.jpg",
  },
  {
    quote:
      "I’ve worked with Miguel on countless design projects, and he never disappoints. Most recently, he created the poster, pamphlet, invitation, and VIP access card for a family event, and the results were stunning. His eye for detail and creativity make him an invaluable designer to work with.",
    name: "Chika Uwakwe",
    designation: "Sole Proprietor at Irresistible Stores",
    src: "/images/chika-uwakwe.jpeg",
  },
  {
    quote:
      "I had the pleasure of working with Miguel at African AI Network, and I can confidently say he is an exceptional graphic designer. He is hardworking, highly creative, and consistently delivers high-quality designs that perfectly capture the message and vision of every project. His professionalism, attention to detail, and ability to meet deadlines make him a valuable asset to any team. I strongly recommend him to any employer or client looking for top-notch design work.",
    name: "Ihionkhan Shalom",
    designation: "Product/Project Manager at Mintyn",
    src: "/images/shalom-pm-cropped.jpeg",
  },
];

export default function Home() {
  return (
    <div className="px-2.5">
      
      <HeroSectionOne />
      {/* ABOUT SECTION */}
      <section className="mt-28">
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/images/uk-black-tech-dfmsZyFVi_I-unsplash.jpg"
              alt="Freelancer working on a project."
              className="rounded-2xl shadow-xl object-cover w-[90%] md:w-[80%] max-w-[500px]"
            />
          </motion.div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left text-[#121212]">
            <h2
              className={`${podkovaBold.className} text-3xl md:text-5xl mb-6`}
            >
              Who We Are
            </h2>
            <p
              className={`${prompt.className} text-base md:text-lg mb-5 leading-relaxed`}
            >
              Northlight Creative Studios is a multidisciplinary agency built on
              creativity, clarity, and craft. Founded by Chikaima Miguel Uwakwe,
              we blend design and technology to create digital experiences that
              shine — from sleek, responsive websites to thoughtful product
              interfaces.
            </p>
            <p
              className={`${prompt.className} text-base md:text-lg leading-relaxed`}
            >
              We believe great design is more than visuals — it’s strategy,
              emotion, and storytelling in motion. Every project we take on is
              guided by precision, purpose, and a bold confidence that
              challenges the ordinary. At Northlight, our mission is simple: to
              help brands and creators express their identity through design
              that connects and endures.
            </p>

            <div className="flex justify-center md:justify-start mt-8">
              <Link href="/about">
                <button className="bg-[#7e57c2] flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 hover:translate-x-0.5 text-[#f5f5f5] hover:bg-purple-700">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </Link>
=======
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-4">
          <div className="flex justify-center items-center md:w-1/2 text-center text-[#121212]">
            <div className="w-full">
              <h2
                className={`${podkovaBold.className} text-2xl md:text-4xl mb-4`}
              >
                Who We Are
              </h2>
              <p className={`${prompt.className} text-md md:text-lg mb-4`}>
                At The Studio, we are a multidisciplinary freelancing agency
                dedicated to bringing your ideas to life. Our team of experts
                specializes in web development, design, and content creation,
                ensuring that every project we undertake is executed with
                precision and creativity.
              </p>
              <p className={`${prompt.className} text-md md:text-lg`}>
                Whether you&apos;re a startup looking to establish your online
                presence or an established business aiming to revamp your brand,
                we have the skills and experience to help you achieve your
                goals. Let&apos;s work together to create something
                extraordinary.
              </p>
              <span className="flex items-center gap-2 mt-5 justify-center">
                <Link href={"/about"}>
                  <Button className="bg-[#7b8650af] flex items-center gap-2 p-1 text-[#121212] hover:bg-[#7b8650]">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </span>
>>>>>>> parent of 389f461 (fear(page): update homepage layout with new color scgeme.)
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION*/}
      <section className="py-20">
        <h2
          className={`${podkovaBold.className} text-2xl md:text-4xl mb-8 text-[#121212] text-center`}
        >
          Why Choose Northlight Creative Studios?
        </h2>

        <div className="grid  gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4">
          {[
            {
              title: "Web Development",
              details: [
                "Responsive website design",
                "Frontend engineering (React, Next.js)",
                "Backend integration",
                "Performance optimization",
              ],
            },
            {
              title: "Graphics Design",
              details: [
                "Logo & brand identity",
                "Social media graphics",
                "Custom illustrations",
                "Marketing assets",
              ],
            },
            {
              title: "Product Design",
              details: [
                "UI/UX design",
                "Wireframes & prototypes",
                "Interaction design",
                "Design systems",
              ],
            },
          ].map((feature, index) => (
            <ListCard
              key={index}
              title={feature.title}
              details={feature.details}
            />
          ))}
        </div>
      </section>

      {/*REVIEWS SECTION */}
      <section className="py-20">
        <h2
          className={`${podkovaBold.className} text-2xl md:text-5xl mb-8 text-[#121212] text-center`}
        >
          What Our Clients Say
        </h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-lg text-[#121212] p-1 shadow-md mb-16">
          <p>
            &quot;At Northlight Creative Studios, we pride ourselves with
            delivering exceptional results for our clients. We believe in going
            the extra mile, daring to be different and pushing the boundaries of
            creativity. But of course, don&apos;t take my word for it.&quot;
          </p>
          <cite className="text-sm text-[#121212]">
            Chikaima Miguel Uwakwe — Creative Director
          </cite>
        </blockquote>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-[#fffaf5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`${podkovaBold.className} text-3xl md:text-5xl mb-4 text-[#121212]`}
          >
            Don&apos;t Stay Wondering — Let&apos;s Talk!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-[#555] mb-10 max-w-2xl mx-auto"
          >
            Whether it’s a fresh idea, a project ready to kick off, or just a
            creative chat — we’d love to hear from you.
          </motion.p>

          {/* Contact Methods */}
<<<<<<< HEAD
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {[
              {
                title: "Email",
                icon: <Mail size={16} />,
                link: "mailto:hello@madebynorthlight.com.ng?subject=Let’s Work Together&body=Hi NC Studios team, I’d like to get in touch about...",
                label: "Email Us",
              },
              {
                title: "Book a Call",
                icon: <Calendar size={16} />,
                link: "https://cal.com/chikaima-uwakwe-004",
                label: "Schedule a Call",
              },
              {
                title: "Follow",
                icons: [
                  {
                    href: "https://www.linkedin.com/in/chikaima-uwakwe/",
                    icon: <Linkedin size={20} />,
                  },
                  {
                    href: "https://instagram.com/_big.migz",
                    icon: <Instagram size={20} />,
                  },
                  {
                    href: "https://github.com/CodeWithMiguelll",
                    icon: <Github size={20} />,
                  },
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-6 bg-white rounded-xl shadow-md"
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-[#121212] mb-2">Email</h3>
              <a
                href="mailto:hello@madebynorthlight.com.ng?subject=Let’s Work Together&body=Hi NC Studios team, I’d like to get in touch about..."
                className="text-[#7b8650] hover:underline flex items-center justify-center gap-2"
>>>>>>> parent of 389f461 (fear(page): update homepage layout with new color scgeme.)
              >
                <h3 className="font-semibold text-[#121212] mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.title === "Book a Call" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[#121212] hover:underline flex items-center justify-center gap-2"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ) : (
                  <div className="flex justify-center gap-4 text-2xl text-[#e91e62]">
                    {item.icons?.map((iconItem, idx) => (
                      <motion.a
                        key={idx}
                        href={iconItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {iconItem.icon}
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
=======
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-[#121212] mb-2">Book a Call</h3>
              <a
                href="https://cal.com/chikaima-uwakwe-004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7b8650] hover:underline flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Schedule a Call
              </a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-[#121212] mb-2">Follow</h3>
              <div className="flex justify-center gap-4 text-2xl text-[#7b8650]">
                <a
                  href="https://www.linkedin.com/in/chikaima-uwakwe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/_big.migz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://github.com/CodeWithMiguelll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
>>>>>>> parent of 389f461 (fear(page): update homepage layout with new color scgeme.)
            <Link
              href="/contact"
              className="transition-all bg-[#121212] hover:bg-[#e9dac1] hover:text-[#121212] text-[#fffaf5] px-6 py-3 rounded-xl shadow-md"
            >
              Go to Contact Page
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
