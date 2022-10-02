import React from 'react';
import { All as Icons } from '../icons/stories/index.stories';
import css from './styles.scss';

function Colors () {

  return <div className={css["colors-container"]}>
    <div className={`${css["heading"]}`}>
      <div></div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <div className={`${css["grid"]}`}>
      <div className={`${css["line"]} ${css["primary"]}`}>
        <div className={`${css["label"]}`}>Primary</div>
        <div
          className={`${css["square"]} 
          ${css["p-1"]}`} data-scss-color-name="$primary-white"
        ></div>
        <div
          className={`${css["square"]}
          ${css["p-2"]}`} data-scss-color-name="$primary-off-white"
        ></div>
        <div
          className={`${css["square"]} ${css["p-3"]}`}
          data-scss-color-name="$primary-black"
        ></div>
        <div
          className={`${css["square"]} ${css["p-4"]}`}
          data-scss-color-name="$primary-red"
        ></div>
      </div>
      <div className={`${css["line"]} ${css["secondary"]}`}>
        <div className={`${css["label"]}`}>Secondary</div>
        <div
          className={`${css["square"]} ${css["sc-1"]}`}
          data-scss-color-name="$secondary-dark-red"
        ></div>
        <div
          className={`${css["square"]} ${css["sc-2"]}`}
          data-scss-color-name="$secondary-orange"
        ></div>
        <div
          className={`${css["square"]} ${css["sc-3"]}`}
          data-scss-color-name="$secondary-yellow"
        ></div>
      </div>
    </div>
  </div>;
}

function Texts () {
  return <div>
    <div style={{padding: '10px'}}>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Title 3</h3>
      <h4>Headline 4</h4>
      <p><span>Regular text</span></p>
      <p><i>Italic</i></p>
      <p><b>Bold</b></p>
      <p><b><i>Bold &amp; Italic</i></b></p>
    </div>
  </div>;
}

const Styleguide = () => {
  return <div style={{
    margin: '10px'
  }}>
    <h4>Colors</h4>
    <Colors />
    <h4>Texts</h4>
    <Texts />
    <h4>Icons</h4>
    <Icons />
  </div>;
};

export default {
  title: 'Assets/Styleguide',
  component: Styleguide,
};

export {
  Styleguide as All,
  Colors,
  Texts,
  Icons
};
