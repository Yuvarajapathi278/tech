import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, HelpCircle, FileText, Briefcase, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from './ThemeProvider';
import { toast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'suggestion';
}

interface QuickReply {
  text: string;
  action: () => void;
}

const initialMessages: Message[] = [
  { 
    id: 1, 
    text: "Hi there! 👋 I'm your DAMODARA SMART TECH assistant. I can help you with:\n\n• Our Services\n• Company Information\n• Portfolio & Projects\n• Career Opportunities\n• Contact & Support\n\nHow can I assist you today?", 
    sender: 'bot',
    timestamp: new Date(),
    type: 'text'
  }
];

const quickReplies: QuickReply[] = [
  { text: "Tell me about your services", action: () => {} },
  { text: "Show me your portfolio", action: () => {} },
  { text: "How can I contact you?", action: () => {} },
  { text: "Tell me about career opportunities", action: () => {} }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();

    // Service-related queries
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return {
        text: "We offer a comprehensive range of digital solutions:\n\n• Web Development & Design\n• Mobile App Development\n• UI/UX Design\n• Digital Marketing\n• API Integration\n• Cloud Solutions\n\nWhich service interests you most? I can provide detailed information about any of these.",
        suggestions: [
          "Tell me more about Web Development",
          "What about Mobile App Development?",
          "How can you help with Digital Marketing?",
          "What are your Cloud Solutions?"
        ]
      };
    }

    // About company queries
    if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
      return {
        text: "DAMODARA SMART TECH was founded in 2024 by Dr. Dev and Dr. Chirag. We're a cutting-edge technology company that helps businesses transform their digital presence with innovative solutions. Our mission is to deliver exceptional value through technology-driven solutions.",
        suggestions: [
          "Tell me about your team",
          "What makes you different?",
          "Show me your achievements",
          "How long have you been in business?"
        ]
      };
    }

    // Contact-related queries
    if (message.includes('contact') || message.includes('reach') || message.includes('get in touch')) {
      return {
        text: "You can reach us through multiple channels:\n\n• Email: damodarasmarttech@gmail.com\n• WhatsApp: +91 9342832456\n• Contact Form: Available on our website\n\nWould you like me to help you with any specific inquiry?",
        suggestions: [
          "I want to schedule a consultation",
          "Send me your business hours",
          "What's your response time?",
          "I need technical support"
        ]
      };
    }

    // Portfolio queries
    if (message.includes('portfolio') || message.includes('work') || message.includes('project') || message.includes('case study')) {
      return {
        text: "We've completed numerous successful projects across various industries. Our portfolio includes:\n\n• Financial Dashboards\n• E-commerce Platforms\n• Mobile Applications\n• Digital Marketing Campaigns\n• Custom Software Solutions\n\nWould you like to see specific examples in any of these categories?",
        suggestions: [
          "Show me your e-commerce projects",
          "Tell me about your mobile apps",
          "What's your most successful project?",
          "Do you have any case studies?"
        ]
      };
    }

    // Career queries
    if (message.includes('career') || message.includes('job') || message.includes('work with you') || message.includes('join')) {
      return {
        text: "We're always looking for talented individuals to join our team! We offer:\n\n• Competitive Salaries\n• Growth Opportunities\n• Work-Life Balance\n• Learning & Development\n• Modern Tech Stack\n\nWould you like to know about current openings or submit your resume?",
        suggestions: [
          "Show me current openings",
          "What's your hiring process?",
          "Tell me about your work culture",
          "How can I apply?"
        ]
      };
    }

    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('budget')) {
      return {
        text: "Our pricing is tailored to each project's specific requirements. We offer:\n\n• Custom Quotes\n• Flexible Payment Plans\n• Transparent Pricing\n• Value-Based Solutions\n\nWould you like to schedule a consultation to discuss your project requirements?",
        suggestions: [
          "I need a quote for web development",
          "What's your pricing structure?",
          "Do you offer packages?",
          "Can I get a free consultation?"
        ]
      };
    }

    // Greeting queries
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! Welcome to DAMODARA SMART TECH. I'm here to help you learn about our services and how we can help transform your business. What would you like to know?",
        suggestions: [
          "Tell me about your services",
          "Show me your portfolio",
          "How can I contact you?",
          "Tell me about your team"
        ]
      };
    }

    // Thank you queries
    if (message.includes('thank')) {
      return {
        text: "You're welcome! Is there anything else I can help you with today?",
        suggestions: [
          "Tell me more about your services",
          "I have another question",
          "How can I get started?",
          "Show me your contact information"
        ]
      };
    }

    // Default responses with suggestions
    const defaultResponses = [
      {
        text: "That's an interesting question! Our team specializes in creating innovative digital solutions. Would you like to know more about any specific service?",
        suggestions: ["Web Development", "Mobile Apps", "Digital Marketing", "Cloud Solutions"]
      },
      {
        text: "I'd be happy to help you with that! DAMODARA SMART TECH offers cutting-edge technology solutions. What specific aspect interests you?",
        suggestions: ["Our Services", "Portfolio", "Team", "Contact Us"]
      },
      {
        text: "Great question! We're always excited to discuss how our technology can help businesses grow. Would you like to schedule a consultation?",
        suggestions: ["Schedule Now", "Learn More", "View Portfolio", "Contact Sales"]
      }
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
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing with more realistic delay
    setTimeout(() => {
      const response = getBotResponse(currentInput);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, botMessage]);
      
      // Add suggestions if available
      if (response.suggestions) {
        const suggestionMessage: Message = {
          id: messages.length + 3,
          text: "You might also want to know:",
          sender: 'bot',
          timestamp: new Date(),
          type: 'suggestion'
        };
        setMessages(prev => [...prev, suggestionMessage]);
        setSuggestions(response.suggestions);
      }
      
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
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
              <span>Need help?</span>
              <span className="ml-1">Chat with our AI assistant!</span>
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

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}

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

          {/* Quick Actions */}
          <div className="p-2 border-t border-white/10">
            <div className="flex justify-around">
              <Button variant="ghost" size="sm" className="text-xs">
                <HelpCircle size={16} className="mr-1" />
                Help
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <FileText size={16} className="mr-1" />
                Services
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <Briefcase size={16} className="mr-1" />
                Careers
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <Phone size={16} className="mr-1" />
                Contact
              </Button>
            </div>
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
                {isTyping ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}