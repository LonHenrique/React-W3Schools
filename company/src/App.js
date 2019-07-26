import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'
import Main from './Components/Main'
import Services from './Components/Services'

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <div className='App'>
          <MainHeader />

          <Route path='/' exact component = { Main } />
          <Route patch='/Services' component = { Services } />

          <Footer />
        </div>
      </BrowserRouter>
     );
  }
}

export default App;