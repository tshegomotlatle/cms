import { render } from '@testing-library/react';

import CalendarUi from './calendar-ui';
import React from 'react';
import axios from 'axios';
import { vi } from 'vitest';

describe('CalendarUi', () => {
  it('should render successfully', () => {
    vi.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<CalendarUi />);
    expect(baseElement).toBeTruthy();
  });
});
