import { render } from '@testing-library/react';
import UserGroup from './UserGroup';

describe('@icons/UserGroup', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<UserGroup title="UserGroup" />);
    // act
    const icon = getByTitle(/UserGroup/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
