import React from "react";
import './service.css'
import Image from '../images/family.jpg'

function Service(){
  return(
    <div className="all">
     <div className="one">
      <h1>Solutions <br/> <span>for you</span></h1>
      <div className="b"></div>
      <p>Loremkebvejhfv fvefervrefv bruyvfhrej bgh fgvbedlvqv rebvqkurvbqerkvh brvhbqkjfv.</p>

      <h4>ALL PRODUCTS FOR YOU</h4>
     </div>
    <div className="cardss">
        <img src={Image} alt=""/>
        <h2>Save your money with us</h2>
        <p>Loremkm nfrenvekvmmvmmmm mkfmroerkermm <br/> nbtyrxhctjvybhjnk</p>
        <button>Open your account</button>
    </div>
    <div className="cardss">
        <img src={Image} alt=""/>
        <h2>Save your money with us</h2>
        <p>Loremkm nfrenvekvmmvmmmm mkfmroerkermm <br/> nbtyrxhctjvybhjnk</p>
        <button>Open your account</button>
    </div>
    <div className="cardss">
        <img src={Image} alt=""/>
        <h2>Save your money with us</h2>
        <p>Loremkm nfrenvekvmmvmmmm mkfmroerkermm <br/> nbtyrxhctjvybhjnk</p>
        <button>Open your account</button>
    </div>

    </div>
    
  );
}

export default Service;