import { HTMLProps } from 'react';

export interface SvgIconProps extends HTMLProps<SVGAElement> {
  children: JSX.Element;
}

export default function SvgIcon(props: SvgIconProps): JSX.Element;
