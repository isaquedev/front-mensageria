import { UserCard } from "../UserCard";
import styles from "./styles.module.css";

const MessagingParticipants = () => {
  const users = [
    {
      name: "Lisa",
      image: "/user1.jpg",
      intention: "Quero me divertir!",
      lastMessage: "ontem",
      newMessage: 0,
    },
    {
      name: "Jennie",
      image: "/user2.jpg",
      intention: "Quero fazer amigos!",
      lastMessage: "12:32",
      newMessage: 1,
    },
    {
      name: "Jisoo",
      image: "/user3.jpg",
      intention: "Quero me divertir!",
      lastMessage: "ontem",
      newMessage: 0,
    },
    {
      name: "Rosie",
      image: "/user4.jpg",
      intention: "Quero dançar!",
      lastMessage: "12:32",
      newMessage: 1,
    },
  ];

  // Separei o UserCard em um arquivo separado para tornar o código mais enxuto

  return (
    <section className={styles.messageContainer}>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </section>
  );
};

export default MessagingParticipants;
