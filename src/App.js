import { Fragment } from 'react';
import './App.css';
import Description from './components/description';
import Explanation from './components/explanation';
import Footer from './components/footer';
import Header from './components/header';
import Model from './components/model';
import Viz from './components/viz';

function App() {
  return (
    <Fragment>
      <Header />
      <Description />
      <Viz />
      <Model />
      <Explanation />
      <Footer />
    </Fragment>
  );
}

export default App;
