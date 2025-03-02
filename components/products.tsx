"use client";

import { FadeIn, FadeInStagger } from "./animations/fade-in";
import { HoverCard } from "./ui/hover-card";
import { motion } from "framer-motion";

const products = [
  {
    name: "Entrée Gourmande",
    price: "15,00 DT",
    image: "https://i.postimg.cc/bYLPjY5M/A-beautifully-plated-vegetarian-quiche-showcasing-a-golden-flaky-crust-filled-with-a-vibrant-crea.jpg",
  },
  {
    name: "Pasta Lux",
    price: "24,00 DT",
    image: "https://i.postimg.cc/rySwvLGR/A-plate-of-Pasta-Primavera-elegantly-presented-featuring-al-dente-pasta-tossed-with-a-medley-of-vib.jpg",
  },
  {
    name: "Café de Luxe",
    price: "34,00 DT",
    image: "https://i.postimg.cc/N0xRBPHQ/cappocino.jpg",
  },
  {
    name: "Panini Royale",
    price: "27,00 DT",
    image: "https://i.postimg.cc/x8VkmvH6/chicken-panini.webp",
  },
];

export function Products() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="mb-16 text-center font-playfair text-4xl font-light">
            DÉGUSTEZ L'EXCELLENCE
            <br />
            DANS CHAQUE PLAT
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-4">
            {products.map((product) => (
              <FadeIn key={product.name}>
                <HoverCard className="group text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full"
                    />
                  </div>
                  <h3 className="font-playfair text-xl">{product.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    Un délice à chaque bouchée.
                  </p>
                  <p className="mt-2 text-golden">{product.price}</p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
