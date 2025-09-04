"use client";

import Image from "next/image";

import Gallery1 from "@/public/gallery/gallery1.jpeg";
import Gallery2 from "@/public/gallery/gallery2.jpeg";
import Gallery3 from "@/public/gallery/gallery3.jpeg";
import Gallery4 from "@/public/gallery/gallery4.jpeg";
import Gallery5 from "@/public/gallery/gallery5.jpeg";
import Gallery6 from "@/public/gallery/gallery6.jpeg";

const IMAGES = [Gallery4, Gallery1, Gallery3, Gallery5, Gallery2, Gallery6];

const Gallery = () => {
  return (
    <div className="mt-40">
      <h1 className="text-5xl text-white text-center">Richmond&apos;s Gallery</h1>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="columns-3 gap-4">
          {IMAGES.map((src, i) => (
            <figure
              key={i}
              className="mb-4 overflow-hidden rounded-xl bg-white/5"
              style={{ breakInside: "avoid" }}
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                placeholder="blur"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;