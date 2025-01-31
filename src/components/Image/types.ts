import { SpaceProps } from "styled-system";

export interface ContainerProps {
  width: number;
  height: number;
  responsive?: boolean;
}

export interface ImageProps extends ContainerProps, SpaceProps {
  src?: string;
  alt?: string;
  className?: string;
}

export interface ImageContainerProps {
  width?: number;
  height?: number;
}
export interface ImageOnlyProps extends ImageContainerProps, SpaceProps {
  src?: string;
  alt?: string;
  className?: string;
}
