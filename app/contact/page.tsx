"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"
import { KrafzenLogo } from "@/components/krafzen-logo"
import { MobileNav } from "@/components/mobile-nav"
import { SocialIcons } from "@/components/social-icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Load EmailJS script dynamically
      if (!window.emailjs) {
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        document.head.appendChild(script)

        await new Promise((resolve) => {
          script.onload = resolve
        })

        // Initialize EmailJS
        window.emailjs.init("YOUR_PUBLIC_KEY") // You'll need to replace this
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "@",
      }

      await window.emailjs.send(
        "YOUR_SERVICE_ID", // You'll need to replace this
        "YOUR_TEMPLATE_ID", // You'll need to replace this
        templateParams,
      )

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="border-b border-[#171717]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <KrafzenLogo className="w-40 md:w-48" />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#d9d9d9] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#d9d9d9] hover:text-white transition-colors">
                About
              </Link>
              <Link href="/industries" className="text-[#d9d9d9] hover:text-white transition-colors">
                Industries
              </Link>
              <Link href="/services" className="text-[#d9d9d9] hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white font-medium">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button className="hidden md:block bg-white text-black hover:bg-[#d9d9d9] rounded-full px-6">
                  Book A Call
                </Button>
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9854b5517274774cc2a8a360dbf54352f3df977f-PnAMIFS3les6vmnG4iZ5VXtuXk3eFk.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Contact</h1>
          <div className="flex items-center justify-center space-x-2 text-[#d9d9d9]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#171717] rounded-3xl p-8 md:p-12 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Form */}
              <div>
                <h2 className="text-4xl font-bold mb-4">Let's connect</h2>
                <p className="text-[#d9d9d9] mb-8 text-lg">
                  Reach out to us at Krafzen by sending us a message and get back to you as soon as we receive your
                  message.
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-[#d9d9d9] rounded-lg h-14"
                      required
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-[#d9d9d9] rounded-lg h-14"
                      required
                    />
                  </div>

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-[#d9d9d9] rounded-lg h-14"
                    required
                  />

                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-[#d9d9d9] rounded-lg h-14"
                  />

                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-[#d9d9d9] rounded-lg min-h-32 resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-[#d9d9d9] rounded-full h-14 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </div>

              {/* Right Side - Technical Graphics */}
              <div className="relative">
                <div className="bg-black rounded-2xl p-8 h-[600px] relative overflow-hidden flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7492e2d515c7c9d693652db14c5ff3290b6d57f-dgzvOZt93pjDDxUbv8tBJVQSnOqljp.png"
                    alt="Technical collaboration illustration with handshake and engineering diagrams"
                    className="w-full h-full object-cover rounded-lg"
                    style={{
                      filter: "grayscale(100%) contrast(1.2) brightness(0.9)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-[#171717] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <KrafzenLogo className="w-32 mb-6" />
              <p className="text-[#d9d9d9] leading-relaxed">
                Krafzen is an engineering and design outsourcing company that combines artificial intelligence with
                expert human teams to deliver precise, affordable, and fast project execution — from CAD drafting and
                BIM to oil & gas design and civil engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <Link href="/" className="block text-[#d9d9d9] hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-[#d9d9d9] hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/industries" className="block text-[#d9d9d9] hover:text-white transition-colors">
                  Industries
                </Link>
                <Link href="/services" className="block text-[#d9d9d9] hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="block text-[#d9d9d9] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#d9d9d9] mt-1 flex-shrink-0" />
                  <div className="text-[#d9d9d9]">
                    <p>5830 E 2nd St, Ste 7000 #26934,</p>
                    <p>Casper, Wyoming 82609 U.S.</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#d9d9d9] flex-shrink-0" />
                  <div className="text-[#d9d9d9]">
                    <p>info@krafzen.com</p>
                    <p>@</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#d9d9d9] flex-shrink-0" />
                  <p className="text-[#d9d9d9]">@</p>
                </div> */}
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

declare global {
  interface Window {
    emailjs: any
  }
}
