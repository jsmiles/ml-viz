import React from 'react';
import classes from './description.module.css';

const Description = () => {
  return (
    <div className={classes.descriptionBox}>
      <span className={classes.Description}>
        <h1>Welcome</h1>
        <p>
          Welcome to this website! It has been built as a portfolio project
          designed to display a Machine Learning model. Below you will find a
          chart and a form. You can select the parameters in the form and when
          it is submitted the results will be displayed. You can choose what
          data should be contained in the plot and how many clusters the model
          should predict. The data set we are using is the famous{' '}
          <a href='https://en.wikipedia.org/wiki/Iris_flower_data_set'>Iris</a>{' '}
          data set where you can compare the petal and sepal lengths and widths.
        </p>
      </span>
    </div>
  );
};

export default Description;
