import { Link } from 'react-router-dom';
// import Button from '../Button/ButtonBody';
import './product.css';
import axios from 'axios';
import Button from './Button';
import {useCart} from 'react-use-cart';

const Product = (props) => {
let {image,price,name}=props.data;
const { addItem } = useCart();
    const addToCart = () =>{
        addItem(props.data);
        console.log(props.data);
    }
    return (
        <div>
            <div className='product-container'>
                <div className='product-image-container'>
                    <img width="80%" src={image}/>
                </div>
                <div className='product-details-container'>
                    <h4>{name}</h4>
                    <h5>price:{price}</h5>
                </div>
                {/* <Button  text='Add To Cart' onClick={()=> addToCart()}/> */}
                <button className="hi" onClick={()=> addToCart()}>Add to cart</button>

            </div>
        </div>
    )
}

export default Product;