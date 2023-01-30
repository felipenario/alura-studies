import { ITask } from "../List";
import style from "../List.module.scss";

interface IListItemProps {
  task: ITask;
  selectTask: (selectedTask: ITask) => void;
}

function ListItem({ task, selectTask }: IListItemProps) {
  return (
    <li className={style.item} onClick={() => selectTask(task)}>
      <h3>{task.task}</h3>
      <span>{task.time}</span>
    </li>
  );
}

export default ListItem;
