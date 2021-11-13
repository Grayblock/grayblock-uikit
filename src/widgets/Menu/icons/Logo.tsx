import React from "react";
import { ImageOnlyProps } from "../../../components/Image/types";

const Logo: React.FC<ImageOnlyProps> = ({ ...props }) => {
  return <img alt="Logo" {...props} />;
};

export default Logo;
