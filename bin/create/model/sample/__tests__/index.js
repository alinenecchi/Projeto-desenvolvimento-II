import React from 'react';
import { render } from '@testing-library/react';
import Comp from '..';
import { BrowserRouter as Router } from "react-router-dom";
import { PageProvider } from 'providers/page';
import * as stories from '../__stories__/index.stories.js';

// tests if the main component is rendering
it('renders the component with the correct container className', () => {
  const {
    container
  } = render(<Router><PageProvider><Comp /></PageProvider></Router>);
  expect(container.firstChild)
    .toHaveClass('%kind%__%dashed-name%-container');
});

// tests if all stories are rendering
for (let storyName in stories) {
  const Story = stories[storyName];
  if (typeof Story === 'function') {
    it(`renders story ${storyName}`, () => {
      const {
        container
      } = render(<Router><PageProvider><Story /></PageProvider></Router>);
      expect(container.firstChild)
        .toHaveClass('%kind%__%dashed-name%-el-container');
    });
  }
}
