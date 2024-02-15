import styles from "./styles.module.css";

// Interface antiga
// interface EventViewSelectorProps {
//   setSelected: React.Dispatch<React.SetStateAction<boolean>>;
// }

// Alterado para um tipo pois o valor "true" ou "false" não deixa claro o que seria o true? o que seria o false? Vale ser
// mais específico
export type ViewOption = "confirmed" | "group";

interface EventViewSelectorProps {
  setSelected: (value: ViewOption) => void; // Não é necessário que o componente saiba o tipo da função, apenas o que ele precisa repassar
  selected: ViewOption; // Aproveito e já peço para o componente pai que já gerencia o estado me enviar qual é o selecionado
}

const EventViewSelector = ({ setSelected, selected }: EventViewSelectorProps) => {
  // Fazer esse state é duplicar o componente que o componente pai já faz. Podemos utilizar ela diretamente pedindo
  // para o componente pai nos enviar qual é o selecionado.
  // Vale dizer que o click não é um bom nome, pois não deixa claro o que ele faz"
  // const [click, setClick] = useState<boolean>(true);

  const handleSelectConfirmed = () => {
    setSelected('confirmed');
    // setClick(true);
  };

  const handleSelectEventGroup = () => {
    setSelected('group');
    // setClick(false);
  };

  // Uma outra sugestão aqui também seria criar uma lista de opções e iterar sobre ela para criar os botões, pois assim
  // seria mais fácil de adicionar mais opções no futuro
  return (
    <section className={styles.messageOptions}>
      <button
        // className={styles.buttonOption}
        // As classes nada mais são que uma lista com espaços, então podemos juntar elas em um array e usar o join no final
        className={[styles.buttonOption, selected === "confirmed" ? styles.buttonOptionSelected : ""].join(" ")}
        onClick={handleSelectConfirmed}
        // style={{
        //   borderBottom: click ? "5px solid #e62875" : "1px solid #aea8b2",
        //   color: click ? "#e62875" : "#080930",
        // }}
      >
        Confirmados
      </button>
      <button
        // className={styles.buttonOption}
        // Logo como são apenas strings no fim do dia, pode ser feito dessa forma aqui também e algumas outras
        className={`${styles.buttonOption} ${selected === "group" ? styles.buttonOptionSelected : ""}`}
        onClick={handleSelectEventGroup}
        // style={{
        //   borderBottom: click ? "1px solid #aea8b2" : "5px solid #e62875",
        //   color: click ? "#080930" : "#e62875",
        // }}
      >
        Grupo do evento
      </button>
    </section>
  );
};

export default EventViewSelector;
