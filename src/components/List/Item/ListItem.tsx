import { ITask } from "../List";
import style from "../List.module.scss";

function ListItem({ id, task, time, selected, completed }: ITask) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default ListItem;
