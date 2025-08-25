"use client"
import { Quicksand, Prompt, Podkova } from "next/font/google";
import { FlipWords } from "@/components/ui/flip-words";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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

const words = ["UI", "Product", "Website", "Vision"];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div className="flex flex-row justify-around items-center p-4">
          <div className="flex justify-center items-center md:items-start h-screen flex-col gap-4 p-8 text-white">
            <h2
              className={`${quicksand.className} font-medium text-xl md:text-3xl`}
            >
              Let's build your next
              {/*To change the color, you can do so easily by adding TW classes directly to the FlipWords component */}
              <FlipWords className="text-white font-bold" words={words} />
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
          {/* <div className="flex justify-center items-center h-full md:w-1/2 p-8">
      
          </div> */}
          <div className="flex justify-center items-center h-full md:w-1/2 p-8 text-white">
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
                we have the skills and experience to help you achieve your goals.
                Let's work together to create something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
