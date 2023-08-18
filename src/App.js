import './styles/index.css';
import "./App.css"
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import ProductPage from './pages/product';
import HomePage from './pages/home';

import { useState } from 'react';
import { useNavigate,Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Blog from './pages/blogpage';


const Cart=props=>{
  const {name, category,image} = props.data
  return(
    <>
      <div className='cart-item'>
        <div className='cart-item-img'>
          <img src={image}/>
        </div>
        <div className='cart-item-info'>
          <div className='cart-name'>{name}</div>
          <div className='cart-category'>{category}</div>
          <div className='cart-remove' onClick={()=>{props.manageCart(props.data,true)}}>remove</div>
        </div>
      </div>
    </>
  )
}
function App() {

  const [cartData,setCartData] = useState([])
  const [cartOpen,setCartOpen] = useState(false)
  
  const navigate = useNavigate();

  const openCart=()=>{
    setCartOpen(true)
  }

  const manageCart=(cart,remove=true)=>{
    let data = [...cartData]
    if(remove){
      data = data.filter(e=>{return e !== cart})
    }else{
      if(!data.includes(cart)){
        data.push(cart)
      }
      
    }
    
    setCartData(data)
  }


  return (
    <div className="App">
      <div className='App-container'>
        <NavBar navigate={navigate} openCart={openCart}/>
      </div>
        <Routes>
          <Route exact path="/" element={<HomePage navigate={navigate} />}/>
          <Route exact path="/product" element={<ProductPage manageCart={manageCart}/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/blogpage" element={<Blog/>}/>
        </Routes>
      <Footer/>
      <div id="cart-container" style={{transform: cartOpen?"translateX(0px)":"translateX(350px)"}}>
        <div id="close-cart" onClick={()=>{setCartOpen(false)}}>Close</div>
        {cartData.length > 0 &&<><div id="all-cart">
          {
            cartData.map((e,index)=>(
              <Cart manageCart={manageCart} data={e} key={"cart_"+index}/>
            ))
            }
        </div>
        <div id="check-out">Check Out</div>
        </>
        }
      </div>
    </div>
  );
}

export default App;
