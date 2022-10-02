import React from 'react';
import * as iconsList from '../';

import css from './styles.scss';

function Icons () {
  return (
    <div className={css["icons-list-story"]}>
      {
        Object.keys(iconsList).map((iconName, i) => {
          const Icon = iconsList[iconName];

          return <div className={css["icon-container-story"]} key={i}>
            <Icon />
            {iconName}
          </div>;
        })
      }
    </div>
  );
}

export {
  Icons as All
};

// export default {
//   title: 'Assets/Icons',
//   component: Icons,
// };