import { render, screen } from '@testing-library/react';

import HomePage from './src/pages';

describe('App', () => {
  it('renders without crashing', () => {
    render(<HomePage />);

    const element = screen.getByText('dog');

    expect(element).toBeTruthy();
  });
});
