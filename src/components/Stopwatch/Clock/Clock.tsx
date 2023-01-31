import style from "./Clock.module.scss";

interface IClockProps {
  time: number | undefined;
}

function Clock({ time = 0 }: IClockProps) {
  const minutes = Math.floor(time / 60);

  const seconds = time % 60;

  const [minuteFirstChar, minuteSecondChar] = String(minutes).padStart(2, "0");

  const [secondFirstChar, secondSecondChar] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minuteFirstChar}</span>
      <span className={style.clockNumber}>{minuteSecondChar}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondFirstChar}</span>
      <span className={style.clockNumber}>{secondSecondChar}</span>
    </>
  );
}

export default Clock;
