import React, { useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";
import { datadogConfig } from "./datadog.config";

export function App() {
  useEffect(() => {
    datadogRum.init(datadogConfig);
    datadogRum.startSessionReplayRecording();
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
