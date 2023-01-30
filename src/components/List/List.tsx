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

interface IListProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: IListProps) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <ListItem key={item.id} task={item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
