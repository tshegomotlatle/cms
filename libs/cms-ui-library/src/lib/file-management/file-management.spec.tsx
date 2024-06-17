import { render } from '@testing-library/react';

import FileManagement from './file-management';

describe('FileManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileManagement />);
    expect(baseElement).toBeTruthy();
  });
});
