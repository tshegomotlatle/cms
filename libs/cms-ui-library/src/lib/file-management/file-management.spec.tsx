import { render } from '@testing-library/react';

import FileManagement from './file-management';
import axios from 'axios';
import React from 'react';
import { vi } from 'vitest';

describe('FileManagement', () => {
  it('should render successfully', () => {
    vi.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<FileManagement />);
    expect(baseElement).toBeTruthy();
  });
});
