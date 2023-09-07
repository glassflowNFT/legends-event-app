import React from 'react'
import Navbar from './Navbar'
import Footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import Button from 'react-bootstrap/Button';
import keplrLogo from "../assets/keplrlogo.png";

function Connect() {
  return (
    <div className='base'>
       <Navbar />
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <div className='container'>
            <div className='connect-holder'>
              <p className='connect-plain-text pb-3'>Connect and display your QR code for access to The Legends Of Hashish Event. </p>
              <Button type='button' className='btn btn-warning'> Connect Keplr Wallet</Button>
              <img className='logo' src={keplrLogo}/>
            </div>
          </div>
          <img className="footer" src={Footer} />
    </div>
  )
}

export default Connect