"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, MapPin, Mail, Phone } from "lucide-react"
import { KrafzenLogo } from "@/components/krafzen-logo"
import Link from "next/link"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SocialIcons } from "@/components/social-icons"

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState<{
    title: string
    content: string
  } | null>(null)

  const industryContent = {
    realEstate: {
      title: "Real Estate\n& Construction",
      content: `We provide tailored design and drafting solutions for the real estate and construction industry,
        supporting developers, contractors, and architects with precise documentation and visualization. Our
        team delivers detailed floor plans, structural layouts, and 3D renders that bring projects to life
        before construction begins. By integrating BIM and CAD tools, we ensure seamless coordination
        between stakeholders. Our solutions help identify clashes, reduce errors, and optimize project
        timelines. Whether it's residential, commercial, or mixed-use developments, we adapt our expertise
        to each project's unique requirements. We also offer cost estimation and material optimization to
        control budgets. Sustainability is a priority, and our designs incorporate eco-friendly practices
        and energy-efficient solutions. From concept to completion, we provide ongoing support to keep
        construction projects on track. By working with us, developers and contractors gain reliable
        documentation that ensures faster approvals and smoother execution.`,
    },
    oilGas: {
      title: "Oil & Gas\nEngineering",
      content: `We support oil and gas companies with specialized engineering design, plant layouts, and drafting services. Our expertise covers process design, piping systems, instrumentation diagrams, and safety-critical documentation. We create highly detailed CAD drawings and 3D models that allow better visualization and planning of facilities. Our team ensures strict compliance with international codes and safety standards. We also integrate AI-driven solutions to optimize layouts, reduce risks, and improve cost control. Our experience extends across upstream, midstream, and downstream projects, offering comprehensive coverage. We collaborate with contractors and engineering firms to streamline workflows and avoid costly delays. Our plant simulations allow stakeholders to test processes virtually before execution. With a focus on reliability, efficiency, and compliance, we deliver engineering solutions that support complex oil and gas projects worldwide. Partnering with us means faster design cycles and safer operations.`,
    },
    civilInfrastructure: {
      title: "Civil &\nInfrastructure",
      content: `We provide design and drafting solutions for large-scale civil and infrastructure projects, ensuring precision and long-term durability. Our services cover roads, bridges, water systems, urban planning, and other infrastructure needs. Using advanced CAD and BIM tools, we deliver accurate drawings, construction documents, and 3D visualizations. This helps engineers and contractors coordinate effectively and reduce costly rework. Our expertise ensures compliance with regulatory standards and safety guidelines. We also integrate geospatial data and environmental considerations into our designs for sustainable development. From concept to execution, we assist in planning, modeling, and cost estimation. Our infrastructure solutions improve efficiency in design coordination between multiple engineering teams. With experience in public and private projects, we bring reliability and scalability to infrastructure development. By partnering with us, governments and contractors achieve faster approvals and smoother execution.`,
    },
    manufacturing: {
      title: "Manufacturing &\nIndustrial",
      content: `We offer specialized design and drafting services for manufacturing and industrial sectors, helping businesses streamline operations and reduce production costs. Our solutions include equipment layouts, assembly line design, plant optimization, and product modeling. We use CAD and BIM technologies to deliver detailed technical drawings that improve accuracy and efficiency. Our industrial design expertise ensures better space utilization and safer workflows. We also support factories with digital twins and 3D visualizations to test processes virtually. By applying AI-driven optimization, we help companies reduce waste and enhance productivity. Our documentation makes it easier to comply with regulatory and safety requirements. Whether it's heavy machinery, automotive, or electronics manufacturing, our services adapt to each industry's unique needs. We act as a reliable partner, enabling faster production cycles and better quality control. With us, businesses achieve innovation and efficiency in their manufacturing processes.`,
    },
    engineeringAgencies: {
      title: "Engineering &\nDesign Agencies",
      content: `We provide white-label and outsourcing solutions for engineering and design agencies, helping them expand their service offerings without additional overhead. Our team works behind the scenes to deliver CAD drafting, BIM modeling, 3D rendering, and design optimization under your brand name. This allows agencies to take on more projects while maintaining quality and consistency. We ensure confidentiality and align our work with your standards, so clients receive a seamless experience. Our flexible engagement models allow agencies to scale resources quickly based on demand. With AI-driven design optimization, we add value by delivering faster and smarter outputs. We also provide documentation and support for client presentations, proposals, and construction phases. By outsourcing to us, agencies save time and costs while improving efficiency. We act as an extension of your team, enabling you to grow and serve clients with confidence.`,
    },
    architecture: {
      title: "Architecture &\nInterior Design",
      content: `We deliver professional CAD drafting, BIM modeling, and 3D visualization services for architecture and interior design firms. Our expertise helps architects bring concepts to life with precise construction documents and photorealistic renders. We create detailed floor plans, elevations, sections, and interior layouts that enhance design communication. Our visualization services allow clients to experience spaces before construction, improving decision-making. We also provide parametric modeling and AI-driven design support to optimize layouts and material usage. Our documentation ensures smooth coordination with contractors and consultants during execution. Sustainability is a key focus, and we integrate green design practices and energy-efficient solutions into projects. Whether it's residential, commercial, or hospitality interiors, we adapt to each project's style and requirements. By partnering with us, architecture and design firms can deliver high-quality work faster while staying within budget. Our solutions empower creative teams to focus on innovation while we handle technical execution.`,
    },
  }

  const openModal = (industry: keyof typeof industryContent) => {
    setSelectedIndustry(industryContent[industry])
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="border-b border-[#171717] px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-40 md:w-48">
            <KrafzenLogo className="w-full h-auto" fill="currentColor" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#d9d9d9] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#d9d9d9] hover:text-white transition-colors">
              About
            </Link>
            <Link href="/industries" className="text-white font-medium">
              Industries
            </Link>
            <Link href="/services" className="text-[#d9d9d9] hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[#d9d9d9] hover:text-white transition-colors">
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
      </header>

      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Industries We Serve</h1>
          <p className="text-xl text-[#d9d9d9]">Industries</p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("realEstate")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Real Estate & Construction</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting real estate and construction with precise documentation and visualization solutions.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("oilGas")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Oil & Gas Engineering</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting oil & gas industry with precise engineering and design services.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("civilInfrastructure")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Civil & Infrastructure</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting civil and infrastructure projects with precise planning and design solutions.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("manufacturing")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Manufacturing & Industrial</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting manufacturing and industrial sectors with precise technical documentation.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("engineeringAgencies")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Engineering & Design Agencies</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting engineering and design agencies with precise drafting and technical services.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal("architecture")}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-white mb-3">Architecture & Interior Design</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Supporting architecture and interior design with precise visualization and planning services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {isModalOpen && selectedIndustry && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
          <div className="h-full max-h-[85vh] bg-black">
            <div className="flex items-center justify-between p-4 border-b border-[#171717]">
              <div className="w-32">
                <KrafzenLogo className="w-full h-auto" fill="currentColor" />
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white text-black p-2 rounded-full hover:bg-[#d9d9d9] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Industries</h1>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#d9d9d9]">
                  <span>Home</span>
                  <span>›</span>
                  <span>Industries</span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2 whitespace-pre-line">{selectedIndustry.title}</h2>
                  <div className="w-full h-px bg-white mb-6"></div>
                </div>

                <div className="text-white text-sm leading-relaxed space-y-4">
                  <p>{selectedIndustry.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-[#171717] px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 w-32">
                <KrafzenLogo className="w-full h-auto" fill="currentColor" />
              </div>
              <p className="text-[#d9d9d9] text-sm">
                Krafzen is an engineering and design outsourcing company that combines artificial intelligence with
                expert human teams to deliver precise, affordable, and fast project execution — from CAD drafting and
                BIM to oil & gas design and civil engineering.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#d9d9d9]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <div className="space-y-3 text-sm text-[#d9d9d9]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#d9d9d9] mt-0.5 flex-shrink-0" />
                  <div>
                    <p>5830 E 2nd St, Ste 7000 #26394,</p>
                    <p>Casper, Wyoming 82609 U.S.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#d9d9d9] mt-0.5 flex-shrink-0" />
                  <div>
                    <p>info@krafzen.com</p>
                    <p>khadija@krafzen.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#d9d9d9] flex-shrink-0" />
                  <p>+1 917 - 924 - 8393</p>
                </div>
              </div>
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
