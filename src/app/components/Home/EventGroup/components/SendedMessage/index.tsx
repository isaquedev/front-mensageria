import styles from './styles.module.css';

type SendedMessageProps = {
  text: string
  time: string
}

export const SendedMessage = ({ text, time }: SendedMessageProps) => {
  return (
    <section
      className={styles.userCard}
    >
      <section
        className={styles.userMessageCard}
      >
        <div className={styles.messageCard}>
          <div
            className={styles.userMessage}
          >
            <p>{text}</p>
          </div>
          <div className={styles.hour}>
            <p>{time}</p>
          </div>
        </div>
      </section>
    </section>
  )
}