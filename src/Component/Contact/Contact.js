import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contaier-fluid pb-4  pt-4 cardcontact text-light'>
         <div className='container'>
      <h3>Contact Us</h3>

<div class="container">
  <form>
    <label for="fname">👤Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

   
 <label for="lname">📞Phone</label>
    <input type="number" id="lname" name="lastname" placeholder="Your phone number"/>

    
    <label for="subject">✉️Message</label>
    <textarea id="subject" name="subject" placeholder="Write here.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div>
    </div>

    </div>
  )
}

export default Contact
