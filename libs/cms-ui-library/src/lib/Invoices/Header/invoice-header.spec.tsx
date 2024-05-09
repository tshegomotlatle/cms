import { render } from '@testing-library/react';

import InvoiceHeader from './invoice-header';
import React from 'react';

describe('InvoiceHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvoiceHeader />);
    expect(baseElement).toBeTruthy();
  });
});
