import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from "./Stopwatch.module.scss";

function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default Stopwatch;