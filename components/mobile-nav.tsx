"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { KrafzenLogo } from "@/components/krafzen-logo"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:bg-white/10"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

          {/* Side Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-black border-l border-[#171717] shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#171717]">
              <KrafzenLogo className="w-32" />
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-white hover:bg-white/10"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                        currentPath === link.href
                          ? "text-white bg-white/10"
                          : "text-[#d9d9d9] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Book A Call Button */}
              <div className="mt-8 pt-6 border-t border-[#171717]">
                <Link href="/contact">
                  <Button
                    className="w-full bg-white text-black hover:bg-[#d9d9d9] rounded-full py-3 text-lg font-medium"
                    onClick={closeMenu}
                  >
                    Book A Call
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
