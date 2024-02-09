import styles from "./styles/components.module.css";

import EventMessagingHeader from "./EventMessagingHeader";
import ButtonFilterGender from "./buttonFilterGender";
import MessagingParticipants from "./messagingParticipants";

const ConfirmedList = () => {
  return (
    <section className={styles.confirmedList}>
      <EventMessagingHeader />
      <ButtonFilterGender />
      <MessagingParticipants />
    </section>
  );
};

export default ConfirmedList;
