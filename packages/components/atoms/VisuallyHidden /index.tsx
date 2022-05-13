import React from "react";

/* position: absolute;
overflow: hidden;
margin: 0;
width: 1px;
height: 1px;
clip-path: inset(100%);
clip: rect(1px, 1px, 1px, 1px);
white-space: nowrap; */

const VisuallyHidden = ({ children }) => {
  return <span className="hidden">{children}</span>;
};

export default VisuallyHidden;
