import { useState } from 'react';


import axios from 'axios';
import { useNavigate } from "react-router-dom";


import { Placeholder } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { Outlet, Link } from "react-router-dom";

import logo from './logo.jpg';
import Button from "./Button";

  



const Checkout = () => {
    const {
       
        emptyCart,
    } = useCart();
    const {
        isEmpty,
        totalItems,
    } = useCart();
    const username=sessionStorage.getItem("username");
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const signoutHandler = () => {
        console.log("logout")       
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/Login';
    }
    const PlaceOrder=()=>{

        alert("order placed succesfully");
        emptyCart();
      


    }


    return(
        <div>
                    <nav class="navbar">
            <ul class="nav-list">
                <div class="logo">
                     <img src={logo} />
                </div>
                <div class="title">
                    <h1>&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;CAKES AND BAKES</h1>
                </div>
            </ul>
                
                      {getCookie("accessToken") &&
                    <div className='login-register'>
                        <label>Hi  {username} !  &ensp; &ensp; &ensp; &ensp;</label>
                        {/* <a href='/login'><Button text='My Orders' /></a> */}
                        <a href='/Cart'><Button text='Cart' className="btn" />{totalItems}</a>
                        {/* <a href="/cart"><span className="margin_left_20px">Cart{totalItems}</span></a> */}
                        {/* <a href='/register'><Button text='Profile' /></a> */}
                        <Link to="/Login" onClick={signoutHandler} > <Button text='Logout' className="btn" /> </Link>
                    </div>
            }
        </nav> 
           
            <h1>Enter Card details</h1>
            <br></br>
            <br></br>
            
            <h4>Name on Card</h4>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input>
            <br></br>
            <br></br>

            <h4>Card Number</h4>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>
            <br></br>
            <br></br>

            <h4>Cvv</h4>
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input>
            <br></br>
            
           

            <button onClick={e => PlaceOrder(e)}>Submit</button>
           
            
        </div>
    )
}

export default Checkout;

