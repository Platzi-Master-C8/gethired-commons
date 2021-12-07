import { render } from '@testing-library/react';

import Header from './Header';

describe('Render component header', () => {
  const redirect = jest.fn();
  test('It is not logged', () => {
    const { getAllByRole } = render(<Header onClickLogin={redirect} onClickSignup={redirect} />);
    expect(getAllByRole('button')).toHaveLength(2);
  });
});
