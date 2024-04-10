import { render } from '@testing-library/react';

import Login from './login';
import React from 'react';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
});
