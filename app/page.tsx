"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Mail, Phone, X } from "lucide-react"
import { KrafzenLogo } from "@/components/krafzen-logo"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { SocialIcons } from "@/components/social-icons"

// What We Offer section icons - updated to match the technical engineering aesthetic
const CubeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* 3D wireframe cube with technical details */}
    <path d="M12 16L24 8L36 16V32L24 40L12 32V16Z" />
    <path d="M12 16L24 24L36 16" />
    <path d="M24 24V40" />
    <path d="M12 16L24 24L36 16M24 24V40" />
    {/* Technical annotations */}
    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    <circle cx="30" cy="20" r="1.5" fill="currentColor" />
    <path d="M16 28H20" strokeWidth="1" />
    <path d="M28 28H32" strokeWidth="1" />
  </svg>
)

const BuildingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Building with blueprint/architectural details */}
    <rect x="8" y="12" width="32" height="28" />
    <path d="M8 40H40" strokeWidth="2" />
    {/* Blueprint lines */}
    <path d="M12 16H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 20H36" strokeWidth="0.5" strokeDasharray="2,2" />
    <path d="M12 24H36" strokeWidth="0.5" strokeDasharray="2,2" />
    {/* Windows */}
    <rect x="14" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="30" y="18" width="4" height="4" fill="none" />
    <rect x="14" y="26" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    <rect x="30" y="26" width="4" height="4" fill="none" />
    {/* Technical annotations */}
    <path d="M42 12L44 12M43 11L43 13" strokeWidth="1" />
  </svg>
)

const GearIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* MEP - Pipes and mechanical systems */}
    <path d="M8 20H16L20 16H28L32 20H40" strokeWidth="2" />
    <path d="M8 28H16L20 32H28L32 28H40" strokeWidth="2" />
    {/* Pipe connections */}
    <circle cx="16" cy="20" r="2" fill="none" />
    <circle cx="32" cy="20" r="2" fill="none" />
    <circle cx="16" cy="28" r="2" fill="none" />
    <circle cx="32" cy="28" r="2" fill="none" />
    {/* Valves */}
    <rect x="22" y="18" width="4" height="4" fill="none" />
    <rect x="22" y="26" width="4" height="4" fill="none" />
    {/* Electrical conduit */}
    <path d="M12 12L36 12" strokeWidth="1" strokeDasharray="3,2" />
    <path d="M12 36L36 36" strokeWidth="1" strokeDasharray="3,2" />
    {/* Junction boxes */}
    <rect x="18" y="10" width="3" height="3" fill="currentColor" />
    <rect x="27" y="10" width="3" height="3" fill="currentColor" />
  </svg>
)

const BimIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* BIM building with coordination elements */}
    <path d="M8 32L24 16L40 32V40H8V32Z" />
    <path d="M16 40V28H32V40" />
    {/* BIM coordination lines */}
    <path d="M24 16L24 8" strokeDasharray="2,2" />
    <path d="M8 32L4 28" strokeDasharray="2,2" />
    <path d="M40 32L44 28" strokeDasharray="2,2" />
    {/* Data points */}
    <circle cx="24" cy="8" r="1.5" fill="currentColor" />
    <circle cx="4" cy="28" r="1.5" fill="currentColor" />
    <circle cx="44" cy="28" r="1.5" fill="currentColor" />
    {/* Building elements */}
    <rect x="20" y="24" width="8" height="16" fill="none" />
    <path d="M20 30H28" strokeWidth="0.5" />
    <path d="M20 34H28" strokeWidth="0.5" />
    {/* Coordination symbols */}
    <path d="M12 20L16 16L12 12" fill="none" strokeWidth="1" />
    <path d="M36 20L32 16L36 12" fill="none" strokeWidth="1" />
  </svg>
)

const HouseIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Civil & Structural - Foundation and structure */}
    <path d="M4 40H44" strokeWidth="3" />
    {/* Foundation */}
    <rect x="8" y="36" width="32" height="4" fill="currentColor" opacity="0.3" />
    {/* Structural columns */}
    <rect x="12" y="20" width="3" height="16" fill="none" />
    <rect x="22.5" y="20" width="3" height="16" fill="none" />
    <rect x="33" y="20" width="3" height="16" fill="none" />
    {/* Beams */}
    <path d="M10 20H36" strokeWidth="2" />
    <path d="M10 28H36" strokeWidth="1" />
    {/* Structural details */}
    <circle cx="13.5" cy="20" r="1" fill="currentColor" />
    <circle cx="24" cy="20" r="1" fill="currentColor" />
    <circle cx="34.5" cy="20" r="1" fill="currentColor" />
    {/* Load indicators */}
    <path d="M18 12L18 18" strokeWidth="1" strokeDasharray="1,1" />
    <path d="M30 12L30 18" strokeWidth="1" strokeDasharray="1,1" />
    <path d="M16 12L20 12" strokeWidth="1" />
    <path d="M28 12L32 12" strokeWidth="1" />
  </svg>
)

const BlueprintIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* 2D Technical drawing with dimensions */}
    <rect x="8" y="12" width="32" height="24" />
    {/* Drawing content */}
    <rect x="12" y="16" width="12" height="8" fill="none" />
    <rect x="28" y="16" width="8" height="8" fill="none" />
    <circle cx="30" cy="28" r="3" fill="none" />
    {/* Dimension lines */}
    <path d="M8 8L40 8" strokeWidth="0.5" />
    <path d="M8 6L8 10" strokeWidth="0.5" />
    <path d="M40 6L40 10" strokeWidth="0.5" />
    <path d="M44 12L44 36" strokeWidth="0.5" />
    <path d="M42 12L46 12" strokeWidth="0.5" />
    <path d="M42 36L46 36" strokeWidth="0.5" />
    {/* Technical annotations */}
    <path d="M14 20L16 18" strokeWidth="0.5" />
    <path d="M30 20L32 18" strokeWidth="0.5" />
    {/* Grid lines */}
    <path d="M16 12L16 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
    <path d="M24 12L24 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
    <path d="M32 12L32 36" strokeWidth="0.3" strokeDasharray="1,2" opacity="0.5" />
  </svg>
)

// Our Process section icons - Updated to match reference image with more detailed, professional outline style
const LightbulbIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Detailed lightbulb with filament lines for project ideas */}
    <path d="M24 8c-6.6 0-12 5.4-12 12 0 4.4 2.7 8.2 6 10.2V36h12v-5.8c3.3-2 6-5.8 6-10.2 0-6.6-5.4-12-12-12z" />
    <path d="M18 36h12" />
    <path d="M20 40h8" />
    <path d="M22 44h4" />
    {/* Detailed filament lines matching reference */}
    <path d="M19 18h10" strokeWidth="1" />
    <path d="M20 22h8" strokeWidth="1" />
    <path d="M21 26h6" strokeWidth="1" />
    <path d="M22 30h4" strokeWidth="1" />
  </svg>
)

const ChainIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Professional chain/link icon for matching and connection */}
    <path d="M18 12h-6c-3.3 0-6 2.7-6 6s2.7 6 6 6h6" />
    <path d="M30 12h6c3.3 0 6-2.7 6-6s-2.7-6-6-6h-6" />
    <path d="M16 18h16" />
    <path d="M18 36h-6c-3.3 0-6-2.7-6-6s2.7-6 6-6h6" />
    <path d="M30 36h6c3.3 0 6-2.7 6-6s-2.7-6-6-6h-6" />
    <path d="M16 30h16" />
    {/* Additional connection details */}
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    <circle cx="36" cy="18" r="1.5" fill="currentColor" />
    <circle cx="12" cy="30" r="1.5" fill="currentColor" />
    <circle cx="36" cy="30" r="1.5" fill="currentColor" />
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Detailed rocket icon for fast delivery with exhaust flames */}
    <path d="M24 4c4 0 8 2 10 6l2 4v8l-4 4h-16l-4-4v-8l2-4c2-4 6-6 10-6z" />
    <path d="M20 26v8l4 6 4-6v-8" />
    {/* Rocket body details */}
    <circle cx="24" cy="14" r="2" />
    <path d="M20 18h8" strokeWidth="1" />
    <path d="M21 22h6" strokeWidth="1" />
    {/* Wing fins */}
    <path d="M16 20l-4 4v4l4-2z" />
    <path d="M32 20l4 4v4l-4-2z" />
    {/* Exhaust flames matching reference */}
    <path d="M20 34l2 6 2-2 2 6 2-6" strokeWidth="1.5" />
    <path d="M22 38l1 4 1-2 1 4" strokeWidth="1" />
  </svg>
)

// Why Choose Krafzen section icons - Updated to match reference image with more accurate professional icons
const SparkleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
    {/* Multiple sparkle stars for AI-Enhanced Precision */}
    <path d="M24 8l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" />
    <path d="M36 16l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
    <path d="M12 28l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
    <path d="M32 32l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z" />
  </svg>
)

const LaptopLockIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Laptop with lock screen for NDA & Confidentiality */}
    <rect x="8" y="12" width="32" height="20" rx="2" />
    <path d="M8 32h32" />
    <rect x="6" y="32" width="36" height="4" rx="2" />
    {/* Lock icon on screen */}
    <rect x="18" y="18" width="12" height="8" rx="1" fill="currentColor" />
    <path d="M20 18v-2a4 4 0 0 1 8 0v2" fill="none" />
    <circle cx="24" cy="22" r="1" fill="white" />
  </svg>
)

const NetworkIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Network/globe with interconnected nodes for Scalable Business */}
    <circle cx="24" cy="24" r="16" />
    <path d="M8 24h32" />
    <path d="M24 8c-4 8-4 16 0 32" />
    <path d="M24 8c4 8 4 16 0 32" />
    {/* Network nodes */}
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <circle cx="32" cy="16" r="2" fill="currentColor" />
    <circle cx="16" cy="32" r="2" fill="currentColor" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
    <circle cx="24" cy="12" r="2" fill="currentColor" />
    <circle cx="24" cy="36" r="2" fill="currentColor" />
    {/* Connection lines */}
    <path d="M16 16l8-4 8 4" strokeWidth="1" opacity="0.6" />
    <path d="M16 32l8 4 8-4" strokeWidth="1" opacity="0.6" />
  </svg>
)

const BadgeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Quality badge with checkmark for U.S.-Level Quality Standards */}
    <path d="M24 4l6 4 8-2-2 8 4 6-4 6 2 8-8-2-6 4-6-4-8 2 2-8-4-6 4-6-2-8 8 2 6-4z" fill="currentColor" />
    {/* Checkmark */}
    <path d="M16 24l4 4 8-8" stroke="white" strokeWidth="3" fill="none" />
  </svg>
)

const TeamIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
    {/* Multiple people silhouettes for 100+ Experts On Demand */}
    <circle cx="16" cy="14" r="6" />
    <circle cx="32" cy="14" r="6" />
    <circle cx="24" cy="18" r="5" />
    <path d="M8 32c0-4 4-8 8-8s8 4 8 8v8H8v-8z" />
    <path d="M24 32c0-4 4-8 8-8s8 4 8 8v8H24v-8z" />
    <path d="M16 36c0-3 3-6 8-6s8 3 8 6v4H16v-4z" />
  </svg>
)

export default function KrafzenHomepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState<{
    title: string
    content: string
  } | null>(null)

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
    title: string
    location: string
    content: string
    testimonial: string
    author: string
    position: string
  } | null>(null)

  // const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  // const testimonialsPerView = 1 // Show 1 testimonial at a time on desktop
  // const totalTestimonials = 4

  // const nextTestimonials = () => {
  //   setCurrentTestimonialIndex((prev) => (prev >= totalTestimonials - testimonialsPerView ? 0 : prev + 1))
  // }

  // const prevTestimonials = () => {
  //   setCurrentTestimonialIndex((prev) => (prev <= 0 ? totalTestimonials - testimonialsPerView : prev - 1))
  // }

  const caseStudies = {
    urbanedge: {
      title: "UrbanEdge Properties",
      location: "Miami",
      content:
        "UrbanEdge Properties approached us with a fast-paced project involving a complex eight-story mixed-use development in Miami. They needed full BIM coordination, high-precision Revit modeling, and AI-driven clash detection to meet an aggressive development schedule.\n\nWe completed the entire modeling and coordination process within just 18 days. Compared to estimates they received from U.S.-based firms, our solution helped them save approximately $11,000 without compromising quality.",
      testimonial:
        "Krafzen's speed and quality blew us away. It felt like working with a high-end U.S. team — just faster and more affordable.",
      author: "Marcelo Ruiz",
      position: "Vice President of Development",
    },
    elevate: {
      title: "Elevate Studio",
      location: "Los Angeles",
      content:
        "Elevate Studio required accurate as-built CAD drafting for twenty architectural files, starting only with PDF scans. The project involved precise CAD conversion, AI-enhanced line extraction, and a meticulous quality assurance process to meet city compliance standards.\n\nWe delivered the completed files in 4.5 days. The results exceeded expectations, helping the studio pass their city council review ahead of schedule and saving them a significant amount in internal resources.",
      testimonial: "Krafzen made us look like heroes. They beat our internal timeline and saved us thousands.",
      author: "Alicia Benton",
      position: "Principal Architect",
    },
    vector: {
      title: "Vector Petroleum",
      location: "Houston",
      content:
        "Vector Petroleum needed support on a refinery expansion project. Their requirements included updating Piping and Instrumentation Diagrams (P&IDs), aligning all documentation with ISO standards, and ensuring compliance with environmental and safety regulations for the EPA.\n\nOur team successfully delivered 35 fully updated diagrams in just 10 days, ensuring the company met regulatory submission deadlines with confidence.",
      testimonial: "We were skeptical, but Krafzen delivered refinery-level engineering with zero compromises.",
      author: "Daniel Yates",
      position: "Engineering Director",
    },
    formfunction: {
      title: "Form & Function",
      location: "Amsterdam",
      content:
        "Form & Function, a design-focused firm in Amsterdam, was scaling quickly and struggling to keep up with demand. They partnered with us for white-label CAD support across six ongoing interior design projects. All documentation was customized with their branding and delivered remotely.\n\nBy offloading repetitive CAD tasks to us, they reduced their internal workload by 60 percent and were able to take on more projects, expanding their capacity by 2.5 times without hiring additional staff.",
      testimonial:
        "We don't even tell our clients it's outsourced — it feels like it's done in-house. Krafzen is our secret weapon.",
      author: "Rianne Vos",
      position: "Creative Director",
    },
  }

  const openCaseStudy = (caseStudyKey: keyof typeof caseStudies) => {
    setSelectedCaseStudy(caseStudies[caseStudyKey])
  }

  const serviceContent = {
    "2D & 3D AutoCAD Drafting": {
      title: "2D & 3D AutoCAD Drafting",
      content: `Our 2D and 3D AutoCAD drafting services are designed to bring absolute precision to your projects. We specialize in creating detailed technical drawings, floor plans, elevations, sections, and 3D models that serve as the foundation for successful construction and manufacturing projects.

Key Features:
• Precise 2D technical drawings and blueprints
• Detailed 3D modeling and visualization
• Industry-standard CAD file formats
• Quick turnaround times with AI-enhanced workflows
• Revision management and version control
• Compatible with all major CAD software platforms

Our experienced drafters combine traditional expertise with cutting-edge AI tools to deliver drawings that meet international standards while reducing project timelines by up to 50%.`,
    },
    "Revit Architecture & Structure": {
      title: "Revit Architecture & Structure",
      content: `We deliver advanced Revit architecture and structure design services that revolutionize your workflow. Our BIM specialists create intelligent 3D models that integrate architectural and structural elements seamlessly.

Key Features:
• Complete architectural BIM modeling
• Structural design and analysis integration
• Parametric design capabilities
• Clash detection and coordination
• Construction documentation generation
• Family creation and customization
• Multi-disciplinary collaboration support

Our Revit experts leverage AI-powered tools to accelerate modeling processes while maintaining the highest quality standards, ensuring your projects are delivered faster and more accurately than traditional methods.`,
    },
    "MEP Design (Mechanical, Electrical, Plumbing)": {
      title: "MEP Design (Mechanical, Electrical, Plumbing)",
      content: `Our MEP design services are dedicated to creating seamless, efficient, and sustainable systems. We provide comprehensive mechanical, electrical, and plumbing design solutions that optimize building performance.

Key Features:
• HVAC system design and optimization
• Electrical distribution and lighting design
• Plumbing and fire protection systems
• Energy efficiency analysis
• Code compliance verification
• 3D MEP coordination and clash detection
• Load calculations and system sizing

Our MEP engineers use advanced simulation tools and AI-driven optimization to create systems that reduce energy consumption by up to 30% while ensuring optimal comfort and safety.`,
    },
    "BIM Modeling & Coordination": {
      title: "BIM Modeling & Coordination",
      content: `Our BIM modeling and coordination services empower clients with intelligent 3D models that enhance project collaboration and reduce construction risks.

Key Features:
• 3D/4D/5D BIM modeling
• Multi-disciplinary coordination
• Clash detection and resolution
• Construction sequencing
• Quantity takeoffs and cost estimation
• Virtual reality walkthroughs
• Cloud-based collaboration platforms

We utilize industry-leading BIM software combined with AI-powered coordination tools to identify and resolve conflicts before construction begins, saving our clients time and money while improving project outcomes.`,
    },
    "Civil & Structural Engineering Drawings": {
      title: "Civil & Structural Engineering Drawings",
      content: `We provide comprehensive civil and structural engineering drawings that form the backbone of construction projects. Our detailed drawings ensure structural integrity and regulatory compliance.

Key Features:
• Structural analysis and design
• Foundation design and detailing
• Reinforcement drawings and schedules
• Civil site plans and grading
• Drainage and utility layouts
• Seismic and wind load analysis
• Construction details and specifications

Our structural engineers combine proven design principles with AI-enhanced analysis tools to deliver safe, efficient, and cost-effective structural solutions for projects of any scale.`,
    },
    "2D Drafting": {
      title: "2D Drafting",
      content: `We provide professional 2D drafting services that transform ideas and concepts into precise technical drawings. Our drafting team specializes in creating clear, accurate, and detailed drawings for various industries.

Key Features:
• Technical drawings and schematics
• As-built drawings and surveys
• Shop drawings and fabrication details
• Conversion from hand sketches to CAD
• Drawing standardization and cleanup
• Multi-format file delivery
• Rapid prototyping support

Our 2D drafting services leverage AI-powered tools to accelerate the conversion process while maintaining the highest accuracy standards, ensuring your drawings are production-ready and compliant with industry standards.`,
    },
  }

  const whyChooseContent = {
    "AI-Enhanced Precision & Speed": {
      title: "AI-Enhanced Precision & Speed",
      content: `Harnessing the power of artificial intelligence to deliver faster, smarter, and more accurate results than traditional engineering methods.

Our AI Integration:
• Automated drawing generation and optimization
• Intelligent error detection and correction
• Pattern recognition for design standardization
• Predictive modeling for structural analysis
• Machine learning-powered quality assurance
• Real-time design optimization

Benefits:
• 50% faster project delivery
• 99.5% accuracy in technical drawings
• Reduced human error through AI validation
• Consistent quality across all projects
• Scalable solutions for any project size

Our proprietary AI tools work alongside our expert engineers to ensure every project meets the highest standards while being delivered in record time.`,
    },
    "NDA & Confidentiality": {
      title: "NDA & Confidentiality",
      content: `Every project is safeguarded with strict privacy and compliance measures. We understand the sensitive nature of engineering projects and maintain the highest levels of confidentiality.

Our Security Measures:
• Comprehensive NDA agreements for all projects
• Secure file transfer and storage systems
• ISO 27001 compliant data handling
• Restricted access to project information
• Regular security audits and updates
• GDPR and CCPA compliance
• Encrypted communication channels

Privacy Guarantees:
• Your intellectual property remains yours
• No sharing of project details with third parties
• Secure deletion of files after project completion
• Regular confidentiality training for all staff
• Legal compliance across all jurisdictions

Trust Krafzen to handle your most sensitive projects with the utmost discretion and professional integrity.`,
    },
    "Scalable for Any Business": {
      title: "Scalable for Any Business",
      content: `Flexible solutions designed to grow with your business, whether you're a startup, established agency, or large enterprise.

Scalability Features:
• Flexible team allocation based on project needs
• Rapid scaling up or down as required
• Multiple project management simultaneously
• Dedicated account management for large clients
• Custom workflow integration
• Enterprise-level support and SLAs

Business Solutions:
• Startups: Cost-effective solutions to get you started
• SMEs: Flexible capacity to handle growth spurts
• Agencies: White-label services to expand your offerings
• Enterprises: Dedicated teams and custom processes
• Global Companies: Multi-timezone support and coordination

Our scalable infrastructure and global talent pool ensure we can handle projects of any size, from single drawings to multi-million dollar developments.`,
    },
    "U.S.-Level Quality Standards": {
      title: "U.S.-Level Quality Standards",
      content: `Engineering outputs that meet and exceed international and U.S. benchmarks for quality, accuracy, and compliance.

Quality Standards:
• ANSI/AISC standards compliance
• ACI concrete design standards
• ASCE structural engineering guidelines
• IBC and local building code compliance
• OSHA safety standards integration
• LEED and green building certifications
• Professional engineer review and approval

Quality Assurance Process:
• Multi-level review and approval process
• Automated quality checks using AI tools
• Peer review by senior engineers
• Client feedback integration
• Continuous improvement protocols
• Regular training on latest standards

Our commitment to U.S.-level quality ensures your projects meet the highest professional standards, regardless of where they're being constructed.`,
    },
    "100+ Experts On Demand": {
      title: "100+ Experts On Demand",
      content: `Access to a global team of over 100 specialized designers, draftsmen, and engineers across all disciplines.

Our Expert Team:
• Structural Engineers (PE licensed)
• Architectural Designers
• MEP Specialists
• CAD Drafters and Technicians
• BIM Coordinators and Managers
• Civil Engineers
• Project Managers and Quality Controllers

Specializations:
• Oil & Gas Engineering
• Commercial and Residential Construction
• Industrial and Manufacturing
• Infrastructure and Transportation
• Healthcare and Educational Facilities
• Renewable Energy Projects

Team Benefits:
• 24/7 global coverage across time zones
• Specialized expertise for every project type
• Flexible team composition based on project needs
• Continuous professional development
• Latest software and technology training
• Cultural diversity bringing fresh perspectives

Our extensive talent pool ensures we can assemble the perfect team for your specific project requirements.`,
    },
  }

  const industryContent = {
    "Oil & Gas Engineering": {
      title: "Oil & Gas Engineering",
      content: `We support oil and gas companies with specialized engineering design, plant layouts, and drafting services. Our expertise covers process design, piping systems, instrumentation diagrams, and safety-critical documentation. We create highly detailed CAD drawings and 3D models that allow better visualization and planning of facilities. Our team ensures strict compliance with international codes and safety standards. We also integrate AI-driven solutions to optimize layouts, reduce risks, and improve cost control. Our experience extends across upstream, midstream, and downstream projects, offering comprehensive coverage. We collaborate with contractors and engineering firms to streamline workflows and avoid costly delays. Our plant simulations allow stakeholders to test processes virtually before execution. With a focus on reliability, efficiency, and compliance, we deliver engineering solutions that support complex oil and gas projects worldwide. Partnering with us means faster design cycles and safer operations.`,
    },
    "Real Estate & Construction": {
      title: "Real Estate & Construction",
      content: `We provide tailored design and drafting solutions for the real estate and construction industry, supporting developers, contractors, and architects with precise documentation and visualization. Our team delivers detailed floor plans, structural layouts, and 3D renders that bring projects to life before construction begins. By integrating BIM and CAD tools, we ensure seamless coordination between stakeholders. Our solutions help identify clashes, reduce errors, and optimize project timelines. Whether it's residential, commercial, or mixed-use developments, we adapt our expertise to each project's unique requirements. We also offer cost estimation and material optimization to control budgets. Sustainability is a priority, and our designs incorporate eco-friendly practices and energy-efficient solutions. From concept to completion, we provide ongoing support to keep construction projects on track. By working with us, developers and contractors gain reliable documentation that ensures faster approvals and smoother execution.`,
    },
    "Civil & Infrastructure": {
      title: "Civil & Infrastructure",
      content: `We provide design and drafting solutions for large-scale civil and infrastructure projects, ensuring precision and long-term durability. Our services cover roads, bridges, water systems, urban planning, and other infrastructure needs. Using advanced CAD and BIM tools, we deliver accurate drawings, construction documents, and 3D visualizations. This helps engineers and contractors coordinate effectively and reduce costly rework. Our expertise ensures compliance with regulatory standards and safety guidelines. We also integrate geospatial data and environmental considerations into our designs for sustainable development. From concept to execution, we assist in planning, modeling, and cost estimation. Our infrastructure solutions improve efficiency in design coordination between multiple engineering teams. With experience in public and private projects, we bring reliability and scalability to infrastructure development. By partnering with us, governments and contractors achieve faster approvals and smoother execution.`,
    },
    "Manufacturing & Industrial": {
      title: "Manufacturing & Industrial",
      content: `We offer specialized design and drafting services for manufacturing and industrial sectors, helping businesses streamline operations and reduce production costs. Our solutions include equipment layouts, assembly line design, plant optimization, and product modeling. We use CAD and BIM technologies to deliver detailed technical drawings that improve accuracy and efficiency. Our industrial design expertise ensures better space utilization and safer workflows. We also support factories with digital twins and 3D visualizations to test processes virtually. By applying AI-driven optimization, we help companies reduce waste and enhance productivity. Our documentation makes it easier to comply with regulatory and safety requirements. Whether it's heavy machinery, automotive, or electronics manufacturing, our services adapt to each industry's unique needs. We act as a reliable partner, enabling faster production cycles and better quality control. With us, businesses achieve innovation and efficiency in their manufacturing processes.`,
    },
    "Engineering & Design Agencies": {
      title: "Engineering & Design Agencies",
      content: `We provide white-label and outsourcing solutions for engineering and design agencies, helping them expand their service offerings without additional overhead. Our team works behind the scenes to deliver CAD drafting, BIM modeling, 3D rendering, and design optimization under your brand name. This allows agencies to take on more projects while maintaining quality and consistency. We ensure confidentiality and align our work with your standards, so clients receive a seamless experience. Our flexible engagement models allow agencies to scale resources quickly based on demand. With AI-driven design optimization, we add value by delivering faster and smarter outputs. We also provide documentation and support for client presentations, proposals, and construction phases. By outsourcing to us, agencies save time and costs while improving efficiency. We act as an extension of your team, enabling you to grow and serve clients with confidence.`,
    },
    "Architecture & Interior Design": {
      title: "Architecture & Interior Design",
      content: `We deliver professional CAD drafting, BIM modeling, and 3D visualization services for architecture and interior design firms. Our expertise helps architects bring concepts to life with precise construction documents and photorealistic renders. We create detailed floor plans, elevations, sections, and interior layouts that enhance design communication. Our visualization services allow clients to experience spaces before construction, improving decision-making. We also provide parametric modeling and AI-driven design support to optimize layouts and material usage. Our documentation ensures smooth coordination with contractors and consultants during execution. Sustainability is a key focus, and we integrate green design practices and energy-efficient solutions into projects. Whether it's residential, commercial, or hospitality interiors, we adapt to each project's style and requirements. By partnering with us, architecture and design firms can deliver high-quality work faster while staying within budget. Our solutions empower creative teams to focus on innovation while we handle technical execution.`,
    },
  }

  const openModal = (type: "service" | "whyChoose" | "industry", key: string) => {
    let content
    if (type === "service") {
      content = serviceContent[key as keyof typeof serviceContent]
    } else if (type === "whyChoose") {
      content = whyChooseContent[key as keyof typeof whyChooseContent]
    } else if (type === "industry") {
      content = industryContent[key as keyof typeof industryContent]
    }

    if (content) {
      setSelectedContent(content)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedContent(null)
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="border-b border-[#171717] px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-32 md:w-40 lg:w-48">
            <KrafzenLogo className="w-full h-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white font-medium">
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
            <a href="/contact" className="text-[#d9d9d9] hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/contact">
              <Button className="hidden md:block bg-white text-black hover:bg-[#d9d9d9] rounded-full px-4 md:px-6 text-sm md:text-base">
                Book A Call
              </Button>
            </Link>
            <MobileNav currentPath="/" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Scalable Engineering,
            <br />
            CAD & Design
          </h1>
          <p className="text-lg md:text-xl text-[#d9d9d9]">By AI and Human Intelligence</p>
        </div>
      </section>

      {/* About Krafzen */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">About Krafzen</h2>
          <div className="space-y-4 md:space-y-6 text-[#d9d9d9] leading-relaxed text-base md:text-lg">
            <p>
              Krafzen is an innovative engineering and design outsourcing company that integrates the power of
              artificial intelligence with the precision of skilled human expertise to deliver projects that are faster,
              smarter, and more affordable. From CAD drafting, BIM, and structural detailing to complex oil & gas design
              and civil engineering, we specialize in turning raw ideas, sketches, or scanned drawings into clean,
              industry-ready deliverables.
            </p>
            <p>
              Our approach goes beyond outsourcing—we streamline entire workflows by combining automation with hands-on
              knowledge, helping businesses reduce costs, save time, and improve quality at every stage of execution.
              Driven by a mission to simplify complex engineering processes and a vision to redefine how technology and
              human creativity collaborate, Krafzen is building a future where AI-enhanced engineering solutions set new
              benchmarks for precision, scalability, and reliability across industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 bg-contain bg-no-repeat bg-right hidden lg:block"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/end%20to%20end%20sol%20background%20image-VlXjBBWrw81CJ3rbB5HlNgG2Ctgcqp.png')`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#d9d9d9] text-sm mb-4">What We Offer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
              End-to-end engineering &<br />
              design solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "2D & 3D AutoCAD Drafting")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <CubeIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">2D & 3D AutoCAD Drafting</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our 2D and 3D AutoCAD drafting services are designed to bring absolute precision to your projects.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "Revit Architecture & Structure")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <BuildingIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Revit Architecture & Structure</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We deliver advanced Revit architecture and structure design services that revolutionize your workflow.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "MEP Design (Mechanical, Electrical, Plumbing)")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <GearIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
                  MEP Design (Mechanical, Electrical, Plumbing)
                </h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our MEP design services are dedicated to creating seamless, efficient, and sustainable systems.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "BIM Modeling & Coordination")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <BimIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">BIM Modeling & Coordination</h3>
                <p className="text-[#d9d9d9] text-sm">
                  Our BIM modeling and coordination services empower clients with intelligent 3D models.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "Civil & Structural Engineering Drawings")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <HouseIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
                  Civil & Structural Engineering Drawings
                </h3>
                <p className="text-[#d9d9d9] text-sm">
                  We provide comprehensive civil and structural engineering drawings that form the backbone of
                  construction.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-[#171717] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors"
              onClick={() => openModal("service", "2D Drafting")}
            >
              <CardContent className="p-0">
                <div className="text-white mb-4">
                  <BlueprintIcon />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">2D Drafting</h3>
                <p className="text-[#d9d9d9] text-sm">
                  We provide professional 2D drafting services that transform ideas and concepts into precise technical
                  drawings.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/services">
              <Button className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-6 md:px-8">Learn more</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Krafzen */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Why Choose Krafzen?</h2>
              <p className="text-[#d9d9d9] leading-relaxed text-sm md:text-base">
                At Krafzen, we combine unparalleled craftsmanship with innovative solutions to bring your ideas to life.
                Our dedication to quality and customer satisfaction ensures that every project we undertake is completed
                with precision and care, delivering results that not only meet but exceed your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => openModal("whyChoose", "AI-Enhanced Precision & Speed")}
              >
                <CardContent className="p-0">
                  <div className="text-white mb-4">
                    <SparkleIcon />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">AI-Enhanced Precision & Speed</h3>
                  <p className="text-[#d9d9d9] text-sm">
                    Harnessing AI to deliver faster, smarter, and more accurate results.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => openModal("whyChoose", "NDA & Confidentiality")}
              >
                <CardContent className="p-0">
                  <div className="text-white mb-4">
                    <LaptopLockIcon />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">NDA & Confidentiality</h3>
                  <p className="text-[#d9d9d9] text-sm">
                    Every project safeguarded with strict privacy and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => openModal("whyChoose", "Scalable for Any Business")}
              >
                <CardContent className="p-0">
                  <div className="text-white mb-4">
                    <NetworkIcon />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Scalable for Any Business</h3>
                  <p className="text-[#d9d9d9] text-sm">Flexible solutions for startups, agencies, and enterprises.</p>
                </CardContent>
              </Card>

              <Card
                className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => openModal("whyChoose", "U.S.-Level Quality Standards")}
              >
                <CardContent className="p-0">
                  <div className="text-white mb-4">
                    <BadgeIcon />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">U.S.-Level Quality Standards</h3>
                  <p className="text-[#d9d9d9] text-sm">
                    Engineering outputs that meet international and U.S. benchmarks.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 rounded-lg shadow-lg md:col-span-2 cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => openModal("whyChoose", "100+ Experts On Demand")}
              >
                <CardContent className="p-0">
                  <div className="text-white mb-4">
                    <TeamIcon />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">100+ Experts On Demand</h3>
                  <p className="text-[#d9d9d9] text-sm">A global team of designers, draftsmen, and engineers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">Our Process</h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 text-center w-full max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-4 md:mb-6 flex justify-center">
                  <LightbulbIcon />
                </div>
                <h3 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">
                  Send us your project idea or scope
                </h3>
              </CardContent>
            </Card>

            <div className="block md:hidden">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <ArrowRight className="w-8 h-8 text-white hidden md:block" />

            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 text-center w-full max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-4 md:mb-6 flex justify-center">
                  <ChainIcon />
                </div>
                <h3 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">
                  We match it to the right AI tools + human engineers
                </h3>
              </CardContent>
            </Card>

            <div className="block md:hidden">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <ArrowRight className="w-8 h-8 text-white hidden md:block" />

            <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 text-center w-full max-w-sm rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="text-white mb-4 md:mb-6 flex justify-center">
                  <RocketIcon />
                </div>
                <h3 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">
                  You get fast, affordable, and high-quality delivery
                </h3>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-[#d9d9d9] mt-6 md:mt-8 text-sm md:text-base">
            All work is protected by NDA and supported post-delivery
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Oil & Gas Engineering")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">Oil & Gas Engineering</h3>
              </CardContent>
            </Card>

            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Real Estate & Construction")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">Real Estate & Construction</h3>
              </CardContent>
            </Card>

            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Civil & Infrastructure")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">Civil & Infrastructure</h3>
              </CardContent>
            </Card>

            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Manufacturing & Industrial")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">Manufacturing & Industrial</h3>
              </CardContent>
            </Card>

            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Engineering & Design Agencies")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">
                  Engineering & Design Agencies
                </h3>
              </CardContent>
            </Card>

            <Card
              className="bg-[#2a2a2a] border-[#3a3a3a] p-4 md:p-6 text-center hover:bg-[#333333] transition-colors rounded-lg cursor-pointer"
              onClick={() => openModal("industry", "Architecture & Interior Design")}
            >
              <CardContent className="p-0">
                <h3 className="text-xs md:text-sm font-medium text-white leading-tight">
                  Architecture & Interior Design
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">Testimonials</h2>

          <div className="max-w-4xl mx-auto">
            <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 pr-4">
              <div className="space-y-6">
                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 cursor-pointer hover:bg-[#333333] transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#535a65] rounded-lg mb-4 md:mb-6 mx-auto"></div>
                    <div className="text-center mb-4 md:mb-6">
                      <h4 className="text-white font-semibold text-sm md:text-base">UrbanEdge Properties</h4>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Miami</p>
                    </div>
                    <p className="text-[#d9d9d9] mb-4 md:mb-6 text-center text-sm md:text-base">
                      "Krafzen's speed and quality blew us away. It felt like working with a high-end U.S. team — just
                      faster and more affordable."
                    </p>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm md:text-base">Marcelo Ruiz,</p>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Vice President of Development</p>
                    </div>
                    <div className="text-center mt-4">
                      <Button
                        onClick={() => openCaseStudy("urbanedge")}
                        className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-4 md:px-6 text-sm"
                      >
                        View Case study →
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 cursor-pointer hover:bg-[#333333] transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#535a65] rounded-lg mb-4 md:mb-6 mx-auto"></div>
                    <div className="text-center mb-4 md:mb-6">
                      <h4 className="text-white font-semibold text-sm md:text-base">Elevate Studio</h4>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Los Angeles</p>
                    </div>
                    <p className="text-[#d9d9d9] mb-4 md:mb-6 text-center text-sm md:text-base">
                      "Krafzen made us look like heroes. They beat our internal timeline and saved us thousands."
                    </p>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm md:text-base">Alicia Benton,</p>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Principal Architect</p>
                    </div>
                    <div className="text-center mt-4">
                      <Button
                        onClick={() => openCaseStudy("elevate")}
                        className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-4 md:px-6 text-sm"
                      >
                        View Case study →
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 cursor-pointer hover:bg-[#333333] transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#535a65] rounded-lg mb-4 md:mb-6 mx-auto"></div>
                    <div className="text-center mb-4 md:mb-6">
                      <h4 className="text-white font-semibold text-sm md:text-base">Vector Petroleum</h4>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Houston</p>
                    </div>
                    <p className="text-[#d9d9d9] mb-4 md:mb-6 text-center text-sm md:text-base">
                      "We were skeptical, but Krafzen delivered refinery-level engineering with zero compromises."
                    </p>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm md:text-base">Daniel Yates,</p>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Engineering Director</p>
                    </div>
                    <div className="text-center mt-4">
                      <Button
                        onClick={() => openCaseStudy("vector")}
                        className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-4 md:px-6 text-sm"
                      >
                        View Case study →
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6 md:p-8 cursor-pointer hover:bg-[#333333] transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#535a65] rounded-lg mb-4 md:mb-6 mx-auto"></div>
                    <div className="text-center mb-4 md:mb-6">
                      <h4 className="text-white font-semibold text-sm md:text-base">Form & Function</h4>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Amsterdam</p>
                    </div>
                    <p className="text-[#d9d9d9] mb-4 md:mb-6 text-center text-sm md:text-base">
                      "We don't even tell our clients it's outsourced — it feels like it's done in-house. Krafzen is our
                      secret weapon."
                    </p>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm md:text-base">Rianne Vos,</p>
                      <p className="text-[#d9d9d9] text-xs md:text-sm">Creative Director</p>
                    </div>
                    <div className="text-center mt-4">
                      <Button
                        onClick={() => openCaseStudy("formfunction")}
                        className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-4 md:px-6 text-sm"
                      >
                        View Case study →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Together */}
      <section className="px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white text-balance">Let's Build Together</h2>
          <p className="text-lg md:text-xl text-[#d9d9d9] mb-8 md:mb-12 text-balance">
            Send us your project today — whether it's a single floor plan or an entire oil refinery layout. Krafzen
            scales with your vision — across industries, across borders.
          </p>

          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-[#d9d9d9] focus:outline-none focus:border-white text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-[#d9d9d9] focus:outline-none focus:border-white text-sm md:text-base"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-[#d9d9d9] focus:outline-none focus:border-white text-sm md:text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-[#d9d9d9] focus:outline-none focus:border-white text-sm md:text-base"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-[#d9d9d9] focus:outline-none focus:border-white resize-none text-sm md:text-base"
            />
            <div className="text-center">
              <Button className="bg-white text-black hover:bg-[#d9d9d9] rounded-full px-6 md:px-8 py-3 w-full md:w-auto">
                Leave us a message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#171717] px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="mb-4 w-28 md:w-32">
                <KrafzenLogo className="w-full h-auto" />
              </div>
              <p className="text-[#d9d9d9] text-sm leading-relaxed">
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
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <div className="space-y-3 text-sm text-[#d9d9d9] leading-relaxed">
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

      {isModalOpen && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#3a3a3a]">
              <h2 className="text-xl font-bold text-white">{selectedContent.title}</h2>
              <Button variant="ghost" size="icon" onClick={closeModal} className="text-white hover:bg-[#2a2a2a]">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="text-[#d9d9d9] leading-relaxed whitespace-pre-line">{selectedContent.content}</div>
            </div>
          </div>
        </div>
      )}

      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2a2a2a] rounded-lg p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedCaseStudy.title}</h3>
                <p className="text-[#d9d9d9] text-lg">{selectedCaseStudy.location}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCaseStudy(null)}
                className="text-white hover:bg-[#3a3a3a]"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                <div className="text-[#d9d9d9] leading-relaxed whitespace-pre-line">{selectedCaseStudy.content}</div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-white">
                <h4 className="text-lg font-semibold text-white mb-3">Client Testimonial</h4>
                <p className="text-[#d9d9d9] italic mb-4 text-lg">"{selectedCaseStudy.testimonial}"</p>
                <div className="text-right">
                  <p className="text-white font-semibold">{selectedCaseStudy.author}</p>
                  <p className="text-[#d9d9d9] text-sm">{selectedCaseStudy.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
