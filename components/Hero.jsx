"use client";

import { useState } from "react";

import Image from "next/image";
import Chara from "@/public/chara.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="px-10 relative flex h-screen w-full items-end justify-between bg-grid overflow-hidden">
      {/* Top pill banner */}
      <div className="absolute top-6 left-0 z-20 flex w-full items-center justify-center">
        <span className="h-12 w-full mx-10 px-6 flex justify-between items-center text-sm rounded-xl bg-white font-semibold shadow-xl geist-mono">
          {/* Logo and Occupation */}
          <div className="flex items-center gap-4">
            <figure className="size-8 flex justify-center items-center bg-black rounded-md text-white molex">
              <span>RW</span>
            </figure>
            <h1>FULL-STACK DEVELOPER</h1>
          </div>

          {/* Contact Me Button */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Contact Me
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg overflow-hidden z-30">
                <a
                  href="mailto:richiwirjaya@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </a>
                <a
                  href="http://wa.me/6287872866839"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  Phone
                </a>
                <a
                  href="https://www.linkedin.com/in/richmond-wijaya-89aa482ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/inimomon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </a>
              </div>
            )}
          </div>
        </span>
      </div>

      {/* Big name behind image */}
      <h1 className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center molex text-[10rem] leading-none text-black/90">
        Richmond Wijaya
      </h1>

      <h1 className="mb-6 geist-mono text-xs">inspired by matthisgarnier.</h1>

      {/* Character image */}
      <Image
        className="absolute left-1/2 -translate-x-1/2 z-10 h-auto w-[370px]"
        src={Chara}
        alt="Character image"
        width={370}
        height={400}
        priority
      />

      <div className="mb-6 px-4 text-xs font-semibold geist-mono py-2 bg-white rounded-md flex justify-center items-center">©2025</div>
    </section>
  );
};

export default Hero;