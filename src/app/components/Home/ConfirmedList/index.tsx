import styles from "./styles.module.css";

import ButtonFilterGender from "./components/ButtonFilterGender";
import MessagingParticipants from "./components/MessagingParticipants";

const ConfirmedList = () => {
  return (
    <section className={styles.confirmedList}>
      <ButtonFilterGender />
      <MessagingParticipants />
    </section>
  );
};

export default ConfirmedList;
