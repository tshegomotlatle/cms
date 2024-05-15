import { render } from '@testing-library/react';

import AddInvoice from './add-invoice';

describe('AddInvoice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddInvoice />);
    expect(baseElement).toBeTruthy();
  });
});
