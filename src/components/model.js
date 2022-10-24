import React, { Fragment, useEffect } from 'react';
import kmeans from 'ml-kmeans';
import { useSelector, useDispatch } from 'react-redux';
import { builtCube } from '../features/model/modelSlice';
import { irisData } from './iris';
import { prediction } from '../features/prediction/predictionSlice';

const BuildCube = (xVal, yVal) => {
  const newArray = irisData.map((el) => ({
    x: el[xVal],
    y: el[yVal],
  }));
  return newArray;
};

function RandomCentroids(dataset, k) {
  let num = 0;
  let centroids = [];
  while (num < k) {
    const randInt = Math.floor(Math.random() * (150 - 0 + 1) + 0);
    const centroid = [dataset[randInt].x, dataset[randInt].y];
    centroids.push(centroid);
    num++;
  }
  return centroids;
}

const Model = (props) => {
  const { xpicked, ypicked, clusters } = useSelector((store) => store.form);

  const dispatch = useDispatch();

  useEffect(() => {
    const cube = BuildCube(xpicked, ypicked);
    dispatch(builtCube(cube));
  }, [xpicked, ypicked, dispatch]);

  const { cubeData } = useSelector((store) => store.model);

  const centroids = RandomCentroids(cubeData, Number(clusters));
  const data = cubeData.map((el) => [el.x, el.y]);

  let ans = kmeans(data, Number(clusters), { initialization: centroids });

  useEffect(() => {
    dispatch(prediction(ans.clusters));
  }, [ans, dispatch]);

  return <Fragment></Fragment>;
};

export default Model;
