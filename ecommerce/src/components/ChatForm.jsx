import React, { useRef } from 'react'

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim()
            if(!userMessage) return
            inputRef.current.value= ""

            //Actualizacion chat para el usuario
           setChatHistory((history) => [...history, { role: "user", text: userMessage }])

            //Actualizacion chat para el bot
           setTimeout(() => {
            setChatHistory((history) => [...history, {role: "bot", text: "..."}])

            generateBotResponse([...chatHistory, {role: "user", text: userMessage}])
           }, 600);
            
        }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
        <button class="material-symbols-rounded">arrow_upward</button>
    </form>
  )
}

export default ChatForm