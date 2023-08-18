import React from "react";
import "../styles/index.css"
import Frame36 from '../component/Assets/Frame 36.png';
import LinkedIn from '../component/Media/linkedin-logo.png';
import Instagram from '../component/Media/insta-logo.png';
import Youtube from '../component/Media/icon3.png';
import Facebook from '../component/Media/facebook-logo.png';

function Contact(props) {
    return(
        <>
        {/* <NavBar /> */}
        <h1>Contact Us</h1>
        <div className="contact-wrap1">
                <div className="contact-card">
                    <img src={Frame36} width={100
                    } height={100} />
                    <h4>OUR MAIN OFFICE </h4>
                   <p className="contact-card-text"> House ABC, <br/>str 123, <br/>Abuja.<br/>
                    Nigeria.</p>
                </div>
                <div className="contact-card"> <img src={Frame36} width={100} height={100} />
                <h4>PHONE NUMBER </h4>
                <p className="contact-card-text">080123456567 <br/>
                080123456567</p>

                </div>
                <div className="contact-card"> <img src={Frame36} width={100} height={100
                } />
                 <h4>EMAIL</h4>
                <p className="contact-card-text email">hello@greenlifestyle@gmail.com</p>
                </div>
                <div className="contact-card"> <img src={Frame36} width={100} height={100} />
                 <h4>OUR SOCIALS </h4>
                 <div className="contact-social-icons">
                    <img src={LinkedIn}/>
                    <img src={Instagram}/>
                    <img src={Youtube}/>
                    <img src={Facebook}/>
                 </div>
                </div>
        </div>
        <div className="contact-wrap2">
            <div className="form">
                    <h3> For suggestion,complaint  or inquiry?</h3>
                <div>
                    <input type="text" placeholder={'Enter your name'} />
                </div>
               <div>
                    <input type="text" placeholder={'Enter a valid email address'} />
                </div>

                <textarea rows={5}></textarea>
                <div>
                    <button className="contact-btn">
                        Submit
                    </button>
                </div>
            </div> 
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Contact