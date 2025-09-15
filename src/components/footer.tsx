import Link from "next/link";
import { Github, Instagram, Info, FolderKanban, Briefcase, Linkedin } from "lucide-react";
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const Footer = () => (
  <footer className="w-full border-t py-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {/* Branding */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <h2 className={`${pacifico.className} text-2xl`}>
          Northlight Creative Studios
        </h2>
        <p className="text-sm text-[#1212128e]">
          Designing, coding, and telling stories that stand out.
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col items-center space-y-3 text-sm">
        <Link
          href="/about"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Info size={16} /> About
        </Link>
        <Link
          href="/projects"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <FolderKanban size={16} /> Projects
        </Link>
        <Link
          href="/services"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Briefcase size={16} /> Services
        </Link>
      </nav>

      {/* Socials */}
      <div className="flex flex-col items-center md:items-end space-y-3">
        <a
          href="https://github.com/CodeWithMiguelll"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Github size={16} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/chikaima-uwakwe/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://www.instagram.com/_big.migz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Instagram size={16} /> Instagram
        </a>
      </div>
    </div>

    {/* Bottom note */}
    <div className="mt-10 text-center text-xs text-[#1212128e]">
      © {new Date().getFullYear()} Northlight Creative Studios. All rights
      reserved.
    </div>
  </footer>
);
