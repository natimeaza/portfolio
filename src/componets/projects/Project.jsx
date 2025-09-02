import React from 'react'
import "./project.css"
import todo from '../../img/Todo List App.jpeg'
import calculator from '../../img/ Calculator.jpeg'
import weather from '../../img/Weather Forecast Dashboard.jpeg'

const Project = ({toggle,setToggle}) => {
  return (
    <div id='project' className='proContainer' style={{background : toggle? " #101820" : "#fff", borderBottom : toggle? "solid 1px #66666620" : "solid 1px #6666661a"}}>
        <h1 style={{color : toggle? "yellow" : "rgb(238, 40, 40)"}}>Projects</h1>
    <div className='project'>
      <div><h2 style={{color : toggle? "yellow" : "purple"}}>TODO</h2><img src={todo} alt="" /></div>
      <div><h2 style={{color : toggle? "yellow" : "purple"}}>CALCULATOR</h2><img src={calculator} alt="" /></div>
      <div><h2 style={{color : toggle? "yellow" : "purple"}}>WEATHER</h2><img src={weather} alt="" /></div>
    </div>
    </div>
  )
}

export default Project
