import { render } from '@testing-library/react';

import CalendarUi from './calendar-ui';

import axios from 'axios';
describe('CalendarUi', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<CalendarUi />);
    expect(baseElement).toBeTruthy();
  });
});
