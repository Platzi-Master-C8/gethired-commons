import { render } from '@testing-library/react';
import Menu from './Menu';

describe('@icons/Menu', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Menu title="Menu" />);
    // act
    const icon = getByTitle(/Menu/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
