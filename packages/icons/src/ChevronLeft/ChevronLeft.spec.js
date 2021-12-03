import { render } from '@testing-library/react';
import ChevronLeft from './ChevronLeft';

describe('@icons/ChevronLeft', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<ChevronLeft title="ChevronLeft" />);
    // act
    const icon = getByTitle(/ChevronLeft/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
