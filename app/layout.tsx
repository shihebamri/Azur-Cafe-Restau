import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Azur Cafe-restau",
  description: "Made With ❤️",
  icons: {
    icon: "https://i.postimg.cc/NFqvqrNX/azur.png", // Replace with your actual favicon URL
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
