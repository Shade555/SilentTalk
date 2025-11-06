"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="text-red-50 font-description flex gap-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="capitalize font-medium hover:text-[var(--color-secondary)] transition-all"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
