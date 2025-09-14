import Image from "next/image";
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
    image: "/coffeely-logo.png",
    link: "https://coffeely.vercel.app",
  },

  {
    title: "Irressentials",
    description:
      "Built a stylish online store blending multiple product categories into one platform, with a clean layout that makes browsing wines, shoes, and perfumes effortless and engaging.",
    image: "/Irressentials.png",
    link: "https://irressentials.vercel.app",
  },
  {
    title: "Patricia Essentials Logo Suite",
    description:
      "Designed a sleek and functional logo suite for Patricia Essentials, focusing on brand identity and visual appeal.",
    image: "/patricia-essentials.png",
    link: "https://www.canva.com/design/DAGJbq3tjWI/fVqwE7Lx_omyLgnGOISSyQ/view?utm_content=DAGJbq3tjWI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d0f20707a",
  },

  {
    title: "Cariño Logo Suite & Branding",
    description:
      "Created a warm and inviting logo suite for Cariño, including mockups to demonstrate its application across various mediums.",
    image: "/carino-logo.png",
    link: "https://www.canva.com/design/DAGJRELQQtU/kQy34_gWYRSSpNW29Y4P5g/view?utm_content=DAGJRELQQtU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0ca49221e",
  },
  {
    title: "African AI Network Branding",
    description:
      "Part of a social media branding campaign — designed a series of posters, onboarding banners, and birthday graphics to give the brand a consistent and engaging digital identity.",
    image: "/aan-poster.png",
    link: "https://www.canva.com/design/DAGeQ0ROiPE/GGF8tL0j84cabldhj1X9Ag/view?utm_content=DAGeQ0ROiPE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h98f5d6aabe",
  },
  {
    title: "Memorial Event Branding",
    description:
      "Part of a complete design package: poster, pamphlet, invitation, and VIP Access Card.",
    image: "/gmama-poster.png",
    link: "https://www.canva.com/design/DAGtbQ7HOuE/aIYJUlWfrnX1vDt0Mw7QkA/view?utm_content=DAGtbQ7HOuE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4de9fa66f7",
  },
  {
    title: "Kay's Kitchen Logo Suite & Branding",
    description:
      "Designed a modern, versatile logo for Kay's Kitchen, complete with mockups to showcase its real-world use.",
    image: "/KK-logo.png",
    link: "https://www.canva.com/design/DAGgxoe2WtI/b4UqeTCZNlFh1iy-5ClO5g/view?utm_content=DAGgxoe2WtI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he2d3123f19",
  },

  {
    title: "Coffeely",
    description:
      "Designed a full branding package for the Coffeely website, including logo, favicon, and variations that capture the warmth and richness of coffee culture.",
    image: "/Sub-Logo.png",
    link: "https://www.canva.com/design/DAGGV4J5Xsg/nmXQwbo_mrChzYVhTFRW5A/view?utm_content=DAGGV4J5Xsg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h568606db72",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <h1
        className={`${quicksandBold.className} text-3xl md:text-5xl font-bold mb-8 text-center`}
      >
        Welcome To The Gallery!
      </h1>

      <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8 text-center">
        A showcase of ideas turned into visuals—crafted with purpose, polished
        with style.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 hover:z-10"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2
                className={`${promptBold.className} text-xl font-semibold mb-2`}
              >
                {project.title}
              </h2>
              <p
                className={`${prompt.className} text-sm text-neutral-600 dark:text-neutral-300 mb-4`}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
