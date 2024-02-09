import styles from "./styles/EventViewSelector.module.css";
import React, { useState } from "react";

interface EventViewSelectorProps {
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventViewSelector: React.FC<EventViewSelectorProps> = ({ setSelected }) => {
  const [click, setClick] = useState<boolean>(true);

  // Função para selecionar Confirmados
  const handleSelectConfirmed = () => {
    setSelected(true);
    setClick(true);
  };

  // Função para selecionar Grupo do evento
  const handleSelectEventGroup = () => {
    setSelected(false);
    setClick(false);
  };

  return (
    <section className={styles.messageOptions}>
      <button
        className={styles.buttonOption}
        onClick={handleSelectConfirmed}
        style={{
          borderBottom: click ? "5px solid #e62875" : "1px solid #aea8b2",
          color: click ? "#e62875" : "#080930",
        }}
      >
        Confirmados
      </button>
      <button
        className={styles.buttonOption}
        onClick={handleSelectEventGroup}
        style={{
          borderBottom: click ? "1px solid #aea8b2" : "5px solid #e62875",
          color: click ? "#080930" : "#e62875",
        }}
      >
        Grupo do evento
      </button>
    </section>
  );
};

export default EventViewSelector;
