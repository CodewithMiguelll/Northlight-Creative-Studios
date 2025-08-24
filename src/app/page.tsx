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
        <div
          className="hidden md:flex justify-center items-center h-screen"
        >
          <DotLottieReact
            src="https://lottie.host/f20eba1e-5aa2-464a-8c78-34c2d2d245ca/VBIdAfUkuI.lottie"
            autoplay
            loop
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
    </>
  );
}
