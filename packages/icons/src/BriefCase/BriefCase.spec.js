import { render } from '@testing-library/react';
import BriefCase from './BriefCase';

describe('@icons/BriefCase', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<BriefCase title="BriefCase" />);
    // act
    const icon = getByTitle(/BriefCase/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
