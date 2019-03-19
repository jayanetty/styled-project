import React, { Component } from 'react';
// import SampleOne from './components/sampleOne';
import Styleguide from './components/StyleGuide/styleguide';
import {GlobalStyle} from './components/Theme';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle/>
          {/* <SampleOne /> */} 

          <Styleguide />
      </div>
    );
  }
}

export default App;
