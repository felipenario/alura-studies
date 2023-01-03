import { useState } from "react";
import ListItem from "./Item/ListItem";
import style from "./List.module.scss";

export interface ITask {
  id: string;
  task: string;
  time: string;
  selected: boolean;
  completed: boolean;
}

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <ListItem key={index} task={item.task} time={item.time} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
