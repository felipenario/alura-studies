import { ITask } from "../List";
import style from "../List.module.scss";

interface IListItemProps {
  task: ITask;
  selectTask: (selectedTask: ITask) => void;
}

function ListItem({ task, selectTask }: IListItemProps) {
  return (
    <li
      className={`${style.item} ${task.selected ? style.selecteditem : ""} ${
        task.completed ? style.finishedItem : ""
      }`}
      onClick={() => !task.completed && selectTask(task)}
    >
      <h3>{task.task}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.finished} aria-label="Task finished!"></span>
      )}
    </li>
  );
}

export default ListItem;
