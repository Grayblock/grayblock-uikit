import React from "react";
import { ImageOnlyProps } from "./types";

const Logo: React.FC<ImageOnlyProps> = (props) => {
  return (
    <image alt="Logo" {...props} />
  );
};

export default Logo;
