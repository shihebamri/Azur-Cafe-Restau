"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Home, Book, Store, Phone, Newspaper, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-light flex items-center gap-2">
          <Image
            src="https://i.postimg.cc/NFqvqrNX/azur.png"
            alt="Logo"
            width={60}
            height={60}
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </Link>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm md:static md:block md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-0">
            <li>
              <Link href="#" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-golden">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-golden">
                <Store className="h-4 w-4" />
                À Propos de Nous
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-golden">
                <Book className="h-4 w-4" />
                Menu
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-golden">
                <Phone className="h-4 w-4" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 hover:text-golden">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden md:inline">Panier (0)</span>
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

