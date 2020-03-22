import React from 'react';
import './App.css';
import Loader from './components/loader';
import UploadImageContainer from './container/uploadImageContainer'

function App(props) {

  return (
    <>
      <Loader />
      <UploadImageContainer />
    </>
  );
}

export default App;
