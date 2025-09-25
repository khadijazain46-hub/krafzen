import { KrafzenLogo } from "@/components/krafzen-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { SocialIcons } from "@/components/social-icons"
import { MapPin, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="border-b border-[#171717]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <KrafzenLogo className="w-40 md:w-48" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#d9d9d9] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#d9d9d9] transition-colors">
              About
            </Link>
            <Link href="/industries" className="text-[#d9d9d9] hover:text-white transition-colors">
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
              <Button className="hidden md:block bg-white text-black hover:bg-[#d9d9d9] rounded-full px-6 py-2">
                Book A Call
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9854b5517274774cc2a8a360dbf54352f3df977f%20%282%29-WnPjloR0PzhqQhiOreuRRwAIqWBakd.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Krafzen</h1>
          <div className="flex items-center justify-center space-x-2 text-[#d9d9d9]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-white">About Krafzen</span>
          </div>
        </div>
      </section>

      {/* Main About Section with Microphone Image and Company Description */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Microphone Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/ai-microphone-krafzen.png"
                  alt="Futuristic AI-powered microphone with holographic displays and sound waves representing KRAFZEN's innovative engineering solutions"
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{
                    filter: "grayscale(100%) contrast(1.2) brightness(0.9)",
                  }}
                />
              </div>
            </div>

            {/* Right side - About Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">About Krafzen</h2>
              <div className="space-y-6 text-[#d9d9d9] leading-relaxed text-lg">
                <p>
                  Krafzen is an innovative engineering and design outsourcing company that combines the power of
                  artificial intelligence with the creativity and precision of expert human teams. We specialize in
                  delivering solutions that are not only affordable but also accurate, reliable, and executed with a
                  traditional approach. Our services span a wide spectrum—from CAD drafting, Building Information
                  Modeling (BIM), and structural detailing to oil & gas design engineering, and mechanical, civil, and
                  electrical engineering.
                </p>
                <p>
                  At Krafzen, we believe that every project, whether it begins as a sketch, a scanned drawing, or just
                  an idea, has the potential to become something extraordinary. By integrating automation with
                  professional insight, we transform concepts into ready-to- use deliverables that meet industry
                  standards and client expectations. More than just an outsourcing partner, we aim to be a strategic
                  ally, helping organizations reduce costs, improve efficiency, and achieve excellence through a unique
                  blend of technology and human intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-[#171717]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">Mission</h2>
              <div className="space-y-6 text-[#d9d9d9] leading-relaxed text-lg">
                <p>
                  Our mission is to revolutionize the way engineering and design projects are executed. We are committed
                  to empowering businesses by combining AI-driven automation with specialized expertise, ensuring that
                  every project is carried out with unmatched precision, speed, and cost-effectiveness.
                </p>
                <p>
                  We strive to create value for our clients by delivering solutions that simplify complex workflows,
                  enhance collaboration, and drive innovation. Through a strong focus on quality, integrity, and
                  reliability, Krafzen is dedicated to helping industries—from construction and oil & gas to civil and
                  digital engineering—build better, faster, and smarter.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">Vision</h2>
              <div className="space-y-6 text-[#d9d9d9] leading-relaxed text-lg">
                <p>
                  Our vision is to redefine the future of engineering and design outsourcing by building a global
                  ecosystem where technology and human creativity work seamlessly together. We aspire to set new
                  industry benchmarks in efficiency, scalability, and innovation, creating solutions that not only solve
                  today's challenges but also anticipate the demands of tomorrow.
                </p>
                <p>
                  Krafzen envisions a world where AI-enhanced engineering becomes the standard, enabling organizations
                  across industries to unlock new levels of productivity, sustainability, and growth. By continually
                  investing in cutting-edge technologies, nurturing skilled talent, and focusing on client success, we
                  aim to become the trusted global leader in next-generation engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Krafzen Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose
                <br />
                Krafzen?
              </h2>
              <p className="text-[#d9d9d9] leading-relaxed text-lg">
                At Krafzen, we combine unparalleled craftsmanship with innovative solutions to bring your ideas to life.
                Our dedication to quality and customer satisfaction ensures that every project we undertake is completed
                with precision and care, delivering results that not only meet but exceed your expectations.
              </p>
            </div>

            {/* Right Content - Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI-Enhanced Precision & Speed */}
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors">
                <div className="mb-4">
                  <div className="w-12 h-12 mb-4 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18ZM4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12ZM16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM7.5 6.5C8.3 6.5 9 7.2 9 8C9 8.8 8.3 9.5 7.5 9.5C6.7 9.5 6 8.8 6 8C6 7.2 6.7 6.5 7.5 6.5ZM16.5 6.5C17.3 6.5 18 7.2 18 8C18 8.8 17.3 9.5 16.5 9.5C15.7 9.5 15 8.8 15 8C15 7.2 15.7 6.5 16.5 6.5ZM7.5 14.5C8.3 14.5 9 15.2 9 16C9 16.8 8.3 17.5 7.5 17.5C6.7 17.5 6 16.8 6 16C6 15.2 6.7 14.5 7.5 14.5ZM16.5 14.5C17.3 14.5 18 15.2 18 16C18 16.8 17.3 17.5 16.5 17.5C15.7 17.5 15 16.8 15 16C15 15.2 15.7 14.5 16.5 14.5Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    AI-Enhanced
                    <br />
                    Precision & Speed
                  </h3>
                </div>
                <p className="text-[#d9d9d9] text-sm leading-relaxed">
                  Harnessing AI to deliver faster, smarter, and more accurate results.
                </p>
              </div>

              {/* U.S.-Level Quality Standards */}
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors">
                <div className="mb-4">
                  <div className="w-12 h-12 mb-4 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2ZM12 4.5L9.91 9.17L4.82 9.82L8.41 13.4L7.45 18.18L12 15.77L16.55 18.18L15.59 13.4L19.18 9.82L14.09 9.17L12 4.5ZM12 7L13.5 10.5L17 11L14.5 13.5L15 17L12 15.5L9 17L9.5 13.5L7 11L10.5 10.5L12 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    U.S.-Level Quality
                    <br />
                    Standards
                  </h3>
                </div>
                <p className="text-[#d9d9d9] text-sm leading-relaxed">
                  Engineering outputs that meet international and U.S. benchmarks.
                </p>
              </div>

              {/* NDA & Confidentiality */}
              <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors">
                <div className="mb-4">
                  <div className="w-12 h-12 mb-4 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 3.18L19 6.3V11C19 15.5 16.18 19.65 12 20.72C7.82 19.65 5 15.5 5 11V6.3L12 3.18ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    NDA &<br />
                    Confidentiality
                  </h3>
                </div>
                <p className="text-[#d9d9d9] text-sm leading-relaxed">
                  Every project safeguarded with strict privacy and compliance.
                </p>
              </div>

              {/* 100+ Experts On Demand */}
              <div className="md:col-span-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 text-white flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4ZM16 6C14.9 6 14 6.9 14 8S14.9 10 16 10 18 9.1 18 8 17.1 6 16 6ZM8 4C10.2 4 12 5.8 12 8S10.2 12 8 12 4 10.2 4 8 5.8 4 8 4ZM8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6ZM8 13C10.67 13 16 14.33 16 17V20H0V17C0 14.33 5.33 13 8 13ZM8 14.9C5.03 14.9 1.9 16.36 1.9 17V18.1H14.1V17C14.1 16.36 10.97 14.9 8 14.9ZM16 13C16.22 13 16.48 13.01 16.77 13.03C18.61 13.5 20 14.94 20 17V20H18V17C18 15.69 17.22 14.58 16 13.87V13ZM12 18C14.21 18 16 19.79 16 22H8C8 19.79 9.79 18 12 18ZM12 19.9C10.9 19.9 10 20.8 10 21.9H14C14 20.8 13.1 19.9 12 19.9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      100+ Experts
                      <br />
                      On Demand
                    </h3>
                    <p className="text-[#d9d9d9] text-sm leading-relaxed">
                      A global team of designers, draftsmen, and engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-[#171717] py-16 px-6">
        <div className="container mx-auto">
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
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
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
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#d9d9d9] mt-1 flex-shrink-0" />
                  <div className="text-[#d9d9d9]">
                    <p>5830 E 2nd St, Ste 7000 #26394,</p>
                    <p>Casper, Wyoming 82609 U.S.</p>
                  </div>
                </div>
                {/* <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#d9d9d9] mt-0.5 flex-shrink-0" />
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
