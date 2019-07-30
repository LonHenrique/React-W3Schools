import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'
import Main from './Components/Main'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Precos from './Components/Precos'
import Contato from './Components/Contato'

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <div className='App'>
          <MainHeader />

          <Route path='/' exact component = { Main } />
          <Route path='/Services' component = { Services } />
          <Route path='/Portfolio' component = { Portfolio } />
          <Route path='/Precos' component = { Precos } />
          <Route path='/Contato' component = { Contato } />
          

          <Footer />
        </div>
      </BrowserRouter>
     );
  }
}

export default App;