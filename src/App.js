import React from 'react';
import {Brand,CTA,Navbar} from './components/index'
import {Blog,Feature,Footer,Header,Possibility,WhatGPT3} from './containers/index'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
