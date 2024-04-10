import { render } from '@testing-library/react';

import Register from './register';
import React from 'react';

describe('Register', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Register />);
    expect(baseElement).toBeTruthy();
  });
});
