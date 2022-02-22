import { Button } from '@mui/material';
import Header from './Header';
import HeaderJob from './HeaderJob';

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

const PublicComponent = () => (
  <Button variant="outlined" size="large" type="button">
    Public Component
  </Button>
);

const Template = (args) => <Header notLogeedComponent={PublicComponent} {...args} />;

export const HeaderSignin = Template.bind({});

HeaderSignin.args = {
  isLogged: false,
};

export const HeaderLogged = () => (
  <Header isLogged notLogeedComponent={PublicComponent}>
    <div>Children</div>
  </Header>
);

export const HeaderJobs = () => <HeaderJob />;
