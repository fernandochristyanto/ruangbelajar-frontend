import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LandingpageHeader from './components/header/landingpageHeader'
import Footer from './components/footer/Footer'
import steveJobs from './assets/img/Steve-Jobs-PNG-Image-92168.png'
import BlueButton from './components/buttons/BlueButton'

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <LandingpageHeader />
        <content style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: '6rem' }}>
            <h1 style={{ color: '#289ad6' }}>RuangBelajar.com</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laborum in porro illo dolorum molestias ullam, quia omnis ducimus illum tenetur debitis ad ea asperiores odio modi quos nihil fugit?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam iusto cupiditate minus molestiae, tenetur voluptate laborum! Saepe expedita corporis suscipit sint eveniet mollitia fuga dolorem ad earum nobis. Doloribus?
            </p>
            <BlueButton
              buttonText="Read More" />
          </div>
          <div>
            <img src={steveJobs} alt="" />
          </div>
        </content>
        <Footer />
      </div>
    );
  }
}

export default App;
