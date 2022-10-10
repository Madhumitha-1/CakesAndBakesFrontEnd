import React from 'react';
//import './App.css';



import background from './background.png';
import { Outlet, Link } from "react-router-dom";
import logo from './logo.jpg';

function Home() {
	return (
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
					
                    {/* <div class="heading">
                        <h2>&ensp;&ensp;&ensp;&ensp;&ensp;Make your life prosperous by reading books</h2>
                    </div> */}
				</ul>

				<div class="rightNav">
					<ul class="ul_list">
                   
					
                     &ensp;
                     &ensp;
					 <Link to="/login">Login</Link>
                    &ensp;
                    &ensp;
					<Link to="/Register">Register</Link>
                    &ensp;
                    &ensp;
                    </ul>
				</div> 
		    </nav> 

            <nav class="bg1">
                <img src={background} alt="background" />
    
            </nav>
			
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default Home



// const Layout = () => {
// 	return (
// 	  <>
// 		<nav>
// 		  <ul>
// 			<li>
// 			  <Link to="/">Home</Link>
// 			</li>
// 			<li>
// 			  <Link to="/login">login</Link>
// 			</li>
// 			<li>
// 			  <Link to="/Registration">Register</Link>
// 			</li>
// 		  </ul>
// 		</nav>
  
// 		<Outlet />
// 	  </>
// 	)
//   };
  
//   export default Layout;