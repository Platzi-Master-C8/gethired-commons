import { render } from '@testing-library/react';
import Home from './Home';

describe('@icons/Home', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Home title="home"/>);
    // act
    const icon = getByTitle(/home/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});