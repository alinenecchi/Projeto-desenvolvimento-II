import React from 'react';
import css from './index.scss';

const Layout = ({children}) => {

  return (
    <div className={css["layout"]} data-content-wrapper="true">
      {children}
    </div>
  );
};

export default Layout;