import { render } from '@testing-library/react';

import Invoice from './invoice';
import React from 'react';
import axios from 'axios';
import { vi } from 'vitest';
import { CourtCaseDto } from '../data-transfer-object/court-case/court-case.dto';

describe('Invoice', () => {
  it('should render successfully', () => {
    vi.spyOn(axios, 'post').mockResolvedValue(new CourtCaseDto());
    const { baseElement } = render(<Invoice />);
    expect(baseElement).toBeTruthy();
  });
});
