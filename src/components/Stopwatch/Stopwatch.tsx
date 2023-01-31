import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import Button from "../Button/Button";
import { ITask } from "../List/List";
import Clock from "./Clock/Clock";
import style from "./Stopwatch.module.scss";

interface IStopwatchProps {
  selectedTask: ITask | undefined;
  completeTask: () => void;
}

function Stopwatch({ selectedTask, completeTask }: IStopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask?.time) {
      setTime(timeToSeconds(selectedTask.time));
    }
  }, [selectedTask]);

  function startCountdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return startCountdown(counter - 1);
      }
      completeTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button
        onClick={() => {
          startCountdown(time);
        }}
      >
        Começar
      </Button>
    </div>
  );
}

export default Stopwatch;
