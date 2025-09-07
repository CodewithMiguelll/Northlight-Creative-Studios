import Link from "next/link";
import { IconPlanet } from "@tabler/icons-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});


export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className={`${pacifico.className} w-48 h-48 mb-2 flex items-center justify-center rounded-full`}>
        <span className="text-6xl md:text-9xl font-bold text-[#121212] mb-4">
          4
        </span>
        <span className="text-6xl md:text-9xl font-bold text-[#121212] mb-4 ">
          <IconPlanet size={98} stroke={1.5} />
        </span>
        <span className="text-6xl md:text-9xl font-bold text-[#121212] mb-4">
          4
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-[#121212]">
        Lost But Never Forgotten
      </h2>
      <p className="text-[#121212] mb-6 max-w-md">
        Like the Shepherd leaving the ninety-nine for the one, we’ll guide you
        back. Let’s go home.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#fffaf5] text-[#121212] rounded-lg shadow hover:bg-gray-200 transition"
      >
        Back to Home 🚀
      </Link>
    </main>
  );
}
