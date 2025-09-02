import React from 'react'
import "./about.css"
import img from "../../img/Affordable Wordpress Development Company  in Kerala.jpeg"
const About = ({toggle,setToggle}) => {
  return (
    <div id='about' className='about' style={{background : toggle? "#101820ee" : "#fff" ,  borderBottom : toggle? "solid 1px #66666620" : "solid 1px #6666661a"}}>
      <h1 style={{ color: toggle? "yellow":"rgb(238, 40, 40)"}}>About me</h1>
      <p style={{color : toggle? "#FFF" :"gray"}}>
 <h3 style={{color : toggle? "yellow" : "purple"}}>My Journey</h3>
I began my journey in web development [mention year or duration ago, e.g., "five years ago"] and have worked on diverse projects that range from simple static websites to complex, data-driven applications. My journey has been driven by curiosity and a love for technology, constantly learning new tools and keeping up with the latest trends to stay at the forefront of web development.

 <h3 style={{color : toggle? "yellow" : "purple"}}>My Skills</h3>
I work primarily with [mention core technologies, e.g., JavaScript, React, Node.js, etc.], but I'm always eager to dive into new languages and frameworks. Whether it's building a beautiful UI, optimizing backend services, or ensuring responsive design across devices, I bring a comprehensive approach to development.

 <h3 style={{color : toggle? "yellow" : "purple"}}>My Philosophy</h3>
I believe in the power of collaboration and open communication. Working closely with clients and team members to understand the core of each project ensures that the final product is not only functional but exceeds expectations. I aim to create websites that are intuitive, engaging, and scalable.

 </p>
      <img src={img} alt="" />
    </div>
  )
}

export default About
