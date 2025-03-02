"use client"

import { FadeIn, FadeInStagger } from "./animations/fade-in"
import { HoverCard } from "./ui/hover-card"
import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react"

export function ContactPage() {
  return (
    <section className="bg-[#111] py-24 relative">
      {/* Separator Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <img
          src="https://i.postimg.cc/8PfDFZSG/sushi.png"
          alt="Separator"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4">
        <FadeIn>
          <h3 className="mb-12 text-center text-xs uppercase tracking-[0.3em] text-neutral-400">Contactez-nous</h3>
          <h2 className="mb-16 text-center font-playfair text-4xl font-light">NOTRE BOUTIQUE</h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <HoverCard>
                <div className="cursor-pointer h-full">
                  <div className="mb-6 overflow-hidden rounded-lg h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6188.596162383012!2d10.601099174851958!3d35.86798424088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBoulevard%2014%20Janvier%2C%20%C3%A0%20c%C3%B4t%C3%A9%20de%20pharmacie%20Hachicha%2C%20Hammam%20Sousse%20Sousse%2C%20Tunisia!5e1!3m2!1sen!2stn!4v1740943187191!5m2!1sen!2stn"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
            <FadeIn>
              <HoverCard>
                <div className="cursor-pointer h-full bg-neutral-900 p-8 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-golden" size={24} />
                      <p className="text-neutral-400">à côté de pharmacie Hachicha</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-golden" size={24} />
                      <p className="text-neutral-400">+216 93 251 111</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-golden" size={24} />
                      <p className="text-neutral-400">contact@azurcaferestau.com</p>
                    </div>
                    <div className="pt-6">
                      <h3 className="font-playfair text-xl font-light mb-4">Suivez-nous</h3>
                      <div className="flex space-x-4">
                        <motion.a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Facebook className="text-golden" size={32} />
                        </motion.a>
                        <motion.a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Instagram className="text-golden" size={32} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

