import { render } from '@testing-library/react';
import Message from './Message';

describe('@icons/Message', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Message title="Message"/>);
    // act
    const icon = getByTitle(/Message/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});