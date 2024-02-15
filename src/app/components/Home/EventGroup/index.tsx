import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { SendedMessage } from "./components/SendedMessage";
import { ReceivedMessage } from "./components/ReceivedMessage";

const bot = {
  img: "/user1.jpg",
  name: "Lisa",
};

function getCurrentHour() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
}

// Esse componente no geral ficou bem legal, apenas acredito que valia a pena quebrar ele em mais componentes
const EventGroup = () => {
  const [userMessages, setUserMessages] = useState<
    { text: string; fromUser: boolean; time: string }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const messagesPanelRef = useRef<HTMLDivElement>(null);

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className={styles.eventGroup}>
      <section className={styles.messagesPanel} ref={messagesPanelRef}>
        {/* Alterado!
         
         Ao invés de criar um componente único que lida com os dois estados, a mensagem enviada e a mensagem recebida
         criei um componente separado para cada um. Assim a lógica fica bem mais simples.
          
         */}
        {userMessages.map((message, index) => {
          if (message.fromUser) return <SendedMessage key={index} {...message} />
          return <ReceivedMessage key={index} message={message} user={bot} />
        })}
      </section>

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