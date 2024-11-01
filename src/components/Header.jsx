import { useState } from "react";
import logo from "/logo-name.svg";
export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  // const now = new Date();
  const name = "Result";
  return (
    <header>
      <img src={logo} alt={name} />
      {/* <h3>Result University</h3> */}
      <span>Сейчас время :{now.toLocaleTimeString()}</span>
    </header>
  );
}
