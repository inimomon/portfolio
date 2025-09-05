"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { src: "/logo/c++.svg", alt: "C++" },
  { src: "/logo/css.svg", alt: "CSS" },
  { src: "/logo/html.svg", alt: "HTML" },
  { src: "/logo/javascript.svg", alt: "JavaScript" },
  { src: "/logo/mongodb.svg", alt: "MongoDB" },
  { src: "/logo/node.svg", alt: "Node.js" },
  { src: "/logo/python.svg", alt: "Python" },
  { src: "/logo/react.svg", alt: "React" },
  { src: "/logo/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/logo/typescript.svg", alt: "TypeScript" },
];

const Tech = () => {
  return (
    <div className="mt-40 -mx-4 lg:-mx-10" id="tech">
      <h1 className="text-3xl lg:text-5xl text-white text-center mb-12">Tech Stack</h1>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
        className="bg-[#1a1a1a] py-4"
      >
        {LOGOS.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="mx-8 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Tech;