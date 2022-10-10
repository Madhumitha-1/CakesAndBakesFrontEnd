import React from "react";
import siri from './siri.jpg';
import Product from './Product';
function page(){
    return(
        <div>
        <nav class="navbar">
            <ul class="nav-list">
                <div class="logo">
                     <img src={siri} />
                </div>
                <div class="title">
                    <h1>&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;Book Spot</h1>
                </div>
            </ul>
        </nav> 

        </div>
    )
}
export default page;