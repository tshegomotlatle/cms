import { render } from '@testing-library/react';

import CalendarUi from './calendar-ui';

describe('CalendarUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalendarUi />);
    expect(baseElement).toBeTruthy();
  });
});
