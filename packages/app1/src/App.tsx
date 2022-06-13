import React from "react";
import { Button, ButtonVariant } from "@monorepo/components";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="p-8 flex justify-around">
        <Button variant={ButtonVariant.Warning}>hello Kate</Button>
        <Button variant={ButtonVariant.Danger}>hello Kate</Button>
        <Button variant={ButtonVariant.Success}>hello Kate</Button>
        <Button variant={ButtonVariant.Primary}>hello Kate</Button>
        <Button variant={ButtonVariant.Link}>hello Kate</Button>
      </div>
    </div>
  );
}

export default App;
