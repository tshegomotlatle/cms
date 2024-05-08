import { render } from '@testing-library/react';

import CalendarUi from './calendar-ui';
import React from 'react';

describe('CalendarUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalendarUi />);
    expect(baseElement).toBeTruthy();
  });
});
