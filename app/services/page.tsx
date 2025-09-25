"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"
import { KrafzenLogo } from "@/components/krafzen-logo"
import Link from "next/link"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SocialIcons } from "@/components/social-icons"
import { MapPin, Mail, Phone } from "lucide-react"

// Service icons - matching the reference image exactly
const AutoCADIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" rx="2" />
    <path d="M12 16h24" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20h24" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24h24" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="8" height="6" fill="none" />
    <rect x="26" y="18" width="8" height="6" fill="none" />
    <path d="M16 28h16" strokeWidth="1" />
    <circle cx="18" cy="30" r="1" fill="currentColor" />
    <circle cx="30" cy="30" r="1" fill="currentColor" />
  </svg>
)

const RevitIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 32L24 16L40 32V40H8V32Z" />
    <path d="M16 40V28H32V40" />
    <rect x="20" y="24" width="8" height="16" fill="none" />
    <path d="M20 30H28" strokeWidth="0.5" />
    <path d="M20 34H28" strokeWidth="0.5" />
    <path d="M24 16L24 8" strokeDasharray="2,2" />
    <circle cx="24" cy="8" r="1.5" fill="currentColor" />
    <path d="M12 20L16 16L12 12" fill="none" strokeWidth="1" />
    <path d="M36 20L32 16L36 12" fill="none" strokeWidth="1" />
  </svg>
)

const MEPIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 20H16L20 16H28L32 20H40" strokeWidth="2" />
    <path d="M8 28H16L20 32H28L32 28H40" strokeWidth="2" />
    <circle cx="16" cy="20" r="2" fill="none" />
    <circle cx="32" cy="20" r="2" fill="none" />
    <circle cx="16" cy="28" r="2" fill="none" />
    <circle cx="32" cy="28" r="2" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <path d="M12 12L36 12" strokeWidth="1" strokeDasharray="3,2" />
    <path d="M12 36L36 36" strokeWidth="1" strokeDasharray="3,2" />
    <rect x="18" y="10" width="3" height="3" fill="currentColor" />
    <rect x="27" y="10" width="3" height="3" fill="currentColor" />
  </svg>
)

const BIMIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 32L24 16L40 32V40H8V32Z" />
    <path d="M16 40V28H32V40" />
    <path d="M24 16L24 8" strokeDasharray="2,2" />
    <path d="M8 32L4 28" strokeDasharray="2,2" />
    <path d="M40 32L44 28" strokeDasharray="2,2" />
    <circle cx="24" cy="8" r="1.5" fill="currentColor" />
    <circle cx="4" cy="28" r="1.5" fill="currentColor" />
    <circle cx="44" cy="28" r="1.5" fill="currentColor" />
    <rect x="20" y="24" width="8" height="16" fill="none" />
    <path d="M20 30H28" strokeWidth="0.5" />
    <path d="M20 34H28" strokeWidth="0.5" />
    <path d="M12 20L16 16L12 12" fill="none" strokeWidth="1" />
    <path d="M36 20L32 16L36 12" fill="none" strokeWidth="1" />
  </svg>
)

const CivilIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 40H44" strokeWidth="3" />
    <rect x="8" y="36" width="32" height="4" fill="currentColor" opacity="0.3" />
    <rect x="12" y="20" width="3" height="16" fill="none" />
    <rect x="22.5" y="20" width="3" height="16" fill="none" />
    <rect x="33" y="20" width="3" height="16" fill="none" />
    <path d="M10 20H36" strokeWidth="2" />
    <path d="M10 28H36" strokeWidth="1" />
    <circle cx="13.5" cy="20" r="1" fill="currentColor" />
    <circle cx="24" cy="20" r="1" fill="currentColor" />
    <circle cx="34.5" cy="20" r="1" fill="currentColor" />
    <path d="M18 12L18 18" strokeWidth="1" strokeDasharray="1,1" />
    <path d="M30 12L30 18" strokeWidth="1" strokeDasharray="1,1" />
    <path d="M16 12L20 12" strokeWidth="1" />
    <path d="M28 12L32 12" strokeWidth="1" />
  </svg>
)

const DraftingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <rect x="12" y="16" width="12" height="8" fill="none" />
    <rect x="28" y="16" width="8" height="8" fill="none" />
    <circle cx="30" cy="28" r="3" fill="none" />
    <path d="M8 8L40 8" strokeWidth="0.5" />
    <path d="M8 6L8 10" strokeWidth="0.5" />
    <path d="M40 6L40 10" strokeWidth="0.5" />
    <path d="M44 12L44 36" strokeWidth="0.5" />
    <path d="M42 12L46 12" strokeWidth="0.5" />
    <path d="M42 36L46 36" strokeWidth="0.5" />
    <path d="M14 20L16 18" strokeWidth="0.5" />
    <path d="M30 20L32 18" strokeWidth="0.5" />
    <path d="M16 12L16 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
    <path d="M24 12L24 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
    <path d="M32 12L32 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
  </svg>
)

const ModelingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 16L24 8L36 16V32L24 40L12 32V16Z" />
    <path d="M12 16L24 24L36 16" />
    <path d="M24 24V40" />
    <path d="M12 16L24 24L36 16M24 24V40" />
    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    <circle cx="30" cy="20" r="1.5" fill="currentColor" />
    <path d="M16 28H20" strokeWidth="1" />
    <path d="M28 28H32" strokeWidth="1" />
  </svg>
)

const BIMModelingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <path d="M8 40H40" strokeWidth="2" />
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

const RenderingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <path d="M8 40H40" strokeWidth="2" />
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

const ProductDesignIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <path d="M8 40H40" strokeWidth="2" />
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

const PipingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 20H16L20 16H28L32 20H40" strokeWidth="2" />
    <path d="M8 28H16L20 32H28L32 28H40" strokeWidth="2" />
    <circle cx="16" cy="20" r="2" fill="none" />
    <circle cx="32" cy="20" r="2" fill="none" />
    <circle cx="16" cy="28" r="2" fill="none" />
    <circle cx="32" cy="28" r="2" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <path d="M12 12L36 12" strokeWidth="1" strokeDasharray="3,2" />
    <path d="M12 36L36 36" strokeWidth="1" strokeDasharray="3,2" />
    <rect x="18" y="10" width="3" height="3" fill="currentColor" />
    <rect x="27" y="10" width="3" height="3" fill="currentColor" />
  </svg>
)

const OilGasIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <path d="M8 40H40" strokeWidth="2" />
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

const AIDesignIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <path d="M24 8v4" />
    <path d="M24 36v4" />
    <path d="M8 24h4" />
    <path d="M36 24h4" />
    <path d="M14.1 14.1l2.8 2.8" />
    <path d="M31.1 31.1l2.8 2.8" />
    <path d="M14.1 33.9l2.8-2.8" />
    <path d="M31.1 16.9l2.8-2.8" />
  </svg>
)

const WhiteLabelIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="32" height="24" />
    <path d="M8 40H40" strokeWidth="2" />
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

// Process icons - matching the reference image exactly
const LightbulbIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 8c-6.6 0-12 5.4-12 12 0 4.4 2.7 8.2 6 10.2V36h12v-5.8c3.3-2 6-5.8 6-10.2 0-6.6-5.4-12-12-12z" />
    <path d="M18 36h12" />
    <path d="M20 40h8" />
    <path d="M22 44h4" />
    <path d="M19 18h10" strokeWidth="1" />
    <path d="M20 22h8" strokeWidth="1" />
    <path d="M21 26h6" strokeWidth="1" />
    <path d="M22 30h4" strokeWidth="1" />
  </svg>
)

const ChainIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 12h-6c-3.3 0-6 2.7-6 6s2.7 6 6 6h6" />
    <path d="M30 12h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6" />
    <path d="M16 18h16" />
    <path d="M18 36h-6c-3.3 0-6-2.7-6-6s2.7-6 6-6h6" />
    <path d="M30 36h6c3.3 0 6-2.7 6-6s-2.7-6-6-6h-6" />
    <path d="M16 30h16" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    <circle cx="36" cy="18" r="1.5" fill="currentColor" />
    <circle cx="12" cy="30" r="1.5" fill="currentColor" />
    <circle cx="36" cy="30" r="1.5" fill="currentColor" />
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 4c4 0 8 2 10 6l2 4v8l-4 4h-16l-4-4v-8l2-4c2-4 6-6 10-6z" />
    <path d="M20 26v8l4 6 4-6v-8" />
    <circle cx="24" cy="14" r="2" />
    <path d="M20 18h8" strokeWidth="1" />
    <path d="M21 22h6" strokeWidth="1" />
    <path d="M16 20l-4 4v4l4-2z" />
    <path d="M32 20l4 4v4l-4-2z" />
    <path d="M20 34l2 6 2-2 2 6 2-6" strokeWidth="1.5" />
    <path d="M22 38l1 4 1-2 1 4" strokeWidth="1" />
  </svg>
)

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    title: string
    content: string
  } | null>(null)

  const handleServiceClick = (title: string, content: string) => {
    setSelectedService({ title, content })
    setIsModalOpen(true)
  }

  const serviceContent = {
    "2D & 3D AutoCAD Drafting":
      "Our 2D and 3D AutoCAD drafting services are designed to bring absolute precision to every project we undertake. We develop detailed drawings and models that adhere strictly to industry standards, ensuring seamless integration into construction and manufacturing processes. Our drafting solutions cover everything from simple layouts to complex technical schematics, making them suitable for a wide range of applications across industries. We focus on accuracy and clarity to eliminate guesswork, minimize errors, and speed up approvals. By providing digital designs that are both detailed and easy to interpret, we help teams collaborate more effectively and reduce costly delays. Whether you need architectural plans, machine part schematics, or construction documentation, our AutoCAD expertise ensures a flawless outcome. Clients benefit from faster turnaround times, consistent quality, and designs tailored to exact specifications. Every project we deliver is carefully checked to ensure compliance and reliability. With us, drafting is not just about drawings—it's about creating a solid foundation for project success.",

    "Revit Architecture & Structure":
      "We deliver advanced Revit architecture and structure design services that revolutionize the way projects are planned and executed. By leveraging Building Information Modeling (BIM), we create smart digital models that capture every detail of your project from concept to construction. Our Revit workflows enhance collaboration between architects, engineers, and contractors, reducing the chances of design conflicts. From creating conceptual layouts to producing fully detailed structural documentation, we ensure every step of the process is precise and efficient. Revit allows us to anticipate challenges before they occur, saving valuable time and money during project execution. Our team ensures that every model reflects real-world accuracy, enabling stakeholders to visualize and refine designs before construction begins. Structural integrity, safety, and compliance with international standards are at the heart of our services. We combine engineering expertise with modern technology to provide scalable solutions that adapt to projects of any size. With us, Revit becomes a powerful tool to build smarter, faster, and better.",

    "MEP Design (Mechanical, Electrical & Plumbing)":
      "Our MEP design services are dedicated to creating seamless, efficient, and sustainable building systems. We design mechanical, electrical, and plumbing layouts that optimize performance, reduce costs, and ensure regulatory compliance. Our approach focuses on delivering integrated solutions that eliminate clashes and provide harmony across all building services. By using advanced design tools and simulations, we model real-world conditions to ensure our systems are practical and reliable. From HVAC systems to electrical wiring and plumbing networks, we cover every aspect of building services with precision. Energy efficiency and sustainability are central to our MEP designs, helping clients reduce long-term operational costs. We work closely with architects and contractors to ensure smooth execution and minimal on-site adjustments. Each design is tailored to the specific requirements of the project, whether it's a small commercial space or a large industrial facility. Our team's technical expertise guarantees systems that are safe, efficient, and future-ready. With us, MEP design becomes the backbone of functional and modern infrastructure.",

    "BIM Modeling & Coordination":
      "Our BIM modeling and coordination services empower clients with intelligent 3D models that serve as a single source of truth throughout the project lifecycle. We specialize in creating highly detailed and data-rich models that streamline collaboration across all stakeholders. By integrating architectural, structural, and MEP elements, we identify and resolve clashes early in the design stage, reducing costly rework later. Our BIM solutions enhance transparency and allow teams to visualize the project in its entirety before construction begins. This improves communication between architects, engineers, contractors, and owners. With real-time data integration, our BIM models provide insights that support better decision-making and accurate scheduling. We also ensure that all designs comply with international standards and best practices. Whether it's for residential, commercial, or industrial projects, our BIM coordination reduces risks and improves efficiency. We adopt the latest technology to ensure smooth handovers and long-term usability of the models. With us, BIM is not just a design tool—it's a strategy for delivering smarter projects.",

    "Civil & Structural Engineering Drawings":
      "We provide comprehensive civil and structural engineering drawings that form the backbone of safe, reliable, and efficient construction projects. Our drawings cover everything from foundations and framing to complex steel and concrete structures. By combining deep engineering knowledge with cutting-edge design software, we ensure every detail meets safety codes and international standards. Our focus is on delivering drawings that are clear, practical, and easy to execute on-site. Each project is designed with durability, cost-effectiveness, and structural integrity in mind. We tailor our solutions to fit diverse industries, whether it's residential buildings, industrial plants, or large-scale infrastructure. Our team carefully balances innovation with proven engineering principles to deliver results you can trust. By anticipating potential challenges, we reduce risks and provide designs that support efficient construction workflows. Every drawing we produce undergoes thorough quality checks to guarantee accuracy. With us, civil and structural design is more than just documentation—it's a blueprint for long-term success.",

    "2D Drafting":
      "We provide professional 2D drafting services that transform ideas and concepts into precise technical drawings. Our team ensures that every line, angle, and dimension is accurate, making your designs reliable for both presentation and execution. Whether you need architectural layouts, engineering schematics, or manufacturing plans, we deliver high-quality drafts that meet industry standards. With the latest CAD tools, we bring clarity and consistency to complex projects. Our drafting services help reduce errors, speed up approvals, and improve project coordination. We work closely with clients to understand their requirements before starting the drafting process. Each drawing is reviewed multiple times to ensure maximum accuracy. By outsourcing your 2D drafting to us, you save time, resources, and costs while receiving professional results. From simple sketches to detailed blueprints, we provide the perfect foundation for your projects.",

    "3D Modeling":
      "Our 3D modeling services bring your concepts to life with high-quality visualizations. We create accurate 3D models that showcase designs from every angle, helping you visualize projects before they are built. Whether it's architectural structures, product designs, or mechanical components, we deliver realistic and detailed 3D outputs. Our models improve communication between designers, engineers, and clients by providing a clear understanding of the final product. Using advanced CAD and modeling software, we ensure that all proportions, textures, and dimensions are precise. 3D modeling also helps in identifying potential design flaws early, reducing costly revisions later. We provide models suitable for presentations, simulations, and manufacturing. Our goal is to make your designs stand out while maintaining technical accuracy. With 3D visualization, you can present your ideas more convincingly and win client trust. We help you bridge the gap between imagination and reality with expert 3D modeling.",

    "BIM (Building Information Modeling)":
      "We specialize in BIM services that enable smarter planning, design, and construction processes. BIM allows stakeholders to collaborate on a single digital model, reducing errors and improving efficiency. Our team creates detailed BIM models that include not just geometry but also essential project data. This helps architects, engineers, and contractors work together seamlessly on large-scale projects. BIM provides valuable insights into scheduling, cost estimation, and material usage. By simulating the construction process digitally, we identify and resolve potential issues before they occur on-site. Our BIM services ensure better coordination, fewer delays, and significant cost savings. We also provide clash detection, ensuring that different systems within a building (mechanical, electrical, plumbing, etc.) fit together perfectly. With our BIM expertise, your projects become more sustainable, efficient, and predictable. We help you stay ahead in the construction industry by delivering future-ready solutions.",

    "MEP Design":
      "Our MEP design services cover Mechanical, Electrical, and Plumbing systems to ensure safe and efficient building operations. We provide detailed designs that integrate seamlessly into your construction projects. Each system is carefully planned to optimize performance while reducing energy costs and ensuring compliance with regulations. Our engineers design HVAC systems that maintain comfort and efficiency, electrical layouts that support functionality, and plumbing systems that guarantee safety and sustainability. Using advanced CAD and BIM tools, we coordinate all disciplines to avoid clashes and improve accuracy. We also prioritize environmentally friendly solutions by integrating energy-efficient technologies. With our MEP design expertise, buildings operate smoothly while minimizing maintenance costs. We work closely with architects, contractors, and developers to deliver fully coordinated MEP systems. Our focus is on functionality, safety, and innovation, making sure your building's infrastructure performs at its best.",

    "Rendering & Visualization":
      "We offer high-quality rendering and visualization services that transform technical designs into stunning, realistic visuals. Our renders help clients, investors, and stakeholders clearly understand how the final project will look before construction begins. From interiors to exteriors, products to landscapes, we deliver photorealistic images that make your concepts shine. Using advanced rendering software, we add textures, lighting, and shadows for lifelike detail. This enhances presentations, marketing materials, and project proposals, making them more impactful. Our visualizations also allow for quick design changes and approvals, saving time in the decision-making process. Whether you need static renders, walkthroughs, or animations, we provide solutions tailored to your project. With our expertise, your designs are not only accurate but also visually captivating. We help you communicate your vision more effectively and inspire confidence in your clients.",

    "Product & Industrial Design":
      "We deliver end-to-end product and industrial design solutions that combine creativity with technical expertise. Our approach focuses on creating designs that are both functional and aesthetically appealing. From initial sketches to fully detailed CAD models, we ensure every step aligns with your business goals. We take into account ergonomics, user experience, and manufacturability while designing. Our industrial design services also help reduce production costs by optimizing material usage and assembly processes. We work with industries such as automotive, consumer goods, and electronics to create market-ready products. With our expertise, you can bring innovative products to life faster and more efficiently. Each design is carefully tested and validated to ensure it meets performance requirements. We also provide design support for prototyping and manufacturing. By partnering with us, you get high-quality, future-proof product designs that stand out in the market.",

    "Piping & Instrumentation Diagrams (P&ID)":
      "Our P&ID services deliver clear and precise diagrams that serve as the backbone of industrial processes. We design process flow diagrams that detail every pipe, valve, and instrument, ensuring safe and efficient plant operations. Our team works according to industry standards, making sure that every symbol and notation is accurate. These diagrams help operators, engineers, and contractors easily understand process systems. With advanced CAD tools, we create digital P&IDs that are easy to update and maintain. We also provide integration with 3D models for better visualization and planning. P&IDs play a critical role in safety, allowing early detection of potential hazards. By outsourcing your P&ID design to us, you save time while ensuring compliance with regulations. Our services are widely used in oil & gas, petrochemical, water treatment, and power generation industries. We focus on delivering diagrams that are not only technical but also easy to interpret.",

    "Oil & Gas Plant Design & Layouts":
      "We provide specialized design and layout services for oil and gas plants, ensuring safety, efficiency, and compliance. Our team designs process plants with detailed layouts that optimize space utilization and workflow. We create 2D and 3D plant models that include equipment placement, piping systems, and safety zones. Our designs follow international codes and standards, giving clients confidence in reliability. By simulating workflows digitally, we help identify and eliminate bottlenecks before construction. Our layouts also consider environmental and sustainability factors, ensuring greener operations. We coordinate with mechanical, electrical, and civil teams for complete project integration. From upstream to downstream projects, we deliver plant designs that are both cost-effective and future-ready. Safety is a top priority, and we integrate fire protection, ventilation, and emergency systems. With our oil and gas design expertise, you can ensure smoother project execution and reduced risks.",

    "AI-Driven Design Optimization & Cost Estimation":
      "We harness the power of AI to bring efficiency and accuracy into design optimization and cost estimation. Our solutions use machine learning algorithms to analyze design options and recommend the best ones. This helps clients reduce costs while maintaining structural integrity and performance. AI also assists in predicting material requirements, labor costs, and project timelines with high accuracy. By automating repetitive tasks, we allow engineers to focus on innovation rather than manual calculations. Our AI-driven tools speed up decision-making and reduce the chances of human error. We help companies run multiple simulations to test different design scenarios before execution. This ensures better risk management and cost control. Our services are particularly valuable in industries where budgets and timelines are critical. By adopting AI, your business gains a competitive advantage with smarter, data-driven decisions.",

    "White-Label Execution for Agencies & Firms":
      "We provide white-label execution services for agencies and firms that want to expand their service offerings without increasing overhead costs. Our team works behind the scenes, delivering high-quality CAD, drafting, and design services under your brand name. This allows you to focus on client relationships while we handle execution. We maintain strict confidentiality and follow all project guidelines to match your standards. Our white-label services cover drafting, modeling, rendering, and documentation. With flexible engagement models, agencies can scale their operations up or down based on demand. We act as an extension of your team, providing the same quality as an in-house department. Our processes ensure seamless communication, quick turnarounds, and reliable delivery. By partnering with us, you can take on more projects and grow faster without additional hiring. This is the perfect solution for agencies looking to scale efficiently and maintain client satisfaction.",
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="border-b border-[#171717] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-40 md:w-48">
            <@zenLogo className="w-full h-auto" />
          </div>

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
            <Link href="/services" className="text-white font-medium">
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

      {/* Hero Section with wireframe background */}
      <section
        className="px-6 py-32 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wireframe" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  <path d="M 0 50 L 100 50 M 50 0 L 50 100" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wireframe)" />
            </svg>
          `)})}`,
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Services</h1>
          <div className="flex items-center justify-center space-x-2 text-[#d9d9d9]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 relative overflow-hidden">
        {/* Background wireframe graphics */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="tech-grid" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M 200 0 L 0 0 0 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <path d="M 0 100 L 200 100 M 100 0 L 100 200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    <polygon points="50,50 150,50 150,150 50,150" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-grid)" />
              </svg>
            `)})}`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#d9d9d9] text-sm mb-4">What We Offer</p>
            <h2 className="text-3xl font-bold text-white">
              End-to-end engineering &<br />
              design solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 */}
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() => handleServiceClick("2D & 3D AutoCAD Drafting", serviceContent["2D & 3D AutoCAD Drafting"])}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <AutoCADIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">2D & 3D AutoCAD Drafting</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick("Revit Architecture & Structure", serviceContent["Revit Architecture & Structure"])
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <RevitIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Revit Architecture & Structure</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We deliver advanced Revit architecture and structure design services that revolu...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "MEP Design (Mechanical, Electrical & Plumbing)",
                  serviceContent["MEP Design (Mechanical, Electrical & Plumbing)"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <MEPIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  MEP Design (Mechanical, Electrical & Plumbing)
                </h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our MEP design services are dedicated to creating seamless, efficient, and sus...
                </p>
              </CardContent>
            </Card>

            {/* Row 2 */}
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick("BIM Modeling & Coordination", serviceContent["BIM Modeling & Coordination"])
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <BIMIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">BIM Modeling & Coordination</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our BIM modeling and coordination services empower clients with intell...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "Civil & Structural Engineering Drawings",
                  serviceContent["Civil & Structural Engineering Drawings"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <CivilIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Civil & Structural Engineering Drawings</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We provide comprehensive civil and structural engineering drawings that f...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() => handleServiceClick("2D Drafting", serviceContent["2D Drafting"])}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <DraftingIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">2D Drafting</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We provide professional 2D drafting services that transform ideas and...
                </p>
              </CardContent>
            </Card>

            {/* Row 3 */}
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() => handleServiceClick("3D Modeling", serviceContent["3D Modeling"])}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <ModelingIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">3D Modeling</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 3D modeling services bring your concepts to life with high-quality visualizat...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "BIM (Building Information Modeling)",
                  serviceContent["BIM (Building Information Modeling)"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <BIMModelingIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">BIM (Building Information Modeling)</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() => handleServiceClick("MEP Design", serviceContent["MEP Design"])}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <MEPIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">MEP Design</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            {/* Row 4 */}
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick("Rendering & Visualization", serviceContent["Rendering & Visualization"])
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <RenderingIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Rendering & Visualization</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick("Product & Industrial Design", serviceContent["Product & Industrial Design"])
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <ProductDesignIcon />
                </div>
                <h3 className="font-semibold mb-4 text-white">Product & Industrial Design</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "Piping & Instrumentation Diagrams (P&ID)",
                  serviceContent["Piping & Instrumentation Diagrams (P&ID)"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <PipingIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Piping & Instrumentation Diagrams (P&ID)</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            {/* Row 5 */}
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "Oil & Gas Plant Design & Layouts",
                  serviceContent["Oil & Gas Plant Design & Layouts"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <OilGasIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Oil & Gas Plant Design & Layouts</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "AI-Driven Design Optimization & Cost Estimation",
                  serviceContent["AI-Driven Design Optimization & Cost Estimation"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <AIDesignIcon />
                </div>
                <h3 className="font-semibold mb-4 text-white">AI-Driven Design Optimization & Cost Estimation</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute...
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-6 rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors cursor-pointer"
              onClick={() =>
                handleServiceClick(
                  "White-Label Execution for Agencies & Firms",
                  serviceContent["White-Label Execution for Agencies & Firms"],
                )
              }
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <WhiteLabelIcon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">White-Label Execution for Agencies & Firms</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We provide white-label execution services for agencies and firms that wa...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Process</h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-8 text-center max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-6 flex justify-center">
                  <LightbulbIcon />
                </div>
                <h3 className="font-semibold mb-4 text-white">Send us your project idea or scope</h3>
              </CardContent>
            </Card>

            <ArrowRight className="w-8 h-8 text-white hidden md:block" />

            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-8 text-center max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-6 flex justify-center">
                  <ChainIcon />
                </div>
                <h3 className="font-semibold mb-4 text-white">We match it to the right AI tools + human engineers</h3>
              </CardContent>
            </Card>

            <ArrowRight className="w-8 h-8 text-white hidden md:block" />

            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-8 text-center max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-6 flex justify-center">
                  <RocketIcon />
                </div>
                <h3 className="font-semibold mb-4 text-white">You get fast, affordable, and high-quality delivery</h3>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-[#d9d9d9] mt-8">All work is protected by NDA and supported post-delivery</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#171717] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 w-32">
                <@zenLogo className="w-full h-auto" />
              </div>
              <p className="text-[#d9d9d9] text-sm">
                @zen is an engineering and design outsourcing company that combines artificial intelligence with
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
                    <p>@</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#d9d9d9] flex-shrink-0" />
                  <p>@</p>
                </div>
              </div>
              <div className="mt-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
          <div className="h-full max-h-[85vh] bg-black">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-4 border-b border-[#171717]">
              <div className="w-32">
                <KrafzenLogo className="w-full h-auto" />
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white text-black p-2 rounded-full hover:bg-[#d9d9d9] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(85vh-80px)]">
              {/* Page title and breadcrumb */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Services</h1>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#d9d9d9]">
                  <span>Home</span>
                  <span>›</span>
                  <span>Services</span>
                </div>
              </div>

              {/* Service section */}
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedService.title}</h2>
                  <div className="w-full h-px bg-white mb-6"></div>
                </div>

                <div className="text-white text-sm leading-relaxed space-y-4">
                  <p>{selectedService.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
