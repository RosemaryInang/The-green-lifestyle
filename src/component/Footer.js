import LinkedIn from './Media/linkedin-logo.png';
import Instagram from './Media/insta-logo.png';
import Youtube from './Media/icon3.png';
import Facebook from './Media/facebook-logo.png';


const Footer = () => {
  return (

    <footer className="footer">
      <div className="l-footer">
        <h2 className='footer-logo'>The Green</h2>
        <h2 className='footer-logo2'><i>lifestyle</i></h2>

        <p className='footer-text'>We help you live <br /> the green lifestyle</p>

        <div  className="box social-icons">
            <a href='#'><img className='socialIcons' src={LinkedIn} width={31}/></a>
            <a href='#'><img className='socialIcons' src={Instagram} width={29}/></a>
            <a href='#'><img className='socialIcons' src={Youtube} width={29}/></a>
            <a href='#'><img className='socialIcons' src={Facebook} width={29}/></a>
        </div>

      </div>
      <ul className="r-footer footer-text">
        <li>
          <h2>Information</h2>
          <ul className="box">
            <li><a className='footer-text' href="#">About</a></li>
            <li><a className='footer-text' href="#">Product</a></li>
            <li><a className='footer-text' href="#">Blog</a></li>
          </ul>
        </li>

        <li className="features">
          <h2 className='footer-text'>Company</h2>
          <ul className="box">
            <li><a className='footer-text' href="#">Community</a></li>
            <li><a className='footer-text' href="#">Career</a></li>
            <li><a className='footer-text' href="#">Our story</a></li>
          </ul>
        </li>

        <li>
          <h2>Contact</h2>
          <ul className="box">
            <li><a className='footer-text' href="#">Getting Started</a></li>
            <li><a className='footer-text' href="#">Pricing</a></li>
            <li><a className='footer-text' href="#">Resources</a></li>
          </ul>
        </li>

      </ul>
      <div className="b-footer">
        <p className='footer-text'>2023 All Right Reserved | CBC Cohort 2 (Group C)</p>
      </div>
    </footer>
  );
};

export default Footer;
