"use client";

import { motion } from "framer-motion";
import { Parallax } from "./animations/parallax";
import { FadeIn } from "./animations/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Parallax offset={300} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://i.postimg.cc/W47Y9sX6/get-sig-8-Bhrz77o-Fa-F0tx-D4z-NEex-Q-expires-1740911890-uri-https-instagram-fgyn22-1-fna-fbcdn-net-v.jpg")`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </Parallax>

      <div className="relative flex min-h-screen items-center justify-center px-4 pt-20 text-center">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-sm uppercase tracking-[0.3em]">
              Une expérience gastronomique unique
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl font-light leading-tight md:text-7xl">
              L'ÉLÉGANCE DANS
              <br />
              CHAQUE BOUCHÉE
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-sm opacity-80">
              Découvrez une cuisine raffinée, préparée avec passion et servie dans un cadre exceptionnel. Chez Azur Cafe Restaurant, chaque repas est une œuvre d'art.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black"
            >
              Explorer le menu
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
