import { render } from '@testing-library/react';

import InvoiceMenu from './invoice-menu';

describe('InvoiceMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvoiceMenu />);
    expect(baseElement).toBeTruthy();
  });
});
