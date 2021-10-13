import React from "react";
import Header from "./components/contextApi/Header";
import "./App.css";
import Balance from "./components/contextApi/Balance";
import HomeExpences from "./components/contextApi/HomeExpences";
import { TransactionList } from "./components/contextApi/TransactionList";
import AddTransaction from "./components/contextApi/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <HomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
