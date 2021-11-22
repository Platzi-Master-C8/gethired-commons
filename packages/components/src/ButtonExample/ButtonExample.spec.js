import { render, fireEvent } from '@testing-library/react';
import Button from './ButtonExample';

describe('@components/Button', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByRole } = render(<Button type="button" />);

    // act
    const button = getByRole('button');

    // assert
    expect(button).toBeDefined();
  });

  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const { getByRole } = render(<Button type="button" className="foo" />);

    // act
    const button = getByRole('button');

    // assert
    expect(button).toHaveClass('foo');
  });

  it('Given a onClick prop it should be called when clicked', () => {
    // arrange
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Button type="button" onClick={handleClick}>
        ClickMe
      </Button>,
    );

    // act
    fireEvent.click(getByRole('button', { name: /ClickMe/i }));

    // assert
    expect(handleClick).toHaveBeenCalled();
  });
});
