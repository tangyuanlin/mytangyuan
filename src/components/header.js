import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to='/aa'>Tangyuan Design </Link> */}
      {/* <Link to='/aa'> aa </Link> */}
      {/* <Link to='/aa'> aa </Link> */}
      <Link to='/'> Tangyuan Design </Link>
      {/* <Link to='/buy'> <button>Log in</button> </Link> */}
    </div>
    <div className="HeaderBackgroundcolor"> </div>
    
  </div>
)

export default Header
