"use client"

import { FadeIn, FadeInStagger } from "./animations/fade-in"

export function Mission() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://i.postimg.cc/8PXB93VW/1.jpg"
                  alt="Portrait du chef"
                  className="col-span-1 row-span-1"
                />
                <img
                  src="https://i.postimg.cc/cLjhgz9Z/1-1.jpg"
                  alt="Chocolat chaud"
                  className="col-span-1 row-span-1"
                />
                <img
                  src="https://i.postimg.cc/fR3jNKwP/1-2.jpg"
                  alt="Boîte de chocolats"
                  className="col-span-2 row-span-1"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col justify-center">
                <span className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">Goût Original</span>
                <h2 className="font-playfair text-4xl font-light leading-tight">
                  NOTRE MISSION
                  <br />
                  EST DE CRÉER
                  <br />
                  AVEC PASSION
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <div className="mt-8">
                  <img src="https://i.postimg.cc/NFqvqrNX/azur.png" alt="Signature" className="h-12" />
                  <p className="mt-2 text-sm">Les createurs de Azur</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

