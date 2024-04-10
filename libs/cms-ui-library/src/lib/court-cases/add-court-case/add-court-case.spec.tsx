import { render } from '@testing-library/react';

import AddCourtCase from './add-court-case';
import React from 'react';

describe('AddCourtCase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddCourtCase />);
    expect(baseElement).toBeTruthy();
  });
});
