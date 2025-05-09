import React, { useEffect, useState, useRef } from 'react'
import ChatbotIcon from '../components/ChatbotIcon'
import ChatForm from '../components/ChatForm'
import ChatMessage from '../components/ChatMessage'
import '../styles/Chatbot.css'

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "..."), { role: "bot", text }]);
    };

    const lastUserMessage = history[history.length - 1]?.text?.toLowerCase() || "";
const match = lastUserMessage.match(/(?:tienes disponible|hay disponible|venden|tienes|hay|disponible|tienen en stock|tienen)\s+(.*)/i);
if (match) {
  const productos = match[1];
  try {
    const response = await fetch(`http://localhost:9000/api/productos?nombre=${encodeURIComponent(productos)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Producto no encontrado');

    updateHistory(`Sí, tenemos *${data.nombre}* disponible.\nDescripción: ${data.descripcion}\nPrecio: $${data.precio}`);
    return;
  } catch (error) {
    updateHistory(`Lo siento, no encontré el producto "${productos}". ¿Deseas buscar otro?`);
    return;
  }
}


    const mappedHistory = history.map(({ role, text }) => ({
      role: role === "bot" ? "model" : "user",
      parts: [{ text }]
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: mappedHistory }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Algo salió mal!");

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log("Error:", error.message);
      updateHistory("Lo siento, ocurrió un error al procesar tu solicitud.");
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="chatbot-wrapper">
      <div className="container">
        <div className="chatbot-popup">
          {/* Header del Chatbot */}
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">ChatBot</h2>
            </div>
            <button className="material-symbols-rounded">keyboard_arrow_down</button>
          </div>

          {/* Body del Chatbot */}
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hola, ¿cómo estás?<br />¿Cómo puedo ayudarte el día de hoy?
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Footer del Chatbot */}
          <div className="chat-footer">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default ChatBot