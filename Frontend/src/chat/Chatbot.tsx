import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  schemeName: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose, schemeName }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: `Hello! I can help you with the application process for ${schemeName}. What would you like to know?`, isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const userQuestion = inputMessage.toLowerCase();

      if (userQuestion.includes('document') || userQuestion.includes('required')) {
        botResponse = 'For this scheme, you will need: \n1. Aadhaar Card\n2. Land Records\n3. Bank Account Details\n4. Recent Passport Size Photo';
      } else if (userQuestion.includes('apply') || userQuestion.includes('how')) {
        botResponse = 'To apply for this scheme:\n1. Visit the official portal\n2. Register with your mobile number\n3. Fill the application form\n4. Upload required documents\n5. Submit and track your application';
      } else if (userQuestion.includes('status') || userQuestion.includes('track')) {
        botResponse = 'You can track your application status by:\n1. Visiting the official portal\n2. Entering your application ID\n3. Or calling the helpline: 1800-XXX-XXXX';
      } else {
        botResponse = 'I can help you with:\n- Required documents\n- Application process\n- Status tracking\nPlease ask about any of these topics.';
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);

    setInputMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="p-4 bg-orange-600 text-white rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <span className="font-semibold">Application Assistant</span>
        </div>
        <button onClick={onClose} className="hover:bg-orange-700 p-1 rounded">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-orange-600 text-white'
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans">{message.text}</pre>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};