import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import { ITask } from "../List/List";
import style from "./Form.module.scss";
import { v4 as uuidV4 } from "uuid";

function Form({ setTasks }: { setTasks: Dispatch<SetStateAction<ITask[]>> }) {
  const [task, setTask] = useState("");

  const [time, setTime] = useState("00:00:00");

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: uuidV4(),
        task: task,
        time: time,
        selected: false,
        completed: false,
      },
    ]);
    setTask("");
    setTime("00:00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor={"task"}>Adicione um novo estudo</label>
        <input
          id={"task"}
          name={"task"}
          placeholder={"O que você quer estudar"}
          type={"text"}
          onChange={(event) => setTask(event.target.value)}
          value={task}
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
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min={"00:00:00"}
          max={"01:30:00"}
          required
        />
      </div>
      <Button type={"submit"}>Adicionar</Button>
    </form>
  );
}

export default Form;
