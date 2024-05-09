import { render } from '@testing-library/react';

import InvoiceFooter from './invoice-footer';
import React from 'react';

describe('InvoiceFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvoiceFooter />);
    expect(baseElement).toBeTruthy();
  });
});
