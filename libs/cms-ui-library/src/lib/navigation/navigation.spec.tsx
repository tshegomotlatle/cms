import { render } from '@testing-library/react';
import Navigation from '../navigation/navigation';
import axios from 'axios';

describe('Navigation', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });
});
