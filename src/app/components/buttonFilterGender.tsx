"use client";
import styles from "./styles/components.module.css";

import React, { useState, useEffect } from "react";

const ButtonFilterGender = () => {
  const [genderState, setGenderState] = useState("");
  const [ageState, setAgeState] = useState("");

  const handleChangeGender = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setGenderState(e.target.value);
  };

  const handleChangeAge = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setAgeState(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
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

      {/* Filtro de idade: 18-24, 25-34, 35-44, 45-54, 55-64, 65+ */}
      <select
        className={styles.filterOption}
        onChange={handleChangeAge}
        style={{
          fontSize: "12px",
          color: "#7775A7",
          fontWeight: "semibold",
        }}
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
      </select>
    </div>
  );
};

export default ButtonFilterGender;
