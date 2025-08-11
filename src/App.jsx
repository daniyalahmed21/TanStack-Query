import { useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import Routing from "./routing/Routing";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <div className="max-h-screen ">
      <CurrencyContext value={{ currency, setCurrency }}>
        <Routing />
      </CurrencyContext>
      </div>
  );
}

export default App;
