import React, { Fragment } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import classes from './viz.module.css';
import InputForm from './InputForm';
import { useSelector } from 'react-redux';

const Viz = () => {
  const { cubeData } = useSelector((store) => store.model);
  const { predictions } = useSelector((store) => store.prediction);

  let zeroArray = [];
  let oneArray = [];
  let twoArray = [];
  let threeArray = [];

  cubeData.map((obj, index) => {
    if (predictions[index] === 0) {
      zeroArray.push(obj);
    } else if (predictions[index] === 1) {
      oneArray.push(obj);
    } else if (predictions[index] === 2) {
      twoArray.push(obj);
    } else if (predictions[index] === 3) {
      threeArray.push(obj);
    }

    return 1;
  });

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.vizContainer}>
          <ResponsiveContainer width='90%' height='90%'>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type='number' dataKey='x' name='Sepal Width' />
              <YAxis type='number' dataKey='y' name='Petal Length' />
              <Legend />
              <Scatter name='One' data={zeroArray} fill='green' />
              <Scatter name='Two' data={oneArray} fill='red' />
              <Scatter name='Three' data={twoArray} fill='blue' />
              <Scatter name='Four' data={threeArray} fill='purple' />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.formContainer}>
          <InputForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Viz;
