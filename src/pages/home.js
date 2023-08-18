import HeroArea from '../component/HeroArea';
import AboutUs from '../component/AboutUs';
import ProductCategories from '../component/ProductCategories';
import Reviews from '../component/Reviews';

const HomePage=props=>{
    return(
        <>
            <div className='App-container'>
                <HeroArea navigate={props.navigate}/>
                <AboutUs />
            </div>
            <ProductCategories navigate={props.navigate}/>
            <Reviews/>
        </>
    )
}

export default HomePage