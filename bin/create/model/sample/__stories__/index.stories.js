import React from 'react';
import %CamelName% from '../';

import css from './styles.module.scss';

export default {
  title: '%upperKind%s/%CamelName%',
  argTypes: {
    // TODO: add your props here (reference: https://storybook.js.org/docs/react/essentials/controls#annotation)
    sample: {
      description: 'This is a sample param',
      options: ['Yes', 'Maybe'],
      // used by storybook controllers
      control: {
        type: 'select',
        default: 'Yes'
      }
    }
  }
};

function %CamelName%El (props) {
  // keep the `className="%kind%__%dashed-name%-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div
    style={{height: '100%'}}
    className={css["%kind%__%dashed-name%-el-container"]}
  >
    <%CamelName% {...props} />
  </div>;
}

// %CamelName%El.parameters = {
//   design: {
//     type: 'figma',
//     url: "add a url for the figma project here"
//   },
// };

export {
  %CamelName%El as %CamelName%
};
