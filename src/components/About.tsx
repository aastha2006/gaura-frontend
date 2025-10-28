import { Card, CardContent } from "./ui/card"
import { Target, Lightbulb, Users, Award } from "lucide-react"

export function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Innovation Focus",
      description: "Constantly pushing the boundaries of AI/ML technology to deliver cutting-edge solutions."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Research Excellence", 
      description: "Committed to advancing AI research and translating discoveries into practical applications."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Knowledge Sharing",
      description: "Empowering individuals and organizations through comprehensive AI/ML education."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Quality Delivery",
      description: "Delivering high-quality, customized AI solutions that exceed client expectations."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About GAURA AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking AI/ML company dedicated to innovation, research, and education. 
            Our mission is to democratize artificial intelligence by providing world-class training, 
            developing custom solutions, and creating innovative products that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become a leading innovator in the AI/ML space, creating solutions that not only 
                advance technology but also contribute meaningfully to society and education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where AI is accessible, ethical, and empowering for everyone, 
                from students learning their first algorithm to enterprises transforming their operations.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Cutting-edge AI/ML research and development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Comprehensive training programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Custom AI solutions for businesses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Privacy-focused product development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}