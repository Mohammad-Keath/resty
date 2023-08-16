import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App (props){
  const [mydata,setMydata]= useState(null)
  const [reqparams,setReqparams]= useState({})
 

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setMydata(data)
    setReqparams(requestParams)
  }

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {reqparams.method}</div>
        <div>URL: {reqparams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={mydata} />
        <Footer />
      </React.Fragment>
    );
}

export default App;
