import Image from 'next/image';
import styles from './styles.module.css';

type ReceivedMessageProps = {
  message: {
    text: string
    time: string
    fromUser: boolean
  }
  user: {
    img: string
    name: string
  }
}

export const ReceivedMessage = ({ message, user }: ReceivedMessageProps) => {

  return (
    <section
      className={styles.botCard}
    >
      <Image
        src={user.img}
        alt={user.name}
        width={39}
        height={39}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <section
        className={styles.botMessageCard}
      >
        <div className={styles.botName}>
          <p>{user.name}</p>
        </div>
        <div className={styles.messageCard}>
          <div
            className={styles.botMessage}
          >
            <p>{message.text}</p>
          </div>
          <div className={styles.hour}>
            <p>{message.time}</p>
          </div>
        </div>
      </section>
    </section>
  )
}