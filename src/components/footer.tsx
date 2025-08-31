import Link from "next/link";

export const Footer = () => (
  <footer className="flex flex-col items-center justify-center p-6 border-t border-t-secondary-foreground">
    <nav className="flex space-x-4">
      <Link href="/about" className="text-sm text-secondary-foreground underline-offset-4 hover:underline">
        About
      </Link>
      <Link href="/projects" className="text-sm text-secondary-foreground underline-offset-4 hover:underline">
        Projects
      </Link>
      <Link href="/services" className="text-sm text-secondary-foreground underline-offset-4 hover:underline">
        Services
      </Link>
      <Link
        href="https://github.com/CodeWithMiguelll"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-secondary-foreground underline-offset-4 hover:underline"
      > 
        GitHub
      </Link>
      <Link
        href="https://www.instagram.com/_big.migz/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-secondary-foreground underline-offset-4 hover:underline"
      >
        Instagram
      </Link>
    </nav>
  </footer>
);
