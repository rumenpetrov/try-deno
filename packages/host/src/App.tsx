import "./App.css";
// @deno-types="@types/react"
import { useState } from "react";
// @ts-expect-error Unable to infer type at the moment
import reactLogo from "./assets/react.svg";
import confetti from "https://esm.sh/canvas-confetti@1.6.0";
// https://github.com/denoland/deno/issues/26721
// import Button from "@try-deno/react-ui";
// import sayHello from "@try-deno/helpers";
import Button from "../../react-ui";
import sayHello from "../../helpers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>I am a remote component</Button>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            confetti();
            console.log(sayHello());
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
