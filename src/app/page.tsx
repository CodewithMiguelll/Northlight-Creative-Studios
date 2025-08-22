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
      <div className="flex justify-center items-center md:items-start h-screen flex-col gap-4 p-8">
        <h2 className={`quicksand.className font-medium text-xl md:text-3xl`}>
          Welcome To
        </h2>
        <h1 className={`quicksand.className text-3xl md:text-6xl`}>Northlight Creative</h1>
      </div>
    </>
  );
}
