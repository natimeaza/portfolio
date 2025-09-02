import React,{useState} from 'react'
import Nav from './componets/NavBar/nav'
import Home from './componets/Home/Home'

import About from './componets/About/About'
import Project from './componets/projects/Project'
import Contact from './componets/contact/Contact'

const App = () => {
  const [toggle,setToggle] = useState(true) 
  return (
    <div >
    <Nav toggle={toggle} setToggle={setToggle} />
    <Home toggle={toggle} setToggle={setToggle} />
    <About toggle={toggle} setToggle={setToggle} />
    <Project toggle={toggle} setToggle={setToggle} />
    <Contact toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App
