import { Button } from "./ui/button"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Logo size="md" />
          <span className="font-bold text-xl">GAURA AI SOLUTIONS</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#partners" className="text-gray-600 hover:text-gray-900 transition-colors">
            Partners
          </a>
          <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
            Products
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>
        
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Get Started
        </Button>
      </div>
    </header>
  )
}