import { render } from '@testing-library/react';

import React from 'react';

describe('tesy', () => {
  it('should render successfully', () => {
    const test = document.getElementById('root') as HTMLElement;

    expect(test).toBeNull();
  });
});
