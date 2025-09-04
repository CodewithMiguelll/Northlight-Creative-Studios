"use client";
import { Quicksand, Prompt, Podkova } from "next/font/google";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import myImage from "/public/20250829_104413.jpg";
import absoluteMM from "/public/20250331_DC_News_AbsoluteMM3.avif";
import theMatrix from "/public/the-matrix-1999-poster.jpg";
import nextIcon from "/public/nextjs.png";
import cycling from "/public/luca-j-ptwR2dPj0po-unsplash.jpg";
import musicBG from "/public/andrey-ilkevich-yXi7dfyPOyo-unsplash.jpg";
import leonardoDavinci from "/public/Leonardo-da-Vinci-Italian-Renaissance-Florence-Engraving-1500.webp";

const quicksandBold = Quicksand({
  variable: "--font-quicksand-bold",
  subsets: ["latin"],
  weight: "700",
});

const podkovaBold = Podkova({
  variable: "--font-podkova",
  subsets: ["latin"],
  weight: "700",
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Column */}
          <div>
            <h1
              className={`${quicksandBold.className} text-2xl md:text-4xl mb-6`}
            >
              Meet The Brains Behind It All
            </h1>
            <p className={`${prompt.className} text-lg leading-relaxed mb-4`}>
              Hi, I’m Miguel 👋 — founder of{" "}
              <span className="font-semibold">Northlight Creative Studios</span>
              . What started as a passion for blending design and functionality
              has grown into a freelancing hub that helps brands stand out with
              clean, creative, and user-focused digital experiences.
            </p>
            <p className={`${prompt.className} text-lg leading-relaxed mb-4`}>
              When I’m not coding or designing, you’ll probably catch me cycling
              or deep in a comic. Lately, I’ve been fixated on{" "}
              <span className="italic">Absolute Martian Manhunter</span> — its
              use of color is so bold and striking. That inspiration has
              actually shaped one of my recent projects, where I’ve been
              experimenting with contrasts to bring the same kind of visual
              intensity into my work.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <img
              src={myImage.src}
              alt="Miguel - Founder of Northlight Creative Studios"
              width={500}
              height={500}
              className="h-auto rounded-3xl shadow-lg border-3 border-[#e9dac1]"
            />
          </div>
        </div>

        {/* Comic Inspiration Section */}
        <h2
          className={`${podkovaBold.className} text-3xl md:text-4xl mt-16 mb-4`}
        >
          What Inspires Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Comic Card */}

          <CardContainer>
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-full rounded-xl p-5 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">Lenardo DaVinci</span>
                <img
                  src={leonardoDavinci.src}
                  alt="A picture of Leonardo DaVinci"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                Leonardo da Vinci was more than an artist or inventor — he was a
                visionary who blurred the lines between creativity and
                engineering. His ability to see connections where others saw
                divisions reminds me that design and development aren’t separate
                worlds, but partners in innovation. At The Studio, I draw from that
                same spirit: to craft solutions that are both imaginative and
                precise, functional yet unforgettable.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-auto rounded-xl p-4 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">ReactJS & NextJS</span>
                <img
                  src={nextIcon.src}
                  alt="NextJS logo"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                React and Next.js represent the toolset of possibility. They
                remind me that elegant design is as much about structure as
                style. With their flexibility, I can build anything from
                minimalist portfolios to complex apps — always balancing
                functionality with a seamless user experience.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-auto rounded-xl p-4 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">
                  The Matrix Franchise (1999-2003)
                </span>
                <img
                  src={theMatrix.src}
                  alt="The Matrix (1999)"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                The Wachowskis built more than a movie — they built a world. The
                way The Matrix layers philosophy, aesthetics, and systems
                inspires me to think beyond “just code.” When I design and
                develop, I’m aiming for the same immersion — digital spaces that
                spark curiosity, feel intuitive, and maybe even make you
                question reality a little.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer>
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-full rounded-xl p-5 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">
                  Absolute Martian Manhunter
                </span>
                <img
                  src={absoluteMM.src}
                  alt="Absolute Martian Manhunter comic panel"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                <span className="font-semibold">
                  Absolute Martian Manhunter
                </span>{" "}
                taught me how bold color contrasts can guide the eye — a lesson
                I apply in UI design. The surreal colors and shifting moods in
                this comic are more than just panels on a page — they’re a
                masterclass in storytelling through design. The way the art
                pulls you into J’onn’s psyche inspires me to design with emotion
                at the forefront, making sure every project I ship doesn’t just
                look sleek, but feels alive.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer>
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-full rounded-xl p-5 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">Soundtracks</span>
                <img
                  src={musicBG.src}
                  alt="A pair of white headphones"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                From Assassin’s Creed to cinematic scores, soundtracks drive my
                creative process. They turn coding sessions into adventures and
                design sprints into storytelling. Music reminds me that great
                design, like a great score, should be immersive — guiding people
                through a journey they want to stay in
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-auto rounded-xl p-4 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">Cycling</span>
                <img
                  src={cycling.src}
                  alt="The Matrix (1999)"
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                Cycling is my moving meditation. Long rides clear my head, strip
                away noise, and let ideas bubble up naturally. Some of my
                sharpest design solutions and creative breakthroughs happen off
                the keyboard, on the road. It’s proof that inspiration isn’t
                always found at the desk.
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Skills & Credentials Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2
          className={`${podkovaBold.className} text-3xl md:text-4xl mb-6 text-center`}
        >
          Skills & Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Skills */}
          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-black border border-black/10">
            <h3 className="text-lg font-semibold mb-3">Development</h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>JavaScript (ES6+), React, Next.js</li>
              <li>TypeScript (learning)</li>
              <li>Python (basic)</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* UI / Design */}
          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-black border border-black/10">
            <h3 className="text-lg font-semibold mb-3">Design</h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Tailwind CSS & Shadcn UI</li>
              <li>Framer Motion Animations</li>
              <li>Figma / Canva</li>
              <li>Responsive Layouts</li>
            </ul>
          </div>

          {/* Certifications / Strengths */}
          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-black border border-black/10">
            <h3 className="text-lg font-semibold mb-3">Credentials</h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                FreeCodeCamp — Responsive Web Design:
                <br />
                <a
                  className="hover:underline hover:text-[#7b8650]"
                  href="https://www.freecodecamp.org/certification/miguel_theelite/responsive-web-design"
                >
                  View Cert. here
                </a>
              </li>
              <li>Strong Communication & Collaboration</li>
              <li>Problem-Solving & Creative Concepting</li>
            </ul>
          </div>
        </div>

        {/* Credentials Button */}
        <div className="mt-10 text-center">
          <a
            href="/chikaima-miguel-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            //download="chikaima-miguel-resume.pdf"
          >
            <button className="bg-[#7b8650af] hover:bg-[#7b8650] text-white px-6 py-3 rounded-xl shadow-md">
              View Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
