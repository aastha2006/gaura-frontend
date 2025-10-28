import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Partners } from "./components/Partners"
import { Products } from "./components/Products"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Chatbot } from "./components/Chatbot"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}