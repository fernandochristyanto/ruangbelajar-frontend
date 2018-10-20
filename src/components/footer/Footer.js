import React from 'react'

const Footer = (props) => {
  return (
    <footer style={{ backgroundColor: '#363636', color: '#FFFFFF', display: 'flex' }}>
      <div style={{ display: 'flex', backgroundColor: 'inherit', flex: '1' }}>
        <div style={{ fontWeight: '600', flex: '1', padding: '1rem 2rem' }}>
          <div>
            <p><span>TENTANG</span><br />
              RuangBelajar.com</p>
          </div>
          <div>
            <a href="" style={{ display: 'block', color: 'inherit', textDecoration: 'none', fontWeight: '400' }}>Tentang Kami</a>
            <a href="" style={{ display: 'block', color: 'inherit', textDecoration: 'none', fontWeight: '400' }}>Bantuan</a>
          </div>
        </div>
        <div style={{ flex: '1', padding: '1rem 2rem' }}>
          <p><b>IKUTI KAMI DI</b></p>
        </div>
      </div>
      <div style={{ display: 'flex', backgroundColor: 'inherit', flex: '1' }}></div>
    </footer>
  )
}

export default Footer;