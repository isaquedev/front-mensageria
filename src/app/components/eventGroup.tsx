import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/eventGroup.module.css";

const bot = {
  img: "/user1.jpg",
  name: "Lisa",
};

// Função para pegar a hora atual
function getCurrentHour() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
}

// Componente para renderizar o chat
const EventGroup = () => {
  const [userMessages, setUserMessages] = useState<
    { text: string; fromUser: boolean; time: string }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const messagesPanelRef = useRef<HTMLDivElement>(null);

  // Função para rolar a tela para baixo
  const scrollToBottom = () => {
    if (messagesPanelRef.current) {
      messagesPanelRef.current.scrollTo({
        top: messagesPanelRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [userMessages]);

  // Função para enviar mensagem
  const sendMessage = () => {
    if (userInput.trim() !== "" && userInput.length <= 80) {
      const newMessage = {
        text: userInput,
        fromUser: true,
        time: getCurrentHour(),
      };
      setUserMessages((prevMessages) => [...prevMessages, newMessage]);
      setUserInput("");
      botResponse();
    } else if (userInput.trim() === "") {
      alert("Por favor, digite uma mensagem.");
    } else if (userInput.length > 80) {
      alert("A mensagem deve ter no máximo 80 caracteres.");
    }
  };

  // Função para a resposta do bot
  const botResponse = () => {
    setTimeout(() => {
      const newMessage = {
        text: "Olá! Eu sou a Lisa, a assistente virtual do evento. Estou aqui para te ajudar a encontrar o que você procura. O que você gostaria de fazer?",
        fromUser: false,
        time: getCurrentHour(),
      };
      setUserMessages((prevMessages) => [...prevMessages, newMessage]);
    }, 1000);
  };

  // Função para enviar mensagem ao apertar "Enter"
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className={styles.eventGroup}>
      <section className={styles.messagesPanel} ref={messagesPanelRef}>
        {/* Renderizar mensagens do usuário e do bot */}
        {userMessages.map((message, index) => (
          <section
            key={index}
            className={message.fromUser ? styles.userCard : styles.botCard}
          >
             {!message.fromUser && (
              <Image
                src={bot.img}
                alt={bot.name}
                width={39}
                height={39}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            )}
            <section
              key={index}
              className={
                message.fromUser
                  ? styles.userMessageCard
                  : styles.botMessageCard
              }
            >
              {!message.fromUser && (
                <div className={styles.botName}>
                  <p>{bot.name}</p>
                </div>
              )}
              <div className={styles.messageCard}>
                <div
                  className={
                    message.fromUser ? styles.userMessage : styles.botMessage
                  }
                >
                  <p>{message.text}</p>
                </div>
                <div className={styles.hour}>
                  <p>{message.time}</p>
                </div>
              </div>
            </section>
          </section>
        ))}
      </section>

      {/* Componente para enviar mensagem */}
      <section className={styles.inputMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          className={styles.inputMessage}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className={styles.buttons}>
          <button className={styles.microphoneButton}>
            <Image
              src="/microphone.svg"
              alt="Microfone"
              width={15}
              height={15}
            />
          </button>
          <button className={styles.cameraButton}>
            <Image src="/camera.svg" alt="Câmera" width={15} height={15} />
          </button>
          <button className={styles.sendButton} onClick={sendMessage}>
            <Image src="/send.svg" alt="Enviar" width={15} height={15} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default EventGroup;