import Image from "next/image";
import styles from "./styles/components.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerContainer}>
        <Image
          src="/menu.svg"
          alt="Menu"
          className={styles.menu}
          width={15}
          height={15}
        />
        <Image
          src="/logo-cores.svg"
          alt="Logo"
          className={styles.logo}
          width={104.8}
          height={26.35}
        />
      </section>
      <section className={styles.headerContainer}>
        <Image
          src="/pin.svg"
          alt="Location"
          className={styles.location}
          width={15}
          height={15}
        />
        <p 
          className={styles.locationText} 
          style={{ fontSize: "12px", color: "#000000", fontWeight: "medium" }}
        >
        Rio de Janeiro </p>
        <Image
          src="/down.svg"
          alt="Change Location"
          className={styles.down}
          width={15}
          height={15}
        />
      </section>
    </header>
  );
};

export default Header;