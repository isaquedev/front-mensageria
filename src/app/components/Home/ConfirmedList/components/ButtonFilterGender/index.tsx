import styles from "./styles.module.css";

import React, { ChangeEvent, useState } from "react";

const genderOptions = [
  "Gênero",
  "Feminino",
  "Masculino",
  "Neutro",
  "Não binário",
  "Preferir não informar",
  "Outros",
];

const ageOptions = [
  "Idade",
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65+",
];

const ButtonFilterGender = () => {
  const [genderState, setGenderState] = useState("");
  const [ageState, setAgeState] = useState("");

  // Como estava antes
  // const handleChangeGender = (e: { target: { value: React.SetStateAction<string>; }; }) => {

  // Colocando a tipagem assim ele já vai entender quais são os parâmetros sem precisar tipar o evento
  const handleChangeGender: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setGenderState(event.target.value);
  };

  // Ou se preferir pode tipar assim usando o próprio método ChangeEvent do React
  const handleChangeAge = (event: ChangeEvent<HTMLSelectElement>) => {
    setAgeState(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      {/*  Código antigo
      <select
        className={styles.filterOption}
        onChange={handleChangeGender}
        style={{
          fontSize: "12px",
          color: "#7775A7",
          fontWeight: "semibold",
        }}
      >
        <option value="" hidden className={styles.filterText}>
          Gênero
        </option>
        <option value="Feminino" className={styles.filterText}>
          Feminino
        </option>
        <option value="Masculino" className={styles.filterText}>
          Masculino
        </option>
        <option value="Neutro" className={styles.filterText}>
          Neutro
        </option>
        <option value="Não binário" className={styles.filterText}>
          Não binário
        </option>
        <option value="Preferir não informar" className={styles.filterText}>
          Preferir não informar
        </option>
        <option value="Outros" className={styles.filterText}>
          Outros
        </option>
      </select> 
      
      <select
        className={styles.filterOption}
        onChange={handleChangeAge}
        // Movido para o arquivo de estilos
        // style={{
        //   fontSize: "12px",
        //   color: "#7775A7",
        //   fontWeight: "semibold",
        // }}
      >
        <option value="" hidden className={styles.filterText}>
          Idade
        </option>
        <option value="18-24" className={styles.filterText}>
          18-24
        </option>
        <option value="25-34" className={styles.filterText}>
          25-34
        </option>
        <option value="35-44" className={styles.filterText}>
          35-44
        </option>
        <option value="45-54" className={styles.filterText}>
          45-54
        </option>
        <option value="55-64" className={styles.filterText}>
          55-64
        </option>
        <option value="65+" className={styles.filterText}>
          65+
        </option>
      </select> */}

      { /* Código novo

        Foi alterado para listas para ficar menor, mais legível e mais fácil de manipular

      */ }
      <select
        defaultValue={genderState} // Essa é a forma de passar para o select o valor usando o React
        className={styles.filterOption}
        onChange={handleChangeGender}
      >
        {genderOptions.map((option, index) => (
          <option
            key={option}
            value={option}  // Ele vai bater com o valor que você coloca aqui para definir qual está selecionado
            className={styles.filterText}
            hidden={index === 0}
          >
            {option}
          </option>
        ))}
      </select>

      <select
        defaultValue={ageState}
        className={styles.filterOption}
        onChange={handleChangeAge}
      >
        {ageOptions.map((option, index) => (
          <option
            key={option}
            value={option}
            className={styles.filterText}
            hidden={index === 0}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonFilterGender;
