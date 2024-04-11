import { render } from '@testing-library/react';

import CourtCases from './court-cases';
import React from 'react';

describe('CourtCases', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourtCases />);
    expect(baseElement).toBeTruthy();
  });
});
