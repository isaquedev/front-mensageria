import Image from "next/image";
import styles from "./styles.module.css";

const EventMessagingHeader = () => {
  return (
    <header className={styles.eventHeader}>
      <section className={styles.headerContainer}>
        <Image
          src="/arrow-left.svg"
          alt="Back"
          className={styles.arrowLeft}
          width={15}
          height={15}
        />
        <h2
          className={styles.eventName}
          // Movido para o arquivo de estilos
          // style={{
          //   fontSize: "18px",
          //   color: "#080930",
          //   fontWeight: "bold",
          // }}
        >
          Ready to Be World Tour
        </h2>
      </section>
    </header>
  );
};

export default EventMessagingHeader;
