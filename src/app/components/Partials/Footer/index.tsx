import styles from "./styles.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/logo-branco.svg"
        alt="Beplauze Logo"
        className={styles.vercelLogo}
        // Não precisa em ter o tamanho mais preciso em geral eu só arredondo para o número mais próximo
        // width={99}  
        // height={26.35}
        width={100}
        height={26}
        // style={{ marginTop: "30px", marginBottom: "16px" }} Movido para o arquivo de estilos
      />
      <p
        className={styles.footerText}
        // style={{ marginBottom: "16px" }}
      >
        Donec pulvinar accumsan tellus ac tristique. Nulla est enim, hendrerit
        vitae cursus non, volutpat eu erat
      </p>
      <section
        className={styles.footerIcons}
        // style={{ marginBottom: "16px" }}
      >
        <a href="https://twitter.com/beplauze">
          <Image
            src="/twitter.svg"
            alt="Twitter"
            className={styles.icon}
            width={15}
            height={15}
          />
        </a>
        <a href="https://www.tiktok.com/@beplauze?_t=8e5uOCFhatX&_r=1">
          <Image
            src="/facebook.svg"
            alt="Facebook"
            className={styles.icon}
            width={15}
            height={15}
          />
        </a>
        <a href="https://www.instagram.com/beplauze.rj/">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            className={styles.icon}
            width={15}
            height={15}
          />
        </a>
      </section>
      <a href="https://www.beplauze.com/rj/politica-privacidade" className={styles.footerLink}>
        {" "}
        Politica de privacidade{" "}
      </a>
      <a href="https://www.beplauze.com/rj/termos-condicoes" className={styles.footerLink}>
        {" "}
        Termos e condições{" "}
      </a>
      <p
        className={styles.footerCopy}
        // style={{ marginTop: "41px", marginBottom: "26px" }}
      >
        © Copyright 2023 Beplauze
      </p>
    </footer>
  );
};

export default Footer;
