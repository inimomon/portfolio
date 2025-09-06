"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const BottomNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.95;
      setVisible(window.scrollY >= threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-50 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <nav className="mb-4 flex justify-center">
        <div className="h-12 lg:h-10 w-72 lg:w-96 px-4 flex rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md shadow-lg">
          <ul className="h-full w-full flex items-center justify-between">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 text-[0.5rem] lg:text-xs font-medium text-white hover:text-white/90">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default BottomNav;