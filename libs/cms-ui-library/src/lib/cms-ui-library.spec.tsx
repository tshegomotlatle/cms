import { render } from '@testing-library/react';

import CmsUiLibrary from './cms-ui-library';
import axios from 'axios';

describe('CmsUiLibrary', () => {
  it('should render successfully', () => {
    jest.spyOn(axios, 'post').mockResolvedValue([]);
    const { baseElement } = render(<CmsUiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
