import React from 'react'
import Link from 'gatsby-link'
import './Threepage.css'

import designvalue from './pic/designvalue.jpeg'
import designvalues from './pic/designvalues.png'
import eye from './pic/eye.png'
import designLogic from './pic/designLogic.png'



const ThreePage = () => (
  <div className="p3div1">

    <img className="p2imgbgcs" src={designvalues} ></img>   
    <img className="p2imgbgc" src={designvalue} ></img> 
    

    <div className="t1">

      <h1 id="titleh1">行</h1>
      <h1 id="titleh2">为源于意识，意识来自记忆，记忆诞生于生活</h1> 

    </div>

    
    <div className="zhengwen">

       <h3>不同的意识，产生不同的关注点</h3>
       
       <p>设计在整条产业链中的价值通常很少被可视化，而产品研发、售卖的过程中，最终的目标是满足用户。
          在这期间，解析用户担心什么、需要什么、考虑什么，将对产品的销售、口碑造成决定性的影响，考虑的越清晰，产品将更易受用户喜爱，当然也更易卖出。</p>

        <p>这是一个有多样选择的时代，而怎么让用户清晰、快速的感知到产品的“好”，是产品的重要一环，</p>

        <img className="imgeye" src={eye} ></img> 

        <div id="pr">
        <p >设计在本质上，更多的是选择，选择不同的材料、方式、流程组合，优化现在的内容，满足有需求者的需求。在商业上有产品设计，即通过不同的形式、功能组合满足需求，在视觉上有平面、UI、包装等设计，在体验上有交互、服务等设计。万变不离其本质 - -  “选择”

            <br/>
            <br/>
            我们看到的，软件上要打动用户的，更多是在了解用户需要什么后，尽力的引导用户选择自己的商品或者服务。而如何有效的传达一些商品的信息，就是我们指的“UI/UX”</p>
        </div>



      <div id="erduan">
        <h3>不同的关注点,<br/>决定最后的选择</h3>
        <p>关于“人”的意识，更倾向于主观意识，更熟悉的说法是“看山不是，看山还是山”。 语言、文字的表达在信息交流上也有很多的问题，于是就只将总结的图示分享，个人对于设计价值的观念基本都在其中，更多的文字解释是多余的。</p>

        <img id="designLogic" src={designLogic}></img>

      </div>


       <Link className="back" to="/">   <p>返回首页</p> </Link>
    </div>

    

       
  </div>
)

export default ThreePage

