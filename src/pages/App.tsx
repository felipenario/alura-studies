import { useState } from "react";
import Form from "../components/Form/Form";
import List, { ITask } from "../components/List/List";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Stopwatch />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
