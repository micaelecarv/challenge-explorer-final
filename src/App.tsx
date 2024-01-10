import React, { useEffect } from "react";
import { initMonitoring } from "./lib/datadog/datadog.config";

export function App() {
  useEffect(() => {
    initMonitoring();
  }
  , []);

  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <>
      <h1>Mica</h1>
      <button onClick={handleClick}>Clique aqui</button>
      <input type="text" placeholder="Digite aqui" />
      <div>
        <input type="checkbox" id="scales" name="scales" checked />
      </div>
    </>
  );
}
