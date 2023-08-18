import shopping_cart from './Media/shopping_cart.png';
import '../App.css';
import '../styles/index.css'
import {link} from 'react-router-dom';

function NavBar(props){
    const changePage=page=>{
        props.navigate(page)
    }
    return(
        <nav>
            <div className="nav-logo">
                <h4 className="logo">
                    The
                    Green
                </h4>
                <h5 className="logo2">Lifestyle</h5>
             </div>
            <div>
                <a className="nav-item active" onClick={()=>{
                    changePage("/")
                }}>Home</a>
                <a className="nav-item" onClick={()=>{
                    changePage("/product")
                }}>Products</a>
                 <a className="nav-item" onClick={()=>{
                    changePage("/product")
                }}>Blog</a>
                <a className="nav-item" onClick={()=>{
                    changePage("/contact")
                }}>Contact</a>
                
            </div>
            <div className="nav-icon-wrap">
                <a href='#' className="nav-icon" onClick={props.openCart}>
                    <img src={shopping_cart} alt='' />
                </a>
            </div>
        </nav>
    )
}

export default NavBar