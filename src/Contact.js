import imageContact from "./map.png";
import Slides from "./Slides.js";

import "./App.css";

function Contact() {
  return (
    <div>  
    <div className="contact_container ">
 
      <div className="contact_box">
      
          <h1>Contacts</h1>
          <hr/>
          <div className="contact_address">
            <p>Our address:</p>
            <p>London, Manchester street, 20</p>
          </div>

          <div className="contact_address">
            <p>Our e-mail:</p>
            <p>aaaa@gmail.com</p>
          </div>
  
      </div>
      <Slides />

    </div>

   
    <img className="contact_img" src={imageContact} alt="map" />

    </div>
  );
}
export default Contact;
