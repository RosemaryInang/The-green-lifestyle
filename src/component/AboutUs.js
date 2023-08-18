import cacti from './Media/cacti.jpg';
import plant1 from './Media/plant1.jpg';
import community from './Media/our community.jpg';

import '../index.css';


function AboutUs(props){
    return(
        <>
            <div className='about-section'>
            <h2 className="About-section-heading">
            About Us
            </h2>
            <p className="About-section-p">
                Order now and appreciate the beauty of nature
            </p>
            <div className="cardContainer">
            <div className="card2">
                <img className="img" src={cacti}  alt="cacti" />

                <figcaption>
                    Curated Eco-conscious and Eco-Friendly Products
                </figcaption>
                <span> #greengoods4life</span> 
                <p>
                    We feature a range  of thoughtfully curated selection of products that meet strict sustainability criteria.
                </p>
            </div>
            <div className="card2">
                <img className='img' src={plant1}  alt="plant" />
                <figcaption>
                   Education and Awareness
                </figcaption>
                <p> The platform will not only sell green products but also provide educational resources.
                </p>
            </div>
            <div className="card2">
                <img className="img" src={community} alt="plant2" />
                 <figcaption>
                   Our Community
                </figcaption>
                <p> Our fast growing Community is an online hub where eco-conscious consumers,  climate advocates, and sustainable businesses can come together to exchange ideas.             </p>
            </div>
            </div>
            </div>
        </>
    )
}


export default AboutUs