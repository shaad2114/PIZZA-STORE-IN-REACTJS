import React from 'react'
import "../styles/About.css"
import img1 from "../assets/pizzas1.jpg"

function About() {
    return (
    <div className="about">
    <div className="aboutTop" style={{backgroundImage :`url(${img1})`}}> 
    </div>
    <div className="aboutBottom"> 
    <h1>ABOUT US</h1>
    <p>
        aaaaaaaaaaaaaaaabbbbbbbbbbbbccccccccccccccdddddddd
        eeeeeeeeeeffffffffffffggggggggggghhhhhhhhhhiiiiiii
        jjjjjjjjjjjkkkkkkkkkkkkkkkklllllllllllllllmmmmmmmmmmn
        nnnnnnonooooooopoqqqqqqqrrrrrrrrrrrrssssssssssssssttt
        ttttttttttuuuuuuuuuuvvvvvvvvvvvv
    </p>
    </div>
    </div>
    )
}

export default About