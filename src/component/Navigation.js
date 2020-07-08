import React from 'react'
import headerCSS from './header.css'

function Navigation(props) {
  return (
    <div>
        <ul className="sidenav">
            {/*<li><a className="active" href="#home">Home</a></li>*/}
            <li><a href="#home">Home</a></li>
            {/*<li><a href="#experience">Experience</a></li>*/}
            <li><a href="#projects">Projects</a></li>
            <li><a href={'https://www.youracclaim.com/badges/c6a53296-3c2b-4d5b-88ab-e9e1048ad816'}>Java Cert</a></li>
            <li><a href={'https://github.com/beta5553'}>GitHub</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navigation