import { render, screen } from '@testing-library/react';
import React from 'react';

import HomePage from './src/app/page';

describe('App', () => {
  test('renders without crashing', () => {
    render(<HomePage />);

    const element = screen.getByText('new app');

    expect(element).toBeTruthy();
  });
});
