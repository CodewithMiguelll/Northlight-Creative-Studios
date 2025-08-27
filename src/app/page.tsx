"use client"
import { Quicksand, Prompt, Podkova, Pacifico } from "next/font/google";
import { FlipWords } from "@/components/ui/flip-words";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Font for headings.
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: "400",
});

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
const podkova = Podkova({
  variable: "--font-podkova",
  subsets: ["latin"],
  weight: "400",
});

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

const promptBold = Prompt({
  variable: "--font-prompt-bold",
  subsets: ["latin"],
  weight: "700",
});

const words = ["UI", "Product", "Website", "Vision"];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div className="flex flex-row justify-around items-center p-4">
          <div className="flex justify-center items-center md:items-start h-screen flex-col gap-6 p-6 text-[#121212]">
            <h2
              className={`${quicksandSemiBold.className} font-medium text-xl md:text-3xl`}
            >
              Let's build your next
              {/*To change the color, you can do so easily by adding TW classes directly to the FlipWords component */}
              <FlipWords
                className={`${podkovaBold.className} bg-[#f9f9f9] rounded text-[#121212] p-1 m-2.5 font-bold`}
                words={words}
              />
              at
            </h2>
            <h1 className={`${quicksandBold.className} text-3xl md:text-6xl`}>
              Northlight Creative
            </h1>
          </div>
          <div className="hidden md:flex justify-center items-center h-screen">
            <DotLottieReact
              src="https://lottie.host/f20eba1e-5aa2-464a-8c78-34c2d2d245ca/VBIdAfUkuI.lottie"
              autoplay
              loop
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section>
        <div className="flex flex-col md:flex-row justify-around items-center p-4">
          <div className=" md:flex order-2 md:order-1 justify-center items-center h-full w md:w-1/2 p-8"></div>{" "}
          <div className="flex order-1 md:order-2 justify-center items-center h-full md:w-1/2 p-8 text-[#121212]">
            <div className="max-w-lg">
              <h2
                className={`${podkovaBold.className} text-2xl md:text-4xl mb-4`}
              >
                Who We Are
              </h2>
              <p className={`${prompt.className} text-md md:text-lg mb-4`}>
                At Northlight Creative, we are a multidisciplinary freelancing
                agency dedicated to bringing your ideas to life. Our team of
                experts specializes in web development, design, and content
                creation, ensuring that every project we undertake is executed
                with precision and creativity.
              </p>
              <p className={`${prompt.className} text-md md:text-lg`}>
                Whether you're a startup looking to establish your online
                presence or an established business aiming to revamp your brand,
                we have the skills and experience to help you achieve your
                goals. Let's work together to create something extraordinary.
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
    </>
  );
}
