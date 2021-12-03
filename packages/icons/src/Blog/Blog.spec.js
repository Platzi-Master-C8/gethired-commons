import { render } from '@testing-library/react';
import Blog from './Blog';

describe('@icons/Blog', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Blog title="Blog" />);
    // act
    const icon = getByTitle(/Blog/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
