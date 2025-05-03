import React, { useEffect, useState, useRef } from 'react'
import ChatbotIcon from '../components/ChatbotIcon'
import ChatForm from '../components/ChatForm'
import ChatMessage from '../components/ChatMessage'
//import '../styles/Chatbot.css'

const ChatBot = () => {
    const [chatHistory, setChatHistory] = useState([])
    const chatBodyRef = useRef()
  
    const generateBotResponse = async (history) => {
      const updateHistory = (text) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !== "..."), {role: "bot", text}]);
      };
      history = history.map(({ role, text }) => ({
        role: role === "bot" ? "model" : "user",
        parts: [{ text }]
      }));
    
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: history }),
      };
    
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
    
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message || "Algo salio mal!");
         
        //limpiado y actualizacion del historial de los chats con las respuestas del bot
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        updateHistory(apiResponseText);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
  
    useEffect(() => {
      //Auto scroll
      chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
    }, [chatHistory])
    
    return (
      <div className='container'>
        <div className="chatbot-popup">
  
          {/* Header del Chatbot*/}
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">ChatBot</h2>
            </div>
            <button className="material-symbols-rounded">keyboard_arrow_down</button>
          </div>
  
          {/* Body del Chatbot*/}   
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon/>
              <p className="message-text">
                Hola, como estas <br/> Como puedo ayudarte el dia de hoy?</p>
            </div>
          {/* Para mostrar el mensaje en pantalla*/}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat= {chat}/>
          ))}
          </div>
          {/* Footer del Chatbot*/}  
          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} 
            generateBotResponse={generateBotResponse}/>
          </div>
        </div>
      </div>
    )
}

export default ChatBot