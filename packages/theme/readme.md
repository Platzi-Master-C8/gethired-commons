# Theme Package

Colors, Theme to Default of master-c8 project

## ThemeProvider

#### Example:

```jsx
import React from 'react';
import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);

export default App
```

## THEME

#### Example:

```jsx
import { THEME } from '@master-c8/theme';

console.log(THEME.palette.warning.main) // '#FBA618'
```

## COLORS

#### Example:

```jsx
import { COLORS } from '@master-c8/theme';

console.log(COLORS.background1) // '#E5E5E5'
```

