import React from "react";
import { Button, ButtonVariant } from "@channlworks/components";

function App() {
  return (
    <div>
      <Button variant={ButtonVariant.Warning}>hello Kate</Button>
      <Button variant={ButtonVariant.Danger}>hello Kate</Button>
      <Button variant={ButtonVariant.Success}>hello Kate</Button>
      <Button variant={ButtonVariant.Primary}>hello Kate</Button>

      {/* <button className="px-7 py-2.5 text-base bg-red-500 text-white rounded-lg shadow-lg">hello</button> */}
    </div>
  );
}

export default App;
