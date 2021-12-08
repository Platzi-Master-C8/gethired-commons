import { render } from '@testing-library/react';
import Currency from './Currency';

describe('@icons/Currency', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Currency title="Currency" />);
    // act
    const icon = getByTitle(/Currency/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
