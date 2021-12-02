import { render } from '@testing-library/react';
import Website from './Website';

describe('@icons/Website', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Website title="Website" />);
    // act
    const icon = getByTitle(/Website/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
