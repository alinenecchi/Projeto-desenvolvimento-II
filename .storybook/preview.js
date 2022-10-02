import React from 'react';

import { action } from '@storybook/addon-actions';
import { jsxDecorator } from "storybook-addon-jsx";
import { withDesign } from 'storybook-addon-designs'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
  Stories,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { PageProvider } from '~/providers/page';

// .storybook/config.js
import '!style-loader!css-loader!sass-loader!../utils/styles/_colors.scss';
import '!style-loader!css-loader!sass-loader!../utils/styles/_reset.scss';

import { setConfig } from 'next/config';
import { configure } from '@storybook/react';

import { BrowserRouter } from "react-router-dom";
import Router from 'next/router';

Router.router = {
  push() {},
  prefetch(...args) {
    action('nextRouter.prefetch')(...args);
    return Promise.resolve();
  },
};

setConfig({
	publicRuntimeConfig: {
		// it just has to exist
	},
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../components', true, /\.stories\.tsx?$/), module);


function withRouter (Story) {
  return <BrowserRouter>
    <PageProvider>
      <Story />
    </PageProvider>
  </BrowserRouter>;
}

export const decorators = [
  jsxDecorator,
  withDesign,
  withRouter
];

export const parameters = {
  jsx: {
    skip: 1
  },
  controls: { 
    expanded: true,
    hideNoControlsWarning: true
   },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable story={PRIMARY_STORY} />
        <Primary />
        <Stories />
      </>
    ),
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

