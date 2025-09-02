import React from 'react'
import "./contact.css"
import x from '../../img/X Social Media Round icon PNG and SVG Vector Free Download.jpeg'
import telegram from '../../img/Telegram Logo PNG - Free Download.jpeg'
const Contact = ({toggle,setToggle}) => {
  return (
    <div id='contact' className='contact' style={{background : toggle? "#101820ee" : "#fff"}}>
        <h1 style={{color : toggle? "yellow" : "rgb(238, 40, 40)"}}>Contact Me</h1>
        <p style={{color : toggle? "#FFF" :"gray"}} className='title'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima suscipit voluptatibus sit tempore, ut natus earum asperiores ex et doloremque praesentium, blanditiis fuga, repellat aperiam! Recusandae consequuntur ullam nulla.</p>
        <div className="display">
            <div className="adress" style={{borderRight: toggle ? '1px solid #66666620 ' : '1px solid #6666661a'}}>
                <h1 style={{color : toggle? "yellow" : "rgb(238, 40, 40)"}}>Get In touch</h1>
                <p style={{color : toggle? "#FFF" :"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat pariatur, soluta recusandae accusamus ex necessitatibus dolorem iste minus optio? Libero asperiores odit ut ab, in unde temporibus explicabo consequuntur.</p>
                <h2 style={{color : toggle? "yellow" : "purple"}}>Address</h2>
                <p style={{color : toggle? "#FFF" :"gray"}}>Ethiopia-Bahirdar</p>
                <h2 style={{color : toggle? "yellow" : "purple"}}>Phone number</h2>
                <p style={{color : toggle? "#FFF" :"gray"}}>+251928303348</p>
                <h2 style={{color : toggle? "yellow" : "purple"}}>E-mail</h2>
                <p style={{borderBottom : toggle? "solid 1px #66666620" : "solid 1px #6666661a", padding: "20px"}}>natimeaza4@gmail.com</p>
                

            </div>
            <div className="inputArea" style={{background : toggle? "#101820ee" : "aliceblue" }}>
                <h1 style={{color : toggle? "yellow" : "rgb(238, 40, 40)"}}>Send a message</h1>
                <form action="">
                <input spellCheck='false' style={{background : toggle? "#101820ee" : "aliceblue"}} type="text" placeholder='name' />
                <input spellCheck='false' style={{background : toggle? "#101820ee" : "aliceblue"}} type="email" placeholder='email-address' />
                <textarea spellCheck='false' style={{background : toggle? "#101820ee" : "aliceblue"}} name="message" id="demo" placeholder='message'></textarea>
                <a href="https://t.me/nat_ih" target="_blank" rel="noopener noreferrer"  className='btn'>submit</a>
                </form>
            </div>
        </div>
        <div className='social'>
  <h2 style={{color : toggle? "yellow" : "purple"}} className='social'>follow me :</h2>
  <a href="https://twitter.com/nati92192172330
" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="Twitter" />
  </a>
  <a href="https://t.me/nat_ih" target="_blank" rel="noopener noreferrer">
    <img src={telegram} alt="Telegram" />
  </a>
</div>
    </div>
  )
}

export default Contact
