import React,{useState} from 'react'
import"./nav.css"
import {Link} from 'react-scroll'
import logoNight from "./assets/day.png"
import logoLight from "./assets/night.png"
const Nav = ({toggle,setToggle}) => {
  const [click, setClick] = useState(false)

  const closeMenu = () => setClick(true)
  
  
   return (
    <nav style = { {background: toggle? " #101820ee" :"rgb(231, 229, 229)"}} >
        <ul className='container' style={{background : toggle? '#101820':'#fff'}}>
            <li><Link to='home' spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}  style={{ color:toggle ? "yellow":"crimson"}} className='Home'>Home</Link></li>
            <li><Link to='about' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}  style={{ color:toggle ? "yellow":"crimson"}} >About</Link></li>
            <li><Link to='project' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}  style={{ color:toggle ? "yellow":"crimson"}} href="">Project</Link></li>
            <li><Link to='contact' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}  style={{ color:toggle ? "yellow":"crimson"}} href="">Contact</Link></li>
            <li><img onClick={() => {setToggle(toggle ? false : true)}}  src={toggle ? logoNight:logoLight} alt="" /></li>
        </ul>
      
    </nav>
  )
}

export default Nav
