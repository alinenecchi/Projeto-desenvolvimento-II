import React from 'react';
import Section from '..';

import './styles.scss';

export default {
  title: 'Utils/Section'
};

function Inline() {
  return (
    <div style={{ height: '100%' }} className="atom__section-el-container">
      <Section
        left={<div>A</div>}
        leftClassName="tmp-leftDecorator"
        right={<div>C</div>}
        rightClassName="tmp-rightDecorator"
        contentClassName="tmp-content">
        Body of my section :)
      </Section>
    </div>
  );
}

export function Simple() {
  return (
    <div style={{ height: '100%' }} className="atom__section-el-container">
      <Section>Body of my section :)</Section>
    </div>
  );
}

export function Full() {
  return (
    <div style={{ height: '100%' }} className="atom__section-el-container">
      <Section
        contentClassName="tmp-content"
        full
        style={{ backgroundColor: '#900', color: 'white' }}>
        Body of my section :)
      </Section>
    </div>
  );
}

export { Inline };
