import { useState } from "react";
import image from './fish.jpeg';
import Footer from "./Footer";
import './App.css';


function About() {
    
    const result = "Giove, operating since 1967 has gained a reputation for its relaxed atmosphere, good food, fine wine and friendly service. Popular with many celebrities, it has built up a regular clientele over the years and everyone is considered part of the family Summer or winter, there's something for everyone.  In winter Giove becomes the cosy choice for Christmas parties. All year round Giove caters for special occasions. Look out for the traditional Spanish music nights to make your evening that little bit extra special.";
  
    const [showMore, setShowMore] = useState(false);
    return(
        <div>  
    
           <div className='about_container'>  
               <img className='about_img' src={image}  alt="food" />
                <div className='about_box'> 
                 <h2 className='about_title'>Our restaurant</h2>
                   <p className='about_par'>{showMore ? result : result.substring(0,170)+ "... "}    <button className="btn_about" onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less":"Show more"}</button></p>

                </div>
                </div>
                <Footer/>
            </div>
 
    )
}
export default About;