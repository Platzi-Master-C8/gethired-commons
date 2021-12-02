import Logotype from './Logotype';

export default {
  title: 'Design System/Atoms/Logo',
  component: Logotype,
};

const Template = (args) => <Logotype {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  width: 220,
};
