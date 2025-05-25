import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from './ThemeProvider';
import { toast } from '@/components/ui/use-toast';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  { 
    id: 1, 
    text: "Hi there! 👋 I'm the DAMODARA SMART TECH assistant. How can I help you today?", 
    sender: 'bot',
    timestamp: new Date()
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive digital solutions including Web Development, UI/UX Design, Mobile App Development, Digital Marketing, API Integration, and Cloud Solutions. Which service interests you most?";
    }

    if (message.includes('about') || message.includes('company')) {
      return "DAMODARA SMART TECH was founded in 2024 by Dr. Dev and Dr. Chirag. We're a cutting-edge technology company that helps businesses transform their digital presence with innovative solutions.";
    }

    if (message.includes('contact') || message.includes('reach')) {
      return "You can reach us through our contact form on the website, or I can help you with any questions right now. What would you like to know about our services?";
    }

    if (message.includes('portfolio') || message.includes('work') || message.includes('project')) {
      return "We've completed numerous successful projects including financial dashboards, e-commerce platforms, mobile apps, and digital marketing campaigns. Would you like to see our portfolio section?";
    }

    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Our pricing depends on the specific requirements of your project. We offer competitive rates and can provide a custom quote. Would you like to schedule a consultation to discuss your needs?";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to DAMODARA SMART TECH. I'm here to help you learn about our services and how we can help transform your business. What would you like to know?";
    }

    if (message.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Our team specializes in creating innovative digital solutions. Would you like to know more about any specific service?",
      "I'd be happy to help you with that! DAMODARA SMART TECH offers cutting-edge technology solutions. What specific aspect interests you?",
      "Great question! We're always excited to discuss how our technology can help businesses grow. Would you like to schedule a consultation?",
      "Thanks for reaching out! Our AI-powered solutions and expert team can help transform your business operations. What challenges are you facing?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing with more realistic delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(currentInput),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Chat Assistant Activated",
        description: "Our AI assistant is ready to help you!",
      });
    }
  };

  return (
    <>
      {/* Descriptive Text Above Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-auto text-center animate-fade-in">
          <div
            className={`relative px-4 py-2 rounded-lg shadow-lg text-white font-medium text-xs flex items-center justify-center space-x-2 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            }`}
          >
            {/* Neon Glow Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur-md opacity-50"
              style={{
                filter: 'blur(10px)',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex items-center space-x-1">
              <span>Stuck?</span>
              <span className="ml-1">Get help with our chatbot!</span>
            </div>

            {/* Pulsating Dot Animation */}
            <div className="flex space-x-1 ml-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full p-0 shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-gradient-blue-purple hover:opacity-90 hover:scale-110'
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-24 right-6 z-50 w-96 h-[500px] rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fade-in
            ${theme === 'dark' ? 'glass-card' : 'bg-white border border-gray-200'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Bot className="text-neon-purple animate-pulse" size={24} />
              <div>
                <h3 className="font-bold">DAMODARA SMART TECH</h3>
                <p className="text-xs text-muted-foreground">AI Assistant</p>
              </div>
            </div>
            <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`max-w-[80%] animate-fade-in ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}
              >
                <div className={`p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-blue-purple text-white' 
                    : theme === 'dark' 
                      ? 'bg-secondary text-white' 
                      : 'bg-gray-100 text-black'
                }`}>
                  {msg.text}
                </div>
                <div className={`text-xs text-muted-foreground mt-1 ${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="max-w-[80%] mr-auto animate-fade-in">
                <div className={`p-3 rounded-2xl ${
                  theme === 'dark' ? 'bg-secondary text-white' : 'bg-gray-100 text-black'
                }`}>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
                className={theme === 'dark' ? 'bg-muted border-white/10' : ''}
              />
              <Button 
                type="submit" 
                disabled={isTyping || !inputValue.trim()}
                className="bg-gradient-blue-purple hover:opacity-90 disabled:opacity-50"
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}