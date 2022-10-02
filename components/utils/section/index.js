import React from 'react';

// loading the sass style fot the component
import './index.scss';

function Section (props) {
  const {
    className = "",
    children,
    left,
    right,
    leftClassName = "",
    contentClassName = "",
    rightClassName = "",
    full = false,
    ...other
  } = props;

  if (full) {
    return <section
      className={"atom__section-container " + className}
      {...other}
    >
      {children}
    </section>;
  }

  return <section
    className={"atom__section-container grid-section-wrapper " + className}
    {...other}
  >
    <div className={"section-decorator-left " + leftClassName}>{left}</div>
    <div className={"section-content " + contentClassName}>{children}</div>
    <div className={"section-decorator-right " + rightClassName}>{right}</div>
  </section>;
}

export default Section;
