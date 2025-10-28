// src/components/Chatbot.tsx
import { useState, useRef, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { API_BASE_URL } from "../config"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm GAURA AI Assistant. How can I help you learn about our AI/ML services today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // ✅ Scroll to bottom after each message render
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // 🧠 Create / Load session when chat opens
  useEffect(() => {
    if (isOpen) {
      let storedId = localStorage.getItem("gaura_session_id")
      if (!storedId) {
        const newId = uuidv4()
        localStorage.setItem("gaura_session_id", newId)
        storedId = newId
        console.log("🆕 Created new session:", newId)
      } else {
        console.log("♻️ Using existing session:", storedId)
      }
      setSessionId(storedId)
    }
  }, [isOpen])

  // ✅ Backend request
  const sendMessageToAPI = async (message: string): Promise<string> => {
    if (!sessionId)
      return "⚠️ Session not ready yet. Please wait a second."
    try {
      const res = await fetch(`${API_BASE_URL}/chatbot/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, session_id: sessionId }),
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      return data.response || "⚠️ Unexpected response format from server."
    } catch (error) {
      console.error("Chatbot backend error:", error)
      return "❌ I’m having trouble connecting to the server right now. Please try again later."
    }
  }

  // ✅ Handle send
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await sendMessageToAPI(inputMessage)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "⚠️ There was a problem getting a response. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // 🔄 Optional: start a completely new session manually
  const startNewSession = () => {
    const newId = uuidv4()
    localStorage.setItem("gaura_session_id", newId)
    setSessionId(newId)
    setMessages([
      {
        id: "1",
        text: "Hello! I'm GAURA AI Assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
    console.log("🔄 New session started:", newId)
  }

  return (
    <>
      {/* 💬 Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        )}
      </div>

      {/* 💬 Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] z-50 animate-in slide-in-from-bottom-4 duration-300">
          <Card className="h-full flex flex-col shadow-2xl border-2 border-blue-100 overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <CardTitle className="text-lg">GAURA AI Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-1 mt-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    sessionId ? "bg-green-400" : "bg-yellow-400"
                  }`}
                ></div>
                <span className="text-sm opacity-90">
                  {sessionId ? "Online" : "Connecting..."}
                </span>
              </div>
            </CardHeader>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 break-words ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 mt-1">
                        {message.sender === "user" ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">
                          {message.text}
                        </p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4 flex-shrink-0 bg-white">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    sessionId
                      ? "Ask about our AI services..."
                      : "Initializing session..."
                  }
                  disabled={isLoading || !sessionId}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim() || !sessionId}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
                {/* Optional reset */}
                <Button
                  type="button"
                  onClick={startNewSession}
                  variant="outline"
                  className="ml-1 text-xs"
                >
                  New
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
