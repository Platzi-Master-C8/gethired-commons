# Icons Package

Icons of master-c8 project

## Icon

#### Example:

```jsx
import React from 'react';
import { BriefCase } from '@master-c8/icons';

const Questions = () => (
  <ul>
    <li>
      Jobs <BriefCase />
    </li>
  </ul>
);

export default Questions;
```

## List Icons

```jsx
  - <Blog />
  - <BriefCase />
  - <ChevronLeft />
  - <ChevronRight />
  - <ChevronUp />
  - <ChevronDown />
  - <Home />
  - <Menu />
  - <Message />
  - <Notification />
  - <UserGroup />
  - <Website />
```

## Size Icons

```jsx
import { Blog } from '@master-c8/icons';

const Example = () => {
  return (
    <Blog fontSize="small"/>
    <Blog fontSize="large"/>
  );
};

export default Example;
```

## List Colors

- primary
- secondary
- error
- info
- success
- warning
- inherit
- action
- disabled

#### Example 

```jsx
import { Message } from '@master-c8/icons';

const Example = () => {
  return <Message color="secondary" />
};

export default Example;
```