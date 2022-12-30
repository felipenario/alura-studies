import Button from "../Button/Button";
import style from "./Form.module.scss";

function Form() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor={"task"}>Adicione um novo estudo</label>
        <input
          id={"task"}
          name={"task"}
          placeholder={"O que você quer estudar"}
          type={"text"}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor={"time"}>Tempo</label>
        <input
          id={"time"}
          name={"time"}
          type={"time"}
          step={1}
          min={"00:00:00"}
          max={"01:30:00"}
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;
