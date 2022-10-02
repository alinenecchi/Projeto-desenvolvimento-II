import React from 'react';
import { render } from '@testing-library/react';
import Comp from '..';
import * as stories from '../__stories__/index.stories.js';

// tests if the main component is rendering
it('renders the component with the correct container className', () => {
  const { container } = render(<Comp />);
  expect(container.firstChild).toHaveClass('atom__section-container');
});

// tests if all stories are rendering
for (let storyName in stories) {
  const Story = stories[storyName];
  if (typeof Story === 'function') {
    it(`renders story ${storyName}`, () => {
      const { container } = render(<Story />);
      expect(container.firstChild).toHaveClass('atom__section-el-container');
    });
  }
}
