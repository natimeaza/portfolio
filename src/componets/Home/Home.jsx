import React from 'react'
import img1 from "../../img/IMG_2702.jpg"
import "../Home/home.css"


const Home = ({toggle,setToggle}) => {
  
  return (
    <>
    <div className='home' id='home' style={{background : toggle? " #101820" : "#fff" ,  borderBottom : toggle? "solid 1px #66666620" : "solid 1px #6666661a"}}>
      <div className="imageCard">
        <img src={img1} alt="" />
        </div>
        
      <p style={{color : toggle? "#FFF" :"gray"}}> <h1 style={{color : toggle? "yellow" : "rgb(238, 40, 40)"}}>Hello</h1> welcome to my portfolio!
         Im Natnael Mulugeta, a passionate web developer committed to creating meaningful, user-centered solutions. My work combines technical expertise with creativity to bring ideas to life, whether it's through designing intuitive interfaces, developing seamless user experiences, or crafting striking visuals.
         In this portfolio, you'll find a selection of my recent projects showcasing my skills in [mention your primary skills, e.g., front-end development, design, project management]. Each project highlights my approach to problem-solving, dedication to detail, and commitment to delivering impactful results.
         Thank you for stopping by! I look forward to connecting and exploring how we can bring your ideas to life together.</p>
  
    </div>
    </>
  )
}

export default Home
