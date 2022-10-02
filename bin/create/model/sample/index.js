import React from 'react';

// loading the sass style fot the component
import css from './styles.module.scss';

/**
 * %upperKind% %CamelName%
 * 
 * %description%
 */
function %CamelName% (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css["%kind%__%dashed-name%-container"]} ${className}`}
    {...other}
  >
    {/*
       // TODO: Add your component's body here.
    */}
    Component %kind% "%name%" is working.<br/>

    {children}
  </div>;
}

export default %CamelName%;
