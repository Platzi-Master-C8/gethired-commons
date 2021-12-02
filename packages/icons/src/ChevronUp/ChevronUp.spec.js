import { render } from '@testing-library/react';
import ChevronRight from './ChevronUp';

describe('@icons/ChevronRight', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<ChevronRight title="ChevronRight" />);
    // act
    const icon = getByTitle(/ChevronRight/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
