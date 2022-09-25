import React from 'react'
import {Link} from  "react-router-dom";
import img1 from "../assets/pizza.jpeg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{backgroundImage :`url(${img1})`}}>
        <div className="headerContainer" >
<h1> WOW-minoz Pizza </h1>
<Link to="/Menu">
<button> Order Now</button>
</Link>
        </div>
    </div>
  )
}

export default Home