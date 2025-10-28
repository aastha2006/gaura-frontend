import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Handshake, Users, Brain, ExternalLink, CheckCircle } from "lucide-react"

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            Strategic Partnerships
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Partners & Collaborations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with innovative companies to deliver cutting-edge AI solutions and comprehensive training programs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 bg-white/80 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">BitTwoByte</h3>
                  <p className="text-blue-100 mb-4">Technology Solutions Partner</p>
                  <a 
                    href="https://www.bittwobyte.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Website
                  </a>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Active Partnership
                    </Badge>
                    <Badge variant="outline" className="text-purple-700 border-purple-200">
                      Agentic AI Training
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">Strategic Training Partnership</CardTitle>
                  <CardDescription className="text-lg">
                    We are currently partnering with BitTwoByte to train their talented team 
                    on advanced Agentic AI development, empowering them with cutting-edge AI capabilities.
                  </CardDescription>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Agentic AI Training</h4>
                      <p className="text-gray-600 text-sm">Advanced curriculum covering autonomous AI agent development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hands-on Implementation</h4>
                      <p className="text-gray-600 text-sm">Real-world projects and practical application of AI concepts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Collaboration</h4>
                      <p className="text-gray-600 text-sm">Continuous support and knowledge transfer for sustained growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Partnership Impact</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This collaboration demonstrates our commitment to knowledge sharing and 
                    empowering teams with the latest AI technologies and methodologies.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Interested in Partnership?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for innovative companies to collaborate with. 
              Whether you need AI training for your team or want to explore joint ventures, let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Explore Partnership
              </a>
              <a 
                href="mailto:info@gauraai.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}