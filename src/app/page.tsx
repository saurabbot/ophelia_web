import { ArrowRight, Code, Cloud, Brain } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => (
  <nav className="fixed w-full bg-white z-50">
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-3xl  font-extrabold">OPHELIA</Link>
        <div className="flex items-center gap-12">
          <Link href="#" className="text-gray-600 hover:text-black font-light">Features</Link>
          <Link href="#" className="text-gray-600 hover:text-black font-light">Projects</Link>
          <Link href="#" className="text-gray-600 hover:text-black font-light">Enterprise</Link>
          <Link href="#" className="text-gray-600 hover:text-black font-light">Documentation</Link>
          <Link 
            href="https://cal.com/saurabh-nambiar-xxrwvj" 
            className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-900 text-sm font-light"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

const Projects = () => {
  const projects = [
    {
      title: "ERP System",
      description: "Enterprise-level ERP solution streamlining multi-vertical business operations"
    },
    {
      title: "NestAway Technologies Platform",
      description: "Real-estate rental operations platform with web and mobile solutions"
    },
    {
      title: "Samayama Logistics Suite",
      description: "Complete logistics and supply chain management system"
    },
    {
      title: "LegalTech AI Verification",
      description: "AI-powered document verification for legal compliance"
    }
  ]

  return (
    <div className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-7xl font-extralight mb-16 text-black/20">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`p-8 group cursor-pointer ${
                index === 0 ? 'border border-black' : 'border border-gray-200'
              }`}
            >
              <h3 className="text-3xl font-extralight mb-4 group-hover:text-black transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-light">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-black font-light">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
const Capabilities = () => (
  <div className="py-20 px-6 bg-black text-white">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-light mb-12">Our Capabilities</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Code className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-light mb-2">Full-Stack Development</h3>
          <p className="text-gray-400 font-light">Python, JavaScript, React, Java, and more. Building robust applications from front to back.</p>
        </div>
        <div>
          <Cloud className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-light mb-2">Cloud Solutions</h3>
          <p className="text-gray-400 font-light">GCP, AWS, and Mobile Development. Scalable infrastructure for modern applications.</p>
        </div>
        <div>
          <Brain className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-light mb-2">AI & Automation</h3>
          <p className="text-gray-400 font-light">LLMs, AI Agents, and Smart Solutions. Cutting-edge AI integration for your products.</p>
        </div>
      </div>
    </div>
  </div>
)

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-40 pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-[85px] font-light leading-tight tracking-tight text-black">
            The tech partner to 
            <br />
            build products with
            <br />
            <span className="font-serif italic font-extralight">excellence & innovation</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mt-8 font-light">
            Ophelia is a software consultancy with deep expertise in modern technologies.
            We integrate cutting-edge solutions like AI and cloud computing to create
            the products you envision.
          </p>

          <div className="flex gap-4">
            <Link 
              href="https://cal.com/saurabh-nambiar-xxrwvj"
              className="bg-black text-white px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-gray-900 text-sm font-light"
            >
              Start your project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projects"
              className="border border-gray-200 px-8 py-3.5 rounded-full hover:border-black text-sm font-light text-gray-600"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>

      <Projects />
      <Capabilities />

      {/* CTA Section */}
      <div className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-light mb-6">Start Building Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Whether youre a startup or enterprise, we help turn your ideas into reality with modern technology solutions.
          </p>
          <Link 
            href="https://cal.com/saurabh-nambiar-xxrwvj"
            className="bg-black text-white px-8 py-3.5 rounded-full hover:bg-gray-900 inline-flex text-sm font-light"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}