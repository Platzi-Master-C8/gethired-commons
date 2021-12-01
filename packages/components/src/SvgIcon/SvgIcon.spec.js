import { render, screen } from '@testing-library/react';
import SvgIcon from './SvgIcon';

describe('@Components/SvgIcon', () => {
  it('Given the SvgIcon Component, when the user provide children inside the component then the component will render it', () => {
    // arrange
    render(
      <SvgIcon title="icon">
        <path d="foo" />
      </SvgIcon>,
    );

    // act
    const svg = screen.getByTitle('icon');

    // assert
    expect(svg).toBeDefined();
  });
});
