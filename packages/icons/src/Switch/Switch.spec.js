import { render } from '@testing-library/react';
import Switch from './Switch';

describe('@icons/Switch', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Switch title="Switch" />);
    // act
    const icon = getByTitle(/Switch/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
