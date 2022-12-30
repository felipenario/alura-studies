import { ReactNode } from "react";
import style from "./Button.module.scss";

function Button({ children }: { children: ReactNode }) {
  return <button className={style.button}>{children}</button>;
}

export default Button;
