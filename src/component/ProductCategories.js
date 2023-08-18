import Artificialflower from '../component/Assets/Frame 37.png';
import plant36 from '../component/Assets/Frame 38.png';
import Palm from '../component/Assets/Frame 36.png';

function ProductCategories(props){
    return(
        <>
       <div className='cate-header'>
         <h2>Categories</h2>
        <p>Find what you are looking for</p>
       </div>
         <div className="categories-area">

            <div className="categories-card">
                <div className='lift-above'> 
                    <img src={Palm} alt='palm'/>
                <figcaption>
                    Edible Plants
                </figcaption>
                </div>
            </div>

            <div className="categories-card">
                <img src={plant36 }  alt="Flutedpumpkin" />
                <figcaption>
                   Combo Plants
                </figcaption> <br />
                <p>
                   Medicinal and Therapeutic
                </p> <br />
               
                 <button className="cate-btn" onClick={()=>{props.navigate("/product")}}>
                   <b> Explore &rarr;</b>
                </button>
            </div>
            <div className="categories-card">
               <div className='lift-above2'>
                 <img src={Artificialflower} alt='artificial flower' />
                <figcaption>
                   Non-Edible Plants
                </figcaption>
               </div>
            </div>
        </div>
    </>
    )
}

export default ProductCategories