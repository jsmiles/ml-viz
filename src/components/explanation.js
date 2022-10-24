import React from 'react';
import classes from './explanation.module.css';

const Explanation = () => {
  return (
    <div className={classes.explanationBox}>
      <div className={classes.Description}>
        <p>
          I hope you have enjoyed using the app. It was built using the
          following tools.
        </p>
        <p>
          It is a <a href='https://reactjs.org/'>React</a> app which is a{' '}
          <a href='https://en.wikipedia.org/wiki/JavaScript'>JavaScript</a>{' '}
          library. The site is styled using{' '}
          <a href='https://github.com/css-modules/css-modules'>CSS Modules</a>.
          The obvious choice for handling forms was{' '}
          <a href='https://formik.org/'>formik</a>. State was managed using{' '}
          <a href='https://redux-toolkit.js.org/'>Redux Toolkit</a>. I used the{' '}
          <a href='https://github.com/mljs'>ML.JS</a> library for the machine
          learning model. Finally I visualised the data with the{' '}
          <a href='https://recharts.org/en-US/'>Recharts</a> library.
        </p>
        <p>
          You can find the source code for the project{' '}
          <a href='https://github.com/jsmiles/ml-viz'>here</a>. Or visit my
          portfolio website by clicking on the footer below.
        </p>
      </div>
    </div>
  );
};

export default Explanation;
