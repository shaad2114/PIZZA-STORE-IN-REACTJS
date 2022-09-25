import React from 'react'
import img1 from "../assets/pizza.jpeg"
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact">

            <div className="leftSide" style={{ backgroundImage: `url(${img1})` }}>
            </div>
            <div className="rightSide">

                <h1> CONTACT US</h1>
                <form id="contact-form" method='POST'>
                    <label htmlFor="name" >name </label>
                    <input name="name" placeholder="enter full name" type="text"/>
                    <label htmlFor="email" >email</label>
                    <input name="email" placeholder="enter email" type="email"/>
                    <label htmlFor="message" >message </label>
                   <textarea rows="6" placeholder="enter message" name="message" required>
                   </textarea>
                   <button type="submit"> Send </button>
                </form>

            </div>

        </div>
    )
}

export default Contact