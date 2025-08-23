import { Pacifico, Quicksand } from "next/font/google";
import { FlipWords } from "@/components/ui/flip-words";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: "400",
});

 const words = ["UI", "Product", "Website", "Vision"];
 

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center md:items-start h-screen flex-col gap-4 p-8">
        <h2 className={`quicksand.className font-medium text-xl md:text-3xl`}>
          Let's build your next
          {/*To change the color, you can do so easily by adding TW classes directly to the FlipWords component */}
          <FlipWords words={words} />
          at
        </h2>
        <h1 className={`quicksand.className text-3xl md:text-6xl`}>
          Northlight Creative
        </h1>
      </div>
    </>
  );
}
