import Image from "next/image";
import styles from "./styles/components.module.css";

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

  return (
    <section className={styles.messageContainer}>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </section>
  );
};

const UserCard = ({ user }) => {
  const isNewMessage = user.newMessage > 0;
  const messageStyle = isNewMessage ? "bold" : "medium";

  return (
    <section className={styles.userContainer}>
      <div className={styles.userCard}>
        <Image
          src={user.image}
          alt={user.name}
          width={50}
          height={50}
          className={styles.userImage}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <h3
            style={{
              color: "#080930",
              fontWeight: messageStyle,
              fontSize: "14px",
              fontFamily: "Montserrat Variable, sans-serif",
            }}
          >
            {user.name}
          </h3>
          <p
            style={{
              color: "#7775A7",
              fontWeight: messageStyle,
              fontSize: "10px",
              marginTop: "2px",
            }}
          >
            {user.intention}
          </p>
        </div>
      </div>
      <div className={styles.messageInfo}>
        <p
          style={{
            color: "#E62875",
            fontWeight: messageStyle,
            fontSize: "10px",
            fontFamily: "Montserrat Variable, sans-serif",
          }}
        >
          {user.lastMessage}
        </p>
        {isNewMessage && (
          <div
            className={styles.newMessage}
            style={{
              color: "#FFFFFF",
              fontWeight: "medium",
              fontSize: "12px",
              backgroundColor: "#7775A7",
              borderRadius: "100%",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "14px",
              height: "14px",
            }}
          >
            {user.newMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagingParticipants;
