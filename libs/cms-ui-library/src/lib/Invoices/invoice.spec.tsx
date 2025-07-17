import { render } from '@testing-library/react';

import Invoice from './invoice';
import React from 'react';
import axios from 'axios';
describe('Invoice', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue({ data: {} } as any);
    const { baseElement } = render(<Invoice />);
    expect(baseElement).toBeTruthy();
  });
});
