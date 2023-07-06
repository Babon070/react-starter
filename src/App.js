import React from "react";
import AppRouter from "./component/AppRouter";
import Header from "./component/header/Header";
// import './css/main.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
