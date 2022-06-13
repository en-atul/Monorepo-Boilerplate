import React from "react";
import { Button, ButtonVariant } from "@channlworks/components";

function App() {
  return (
    <div className="bg-gray-400">
      <Button variant={ButtonVariant.Warning}>hello Kate</Button>
      <Button variant={ButtonVariant.Danger}>hello Kate</Button>
      <Button variant={ButtonVariant.Success}>hello Kate</Button>
      <Button variant={ButtonVariant.Primary}>hello Kate</Button>
      <Button variant={ButtonVariant.Link}>hello Kate</Button>
    </div>
  );
}

export default App;
