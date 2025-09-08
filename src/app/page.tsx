"use client";
import { Quicksand, Prompt, Podkova } from "next/font/google";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import ListCard from "@/components/card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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

const words = ["UI", "Product", "Website", "Vision"];

const testimonials = [
  {
    quote:
      "During his six-month collaboration with our AI agency, Miguel consistently delivered high-quality graphics for our Instagram campaigns, colleague birthday posts, and onboarding banners. His designs were always on-brand, creative, and timely. We appreciated his reliability and fresh eye for detail.",
    name: "Enwono Edo",
    designation: "Chief Executive Officer at African AI Network",
    src: "/IMG-20250131-WA0000.jpg",
  },
  {
    quote:
      "I had the pleasure of collaborating with Miguel on a project, and I was blown away by his skills and work ethic. He&apos;s a true creative genius, and his passion for design and development shines through in every project he takes on. Plus, he&apos;s a joy to work with, always positive and communicative.",
    name: "Aaliyah Junaid",
    designation: "Fullstack/Blockchain Developer at Evento",
    src: "/Aaliyah-Junaid-CTO.jpg",
  },
  {
    quote:
      "I’ve worked with Miguel on countless design projects, and he never disappoints. Most recently, he created the poster, pamphlet, invitation, and VIP access card for a family event, and the results were stunning. His eye for detail and creativity make him an invaluable designer to work with.",
    name: "Chika Uwakwe",
    designation: "Sole Proprietor at Irresistible Stores",
    src: "/IMG_0379.jpeg",
  },
  {
    quote:
      "I had the pleasure of working with Miguel at African AI Network, and I can confidently say he is an exceptional graphic designer. He is hardworking, highly creative, and consistently delivers high-quality designs that perfectly capture the message and vision of every project. His professionalism, attention to detail, and ability to meet deadlines make him a valuable asset to any team. I strongly recommend him to any employer or client looking for top-notch design work.",
    name: "Ihionkhan Shalom",
    designation: "Product/Project Manager at Mintyn",
    src: "/shalom-pm-cropped.jpeg",
  },
];

export default function Home() {
  return (
    <div className="px-2.5">
      {/* HERO SECTION */}
      <section className="py-40">
        <div className="flex flex-col md:flex-row justify-around items-center p-4">
          <div className="flex justify-center items-center md:items-start flex-col gap-6 p-6 text-[#121212]">
            <h2
              className={`${quicksandSemiBold.className} font-medium text-xl md:text-3xl`}
            >
              Let&apos;s build your next
              {/*To change the color, you can do so easily by adding TW classes directly to the FlipWords component */}
              <FlipWords
                className={`${podkovaBold.className} bg-[#f9f9f9] rounded text-[#121212] p-1 m-2.5 font-bold`}
                words={words}
              />
              at
            </h2>
            <h1 className={`${quicksandBold.className} text-3xl md:text-6xl`}>
              Northlight Creative Studios
            </h1>
            <span className="flex items-center gap-4 mt-6">
              <Link href={"/projects"}>
                <Button className="transition-all hover:translate-x-1 bg-[#fffaf5] hover:bg-[#ffffff] text-[#121212] p-6">
                  View The Gallery
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

              <Link href={"/contact"}>
                <Button className="transition-all hover:translate-x-2 bg-[#7b8650af] hover:bg-[#7b8650] hover:text-[#fafafa] text-[#121212] p-6">
                  <Phone className="w-4 h-4 ml-1" />
                  Get In Touch
                </Button>
              </Link>
            </span>
          </div>
          <div className="md:flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/freepik__upload__71496.png"
              alt="Freelancer working on a project"
              className="rounded-lg shadow-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-4">
          <div className=" md:flex order-2 md:order-1 justify-center items-center md:w-1/2 p-8">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/3644996.jpg"
              alt="Freelancer working on a project."
              className="rounded-lg shadow-md "
              width={500}
              height={500}
            />
          </div>
          <div className="flex order-1 md:order-2 justify-center items-center md:w-1/2 p-8 text-[#121212]">
            <div className="max-w-lg">
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
                goals. Let&apos;s work together to create something extraordinary.
              </p>
              <span className="flex items-center gap-2 mt-5">
                <Link href={"/about"}>
                  <Button className="bg-[#7b8650af] flex items-center gap-2 p-1 text-[#121212] hover:bg-[#7b8650]">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </span>
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
          className={`${podkovaBold.className} text-2xl md:text-4xl mb-8 text-[#121212] text-center`}
        >
          What Our Clients Say
        </h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-lg text-[#121212] p-1 shadow-md mb-16">
          <p>
            &quot;At Northlight Creative Studios, we pride ourselves with delivering
            exceptional results for our clients. We believe in going the extra
            mile, daring to be different and pushing the boundaries of
            creativity. But of course, don&apos;t take my word for it.&quot;
          </p>
          <cite className="text-sm text-[#121212]">
            Chikaima Miguel Uwakwe — Creative Director
          </cite>
        </blockquote>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6">
        <h2
          className={`${podkovaBold.className} text-2xl md:text-4xl mb-6 text-[#121212] text-center`}
        >
          Don&apos;t Stay Wondering! Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 bg-[#fffaf5] p-6 rounded-lg shadow-md">
          <p className="text-lg text-[#121212] text-center mb-10">
            Have a project in mind? We&apos;d love to hear from you!
          </p>

          {/* Email and Contact Page Button row */}
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 mt-6">
            {/* Quick Email Button */}
            <a
              href="mailto:chikaimauwakwe@gmail.com?subject=Let’s Work Together&body=Hi NC Studios team, I’d like to get in touch about..."
              className="inline-block"
            >
              <button className="bg-[#7b8650af] hover:bg-[#7b8650] transition-all text-[#fffaf5] px-6 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400">
                Say Hello 👋
              </button>
            </a>

            {/* Full Contact Page Button */}
            <Link
              href="/contact"
              className="transition-all bg-[#121212] hover:bg-[#e9dac1] hover:text-[#121212] text-[#fffaf5] px-6 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Go to Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
