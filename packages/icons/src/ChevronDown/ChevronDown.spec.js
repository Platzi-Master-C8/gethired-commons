import { render } from '@testing-library/react';
import ChevronDown from './ChevronDown';

describe('@icons/ChevronDown', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<ChevronDown title="ChevronDown" />);
    // act
    const icon = getByTitle(/ChevronDown/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
