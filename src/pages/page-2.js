import React from 'react'
import Link from 'gatsby-link'
import './SecondPage.css'
import img1 from './WechatIMG203.jpeg'
import img1a from './WechatIMG204.jpg'
import imgbgc from './1112.png'
import gif1 from './dongxiao.gif'
import video1 from './1557384396032894.mp4'


const SecondPage = () => (
  <div className="div1">
    <img className="imgbgc" src={imgbgc} ></img> 
    <div className="div800">
        <div className="div2">
            <h1 className="page2h1">Hi from the second page</h1>
            <p className="page2p">Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
            <img className="img1" data-src={img1a} src={img1}></img>
            <img className="gif1" src={gif1}></img>
            <video className="video1" src={video1}  controls="controls" autoplay="play" loop="loop"></video>

        </div> */}

    </div>
   
  </div>
)

export default SecondPage

