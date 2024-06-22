import { render } from '@testing-library/react';
import Navigation from '../navigation/navigation';
import React from 'react';
import axios from 'axios';
import { vi } from 'vitest';

describe('Navigation', () => {
  it('should render successfully', () => {
    vi.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });
});
