import { render } from '@testing-library/react';

import CourtCases from './court-cases';
import React from 'react';
import axios from 'axios';

describe('CourtCases', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<CourtCases />);
    expect(baseElement).toBeTruthy();
  });
});
