import React from "react";
import { Button, ButtonVariant } from "@channlworks/components";
import "./index.css";

function App() {
  return (
    <div className="App bg-red-400 text-green-600">
      <p className="py-12 bg-green-600">learn react</p>
      <Button variant={ButtonVariant.Danger}>hello</Button>
    </div>
  );
}

export default App;
