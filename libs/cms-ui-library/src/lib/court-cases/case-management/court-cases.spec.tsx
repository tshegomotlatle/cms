import { render } from '@testing-library/react';

import CourtCases from './court-cases';
import React from 'react';
import axios from 'axios';
import { vi } from 'vitest';
import { CourtCaseDto } from '../../data-transfer-object/court-case/court-case.dto';

describe('CourtCases', () => {
  it('should render successfully', () => {
      vi.spyOn(axios, 'post').mockResolvedValue(
        new CourtCaseDto()
      );
    const { baseElement } = render(<CourtCases />);
    expect(baseElement).toBeTruthy();
  });
});
