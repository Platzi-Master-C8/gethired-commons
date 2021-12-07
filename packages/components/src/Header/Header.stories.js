import Header from './Header';

export default {
  title: 'Design System/Commons/Header',
  component: Header,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const HeaderSignin = Template.bind({});

HeaderSignin.args = {
  isLogged: false,
};

export const HeaderLogged = () => (
  <Header isLogged>
    <div>Children</div>
  </Header>
);
