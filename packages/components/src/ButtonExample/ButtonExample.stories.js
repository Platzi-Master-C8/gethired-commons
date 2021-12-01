import ButtonExample from './ButtonExample';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonExample,
  parameters: { __sb: { fd: 'row' } },
  argTypes: {
    color: {
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'select' },
      table: {
        category: 'Sizes',
      },
    },
  },
};

const Template = (args) => <ButtonExample {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'BUTTON',
  variant: 'contained'
};

const getListTemplate = (Component) => ({ items, ...args }) => 
  items.map((item, index) => {
    return (
      <Component
        key={index}
        {...args}
        {...item}
      />
    );
  });


const ListTemplate = getListTemplate(ButtonExample);

export const Sizes = ListTemplate.bind({});

Sizes.args = {
  items: ['small', 'medium', 'large'].map((size) => ({ size })),
  children: 'BUTTON',
  variant: 'contained',
  color: 'primary'
};

export const Colors = ListTemplate.bind({});

Colors.args = {
  items: ['primary', 'secondary'].map((color) => ({ color })),
  children: 'BUTTON',
  variant: 'contained',
};

export const Variants = ListTemplate.bind({});

Variants.args = {
  items: ['contained', 'outlined'].map((variant) => ({ variant })),
  children: 'BUTTON',
};