import { render } from '@testing-library/react';

import CmsUiLibrary from './cms-ui-library';

describe('CmsUiLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmsUiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
