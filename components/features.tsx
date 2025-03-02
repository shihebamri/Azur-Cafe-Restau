"use client";

import { FadeIn } from "./animations/fade-in";

export function Features() {
  return (
    <section className="bg-[#111] py-24">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-3">
        <FadeIn>
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">Savoir-faire</h3>
            <h2 className="font-playfair text-3xl font-light">L'ART DE LA <br />GASTRONOMIE</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Chez Azur Cafe Restaurant, chaque plat est une expression de créativité et de passion. Découvrez des saveurs uniques, conçues pour émerveiller vos papilles.
            </p>
            <button className="mt-6 border border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black">
              Découvrir
            </button>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://i.postimg.cc/6qpnKzM2/SHRIMPS.png"
                alt="Plat raffiné"
                className="max-w-[300px] rounded-lg"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">Excellence</h3>
            <h2 className="font-playfair text-3xl font-light">UNE SIGNATURE<br /> CULINAIRE</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Nous sélectionnons les meilleurs ingrédients pour créer des plats d'exception. Chaque bouchée est une expérience inoubliable, orchestrée par nos chefs talentueux.
            </p>
            <button className="mt-6 border border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black">
              Explorer le menu
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
