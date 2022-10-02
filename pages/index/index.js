import React from 'react';
import { PageProvider } from '~/providers/page';
// Footer

import css from './index.scss';

function Index(props) {
  const { className = '', children, ...other } = props;

  return<>
    <div className={`${css['molecule__teste-container']} ${className}`}>
      Hello
    </div>
  </>;
}

export default function IndexPage(props) {
  const { children, ...other } = props;
  return (
    <PageProvider>
      <Index {...other} />
      {children}
    </PageProvider>
  );
}
