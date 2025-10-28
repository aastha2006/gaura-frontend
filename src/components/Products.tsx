import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { CloudOff, Shield, Users, Zap, BookOpen, Brain } from "lucide-react"

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to transform education and learning experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-blue-100">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU5NzM2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Teaching Assistance App"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Coming Soon
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <CardTitle className="text-2xl">Teaching Assistance App</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    A revolutionary cloud-free teaching assistant that empowers educators 
                    with AI-powered tools while maintaining complete data privacy.
                  </CardDescription>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CloudOff className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">100% Cloud-Free Operation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Complete Data Privacy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">AI-Powered Assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Multi-User Support</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Join Waitlist
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}