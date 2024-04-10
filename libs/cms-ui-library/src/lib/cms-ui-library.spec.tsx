import { render } from '@testing-library/react';

import CmsUiLibrary from './cms-ui-library';
import React from 'react';

describe('CmsUiLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmsUiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
