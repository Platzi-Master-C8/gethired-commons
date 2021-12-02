import * as IconsPackage from '@master-c8/icons';

export default {
  title: 'Design System/Atoms/Icons',
  component: 'Icons',
  parameters: { __sb: { fd: 'row' } },
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'inherit',
        'action',
        'disabled',
      ],
      control: { type: 'select' },
      table: {
        category: 'Sizes',
      },
    },
    fontSize: {
      options: ['small', 'large'],
      control: { type: 'select' },
      table: {
        category: 'Sizes',
      },
    },
  },
};

export const Icons = (args) => {
  const iconsKeyList = Object.keys(IconsPackage);
  return iconsKeyList.map((key) => {
    const Icon = IconsPackage[key];
    IconsPackage[key].displayName = key;
    return <Icon {...args} key={key} />;
  });
};
