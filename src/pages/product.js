import { useState } from "react"
import "../styles/index.css"
import img1 from "../component/Media/Scent leaf.jpg";
import PottedPalm from '../component/Media/palm_plant.jpg'
import AloeVera from '../component/Media/aloe vera.jpg'
import Cacti from '../component/Media/cacti.jpg';
import FlutedPumpkin from '../component/Media/Fluted Pumpkin leaf(ugu).jpg';
import Waterleaf from '../component/Media/Waterleaf.jpg';
import Efo from '../component/Media/Efo leaf.jpg';
import Philodendron from '../component/Media/philodendron.jpg'

const Product=props=>{

    const {name,price, image} = props.data
  
    return(
        <div id="my-product">
          <div className='product'>

            <div className='product-image'>
                <img src={image} />
            </div>

            <div className='product-name'>{name} (&#8358; {price})
            </div>

            <div className='buy-product' onClick={()=>{
                props.manageCart(props.data,false)
                alert("Product added to cart")
            }}>Buy</div>
          </div>
        </div>
    )
  }
  
const ProductPage=props=>{
    const [allProduct,setAllProduct] = useState([
        {
          name:'Scent Leaf',
          price:20,
          category:'Edible Plants',
          image:img1
        },
        {
          name:'Aloe vera',
          price:2000,
          category:'Non-edible Plants',
          image:AloeVera
        },
        {
          name:'Potted Palm',
          price:200,
          category:'Non-edible Plants',
          image:PottedPalm
        },
        {
          name:'Cactus',
          price:100,
          category:'Non-edible Plants',
          image:Cacti
        },
        {
          name:'Philodendron',
          price: 2000,
          category:'Non-edible Plants',
          image:Philodendron
        },
        {
          name:'Fluted Pumpkin',
          price:50,
          category:'Edible Plants',
          image:FlutedPumpkin
        },
        {
          name:'African Spinach(Efo)',
          price:850,
          category:'Edible Plants',
          image:Efo
        },
        {
          name:'Water leaf',
          price:450,
          category:'Edible Plants',
          image:Waterleaf
        },
      ])
      
      const [filteredProduct,setfilteredProduct] = useState(allProduct)
      const [currentCategory,setCategory] = useState("All")
    
      const filterByCategory=category=>{
        if(category === "All"){
          setfilteredProduct(allProduct)
        }else{
          let data = [...allProduct]
          data = data.filter(e=>{
            return e.category === category
          })
          setfilteredProduct(data)
        }
        setCategory(category)
      }
    return(
        <div id="product-page">
        <div id="sort-container">
          <div>Category : </div>
          <select value={currentCategory} onChange={e=>{
            filterByCategory(e.target.value)
          }}>
            <option value="All">All</option>

            <option value="Edible Plants">Edible Plants</option>

            <option value="Non-edible Plants">Non-edible Plants</option>
          </select>
        </div>
        <div id="all-product">
          
            {filteredProduct.map((e,index)=>(
              <Product manageCart={props.manageCart} data={e} key={index}/>
            ))}
          
        </div>
      </div>
    )
}

export default ProductPage