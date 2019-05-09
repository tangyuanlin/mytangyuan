import React from 'react'
import Link from 'gatsby-link'
import './SecondPage.css'
import img1 from './WechatIMG203.jpeg'
import video1 from './1557384396032894.mp4'


const SecondPage = () => (
  <div className="div1">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <img className="img1" src={img1}></img>
    <video src={video1}  controls="controls" autoplay="play" loop="loop"></video>

   
  </div>
)

export default SecondPage
