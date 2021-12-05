import { ReactNode, ReactElement } from 'react';

export interface ThemeProviderProps {
  children?: ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps): ReactElement;
