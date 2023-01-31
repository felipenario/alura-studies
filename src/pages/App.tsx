import { useState } from "react";
import Form from "../components/Form/Form";
import List, { ITask } from "../components/List/List";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Stopwatch selectedTask={selected} completeTask={completeTask} />
      <List tasks={tasks} selectTask={selectTask} />
    </div>
  );
}

export default App;
