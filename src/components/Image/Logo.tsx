import React from "react";
import { ImageProps } from "./types";

const Logo: React.FC<ImageProps> = (props) => {
  return (
    <image alt="Logo" {...props} />
  );
};

export default Logo;
