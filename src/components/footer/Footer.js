import React from 'react'

import facebook from '../../assets/img/facebook-r.png'
import gmail from '../../assets/img/gmail.png'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'

const Footer = (props) => {
  return (
    <footer style={{ backgroundColor: '#363636', color: '#FFFFFF', display: 'flex', position: 'absolute', bottom: 0, width: '100%' }}>
      <div style={{ display: 'flex', backgroundColor: 'inherit', flex: '1' }}>
        <div style={{ fontWeight: '600', flex: '1', padding: '1rem 2rem' }}>
          <div>
            <p><span>TENTANG</span><br />
              RuangBelajar.com</p>
          </div>
          <div style={{marginTop: '.5rem'}}>
            <a href="" style={{ display: 'block', color: 'inherit', textDecoration: 'none', fontWeight: '400' }}>Tentang Kami</a>
            <a href="" style={{ display: 'block', color: 'inherit', textDecoration: 'none', fontWeight: '400' }}>Bantuan</a>
          </div>
        </div>
        <div style={{ flex: '1', padding: '1rem 2rem' }}>
          <p><b>IKUTI KAMI DI</b></p>
          <div>
            <a href="" style={{ display: 'inline-block' }}><img src={facebook} style={{ width: '30px', height: '30px' }} /></a>
            <a href="" style={{ display: 'inline-block' }}><img src={twitter} style={{ width: '40px', height: '40px', marginLeft: '5px' }} /></a>
            <a href="" style={{ display: 'inline-block' }}><img src={gmail} style={{ width: '30px', height: '30px', marginLeft: '5px' }} /></a>
          </div>
          <div>
            <a href="" style={{ display: 'inline-block' }}><img src={instagram} style={{ width: '30px', height: '30px' }} /></a>
            <a href="" style={{ display: 'inline-block' }}><img src={youtube} style={{ width: '50px', height: '30px' }} /></a>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', backgroundColor: 'inherit', flex: '1' }}></div>
    </footer>
  )
}

export default Footer;