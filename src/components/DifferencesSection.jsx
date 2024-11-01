import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";
export default function DifferencesSection() {
  const [CounterType, setContentType] = useState(null);
  console.log("App Component Render");
  function handlClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемсяя от других</h3>
      <Button
        isActive={CounterType === "way"}
        buttonClicked={() => handlClick("way")}
      >
        {" "}
        Подход{" "}
      </Button>
      <Button
        isActive={CounterType === "easy"}
        buttonClicked={() => handlClick("easy")}
      >
        {" "}
        Доступность{" "}
      </Button>
      <Button
        isActive={CounterType === "program"}
        buttonClicked={() => handlClick("program")}
      >
        {" "}
        Концентрация{" "}
      </Button>
      {!CounterType && <p>Нажми на кнопку</p>}
      {CounterType && <p>{differences[CounterType]}</p>}
    </section>
  );
}
