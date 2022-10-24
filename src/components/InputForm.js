import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './form.module.css';
import { useDispatch } from 'react-redux';
import { inputParameters } from '../features/form/formSlice';

let getSiblings = function (e) {
  let siblings = [];
  if (!e.parentNode) {
    return siblings;
  }
  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

const handleChange = (e) => {
  const targetNode = e.target.parentElement;
  const siblings = getSiblings(targetNode);
  siblings.forEach((el) => {
    el.removeAttribute('style');
  });
  targetNode.setAttribute('style', 'color: #ced4da; background-color: #495057');
};

const InputForm = () => {
  const [myValue, setMyValue] = useState({
    xpicked: 'sepalLength',
    ypicked: 'petalWidth',
    clusters: 2,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(inputParameters(myValue));
  }, [dispatch, myValue]);

  return (
    <div>
      <h2>Select Parameters</h2>
      <Formik
        initialValues={{
          xpicked: '',
          ypicked: '',
          clusters: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          // console.log(values);
          setMyValue(values);
        }}
        // innerRef={formRef}
      >
        {({ values }) => (
          <Form className={classes.FormContainer}>
            <div id='my-radio-group' className={classes.FieldHeading}>
              X Axis
            </div>
            <div
              role='group'
              aria-labelledby='my-radio-group'
              className={classes.FieldGroup}
              onChange={handleChange}
            >
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='xpicked'
                  value='sepalLength'
                  className={classes.FieldEl}
                />
                Sepal Length
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='xpicked'
                  value='sepalWidth'
                  className={classes.FieldEl}
                />
                Sepal Width
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='xpicked'
                  value='petalLength'
                  className={classes.FieldEl}
                />
                Petal Length
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='xpicked'
                  value='petalWidth'
                  className={classes.FieldEl}
                />
                Petal Width
              </label>
              {/* <div>Picked: {values.xpicked}</div> */}
            </div>

            <div id='my-radio-group' className={classes.FieldHeading}>
              Y Axis
            </div>
            <div
              role='group'
              aria-labelledby='my-radio-group'
              className={classes.FieldGroup}
              onChange={handleChange}
            >
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='ypicked'
                  value='sepalLength'
                  className={classes.FieldEl}
                />
                Sepal Length
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='ypicked'
                  value='sepalWidth'
                  className={classes.FieldEl}
                />
                Sepal Width
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='ypicked'
                  value='petalLength'
                  className={classes.FieldEl}
                />
                Petal Length
              </label>
              <label className={classes.FieldItem}>
                <Field
                  type='radio'
                  name='ypicked'
                  value='petalWidth'
                  className={classes.FieldEl}
                />
                Petal Width
              </label>
              {/* <div>Picked: {values.ypicked}</div> */}
            </div>

            <div id='my-radio-group' className={classes.FieldHeading}>
              Clusters
            </div>
            <div
              role='group'
              aria-labelledby='my-radio-group'
              className={classes.FieldGroup}
              onChange={handleChange}
            >
              <label className={classes.ClusterItem}>
                <Field
                  type='radio'
                  name='clusters'
                  value='2'
                  className={classes.FieldEl}
                />
                Two
              </label>
              <label className={classes.ClusterItem}>
                <Field
                  type='radio'
                  name='clusters'
                  value='3'
                  className={classes.FieldEl}
                />
                Three
              </label>
              <label className={classes.ClusterItem}>
                <Field
                  type='radio'
                  name='clusters'
                  value='4'
                  className={classes.FieldEl}
                />
                Four
              </label>
              {/* <div>Picked: {values.clusters}</div> */}
            </div>

            <button type='submit' className={classes.formSubmit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputForm;
