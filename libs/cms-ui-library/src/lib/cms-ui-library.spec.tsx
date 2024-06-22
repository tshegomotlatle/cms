import { render } from '@testing-library/react';

import CmsUiLibrary from './cms-ui-library';
import React from 'react';
import axios from 'axios';
import { vi } from 'vitest';

describe('CmsUiLibrary', () => {
  it('should render successfully', () => {
    vi.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<CmsUiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
