import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { GraduationCap, Bot, Wrench, BookOpen, MessageSquare, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      category: "Training & Education",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTk3MzY2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { icon: <BookOpen className="w-5 h-5" />, title: "AI/ML Domain Training", description: "Comprehensive courses covering machine learning fundamentals and advanced concepts" },
        { icon: <Bot className="w-5 h-5" />, title: "Agentic AI Development", description: "Learn to build autonomous AI agents that can perform complex tasks" },
        { icon: <Wrench className="w-5 h-5" />, title: "Building LLMs from Scratch", description: "Master the art of creating large language models from ground up" }
      ]
    },
    {
      category: "Custom Development",
      icon: <Bot className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk3MzY2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { icon: <MessageSquare className="w-5 h-5" />, title: "Custom Chatbots", description: "Intelligent conversational AI tailored to your business needs" },
        { icon: <Database className="w-5 h-5" />, title: "RAG Systems", description: "Retrieval-Augmented Generation for enhanced AI responses" },
        { icon: <Bot className="w-5 h-5" />, title: "GenAI Use Cases", description: "Custom generative AI solutions for various industry applications" }
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI/ML solutions from training and education to custom development 
            and cutting-edge research.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <ImageWithFallback
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  {category.icon}
                  <h3 className="ml-2 text-xl font-bold">{category.category}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-blue-600 mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}