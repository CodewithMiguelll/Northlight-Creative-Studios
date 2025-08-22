import { Pacifico, Quicksand } from "next/font/google";

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

export default function Home() {
  return (
    <>
      <h1 className={`quicksand.className font-bold text-center`}>WELCOME TO NORTHLIGHT CREATIVE</h1>
    </>
  );
}
