import girl from "./Media/girl.jpg";
import mag_glass from "./Media/mag_glass.png"; 
import handheldplant from './Assets/Handheld-plant.png';
import scentleaf from "./Media/Scent leaf.jpg";
import philodendron from "./Media/philodendron.jpg";
import Rosie from '../component/Media/cropped-cream.jpg';
import Pumpkin from '../component/Media/Fluted Pumpkin leaf(ugu).jpg';


import "../App.css"

function HeroArea(props){
    
    return(
    <>
        <div id="hero-area">
            <div className="hero-area-left">
                <p>
                    <b>Nurture nature:<br/> Explore our diverse plant range<br /></b>
                </p>

                <div className="figure-wrap">
                    <span className="figure ratings"><b>50+ <br />
                        <span className="plant-small">Plant Species</span></b>
                    </span>
                    <span className="ratings"><b>
                        100+ <br />
                        <span className="plant-small">Customers</span>
                    </b>
                    </span>
                </div>

                <div className="search-wrap">
                    <input type="text" placeholder={'What are you looking for?'} />
                    <span className="mag-glass-wrap">
                        <img src={mag_glass} alt="" />
                    </span>
                </div>
            </div>

            <div className="hero-area-right-wrapper">
                 <div className="hero-area-right">
               <img src={handheldplant} alt=""/>
            </div>
            </div>
        </div>

        <article id="chat-wrap">
                <a className="chat-link" href="#" target="_blank">
                    <span className="chat-span">
                        Chat with us
                    </span>
                    <img className="chat-img" src={Rosie} alt="Rosemary" />
                    
                </a>
            </article>
        
        <div className="hero-area2">
            <div className="card1">
                <h2>
                    Best <br />
                    Selling Plants
                </h2>
                <p>Easiest way to a <br /> healthy life by buying  <br />your favorite plants</p>
                <button className="btn" onClick={()=>{props.navigate("/product")}}>
                    See more &rarr;
                </button>
            </div>

            <div id="all-card">
            <div className="card">
                <img src={scentleaf} alt='' className="scent_leaf"/>
                <figcaption>
                    <p>Scent Leaf  <span>(&#8358; 20)</span></p>
                </figcaption>
            </div>

            <div className="card">
                <img src={philodendron} alt="" />
                <figcaption>
                    <p>Philodendron  <span>(&#8358; 2,000.00)</span></p>
                </figcaption>
            </div>

            <div className="card">
                <img src={girl} alt='' />
                <figcaption>
                    <p>Xandu  <span>(&#8358; 800.00)</span></p>
                </figcaption>
            </div>
            <div className="card">
                <img src={Pumpkin} alt='' />
                <figcaption>
                    <p>Fluted Pumpkin <span>(&#8358; 100.00)</span></p>
                </figcaption>
            </div>
            </div>
            
        </div>
    </>
    )
}


export default HeroArea