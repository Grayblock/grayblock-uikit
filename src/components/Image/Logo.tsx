import React from "react";
import { ImageOnlyProps } from "./types";

const Logo: React.FC<ImageOnlyProps> = (props) => {
  return <img alt="Logo" {...props} />;
};

export default Logo;
