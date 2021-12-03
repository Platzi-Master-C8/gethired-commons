import { render } from '@testing-library/react';
import Notification from './Notification';

describe('@icons/Notification', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Notification title="Notification" />);
    // act
    const icon = getByTitle(/Notification/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
