"use client";
import { Quicksand, Prompt, Podkova } from "next/font/google";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import myImage from "/public/20250829_104413.jpg";
import absoluteMM from "/public/20250331_DC_News_AbsoluteMM3.avif";
import theMatrix from "/public/the-matrix-1999-poster.jpg";

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
              className={`${quicksandBold.className} text-3xl md:text-4xl mb-6`}
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
          className={`${podkovaBold.className} text-3xl md:text-4xl mt-16 mb-8`}
        >
          What Inspires Me
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Comic Card */}
          <CardContainer>
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-full rounded-xl p-5 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <span className="font-semibold">Absolute Martian Manhunter</span>
                <img
                  src={absoluteMM.src}
                  alt="Absolute Martian Manhunter"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
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
                I apply in UI design.
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card border border-black/10 w-full h-auto rounded-xl p-4 shadow-md dark:bg-black">
              <CardItem translateZ="50">
                <img
                  src={theMatrix.src}
                  alt="The Matrix (1999)"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                This issue showed me how pacing and flow in panels can influence
                the way I build user journeys.
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
