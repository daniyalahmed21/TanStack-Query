import { useState } from "react";
import Banner from "./components/Banner";
import CoinTable from "./components/CoinTable";
import Navbar from "./components/NavBar";
import { CurrencyContext } from "./context/CurrencyContext";
import Home from "./pages/Home";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <div>
      <CurrencyContext value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext>
    </div>
  );
}

export default App;
