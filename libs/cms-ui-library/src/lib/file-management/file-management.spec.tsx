import { render } from '@testing-library/react';

import FileManagement from './file-management';
import axios from 'axios';

describe('FileManagement', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<FileManagement />);
    expect(baseElement).toBeTruthy();
  });
});
