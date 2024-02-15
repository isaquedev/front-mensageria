import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  user: {
    name: string;
    image: string;
    intention: string;
    lastMessage: string;
    newMessage: number;
  }
}

export const UserCard = ({ user }: Props) => {
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
          // style={{ borderRadius: "50%", objectFit: "cover" }} // Movido para o arquivo de estilo
        />
        <div>
          <h3
            className={styles.userCardName}
            // style={{
            //   color: "#080930",
            //   fontWeight: messageStyle,
            //   fontSize: "14px",
            //   fontFamily: "Montserrat Variable, sans-serif",
            // }}
            // Movido para o arquivo de estilos. A fonte já estava aplicada no arquivo global.css
            // Um ponto que expliquei mal é que apenas o texto da mensagem fica em bold caso não tenham mensagens novas
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
          className={[
            styles.messageText,
            messageStyle === "bold" ? styles.newMessageText : ""
          ].join(" ")}
          // style={{
          //   color: "#E62875",
          //   fontWeight: messageStyle,
          //   fontSize: "10px",
          //   fontFamily: "Montserrat Variable, sans-serif",
          // }}
          // Movi para o arquivo de estilos
        >
          {user.lastMessage}
        </p>
        {isNewMessage && (
          <div
            className={styles.newMessage}
            // O estilo via classe não estava funcionando por um erro de digitação, vale sempre dar um copiar e colar para evitar erros
            // Aproveitei e movi tudo para lá
            // style={{
            //   color: "#FFFFFF",
            //   fontWeight: "medium",
            //   fontSize: "12px",
            //   backgroundColor: "#7775A7",
            //   borderRadius: "100%",
            //   marginTop: "5px",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "14px",
            //   height: "14px",
            // }}
          >
            {user.newMessage}
          </div>
        )}
      </div>
    </section>
  );
};