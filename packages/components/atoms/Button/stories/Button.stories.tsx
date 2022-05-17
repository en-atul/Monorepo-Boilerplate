import React from "react";
import { Button } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = args => {
  return <Button {...args} />;
};
