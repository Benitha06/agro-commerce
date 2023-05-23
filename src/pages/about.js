import React, {useEffect, useState} from "react";
import './about.css'
import Button from './comp/button'

function About(){
     const [count, setCount]= useState(0);

     const handleMinus = () => {
       
          setCount(count - 1);

      };

     const [userName, setUserName]= useState("");
     const handleUserName =(e)=>{
        setUserName(e.target.value);
     }

     const [userPassword, setUserPassword]= useState("");
     const handleUserPassword =(e)=>{
        setUserPassword(e.target.value);
     }

    const [userEmail, setUserEmail]= useState("");
    const handleUserEmail =(e)=> {
        setUserEmail(e.target.value);
    }
     
    const [result, setResult]=useState("");

    const handleSubmit =(e)=>{
       e.preventDefault();
       const finalResult={
        userName, userEmail};
       setResult(finalResult)
        }
     


     const handleclick = ()=>{
        setCount(count + 1);
     };
      const nw = () =>{
     const st = document.querySelector(".show");
     const par = document.createElement("p");
     const text = document.createTextNode("I am Visible!");
     par.appendChild(text);
     st.appendChild(par);
    
     console.log(par);
     document.querySelector(".btn").innerHTML ="Hide";

      }
      const [textCount , setTextCount] = useState(0)
     const three = (e) => {
       setTextCount(e.target.value.length)
     }

    return(

        <div>

            


            <div className="top">
                <div className="ins">
            <h1>We are here for good</h1>
            </div>
            </div>
            <Button btnName="Learn More"/>

            <h1 className="us">About SBM</h1>

            <div className="paragraphs">
                <p>Loremm ;loremfvjkf vbfvjklncfdvghbckefavfdhcjvk afdvk efd hcvbjhfdacxbv  <br/>
                iovnerpvqawsvjnrwpjbj npj;qn mgr</p>

                <p>Lorem lorem lorem jgn lwfsbnglibvqraf lrfno; vgfn qa;ogbnqa;gbnalrgbngrbg <br/>robrgbrtg dnbjqafkl</p>
            </div>

            <div className="sub">
                <h2>number of subscribers: {count} </h2>
              <button onClick={handleclick}>Subscribe</button>
              <button onClick={handleMinus}>Unsubscribe</button>
            
           

            </div>

            <div className="form">
                <input placeholder="Username" value={userName} onChange={handleUserName}/>  <br/> <br/>

                <input type="Email" placeholder="UserEmail" value={userEmail} onChange={handleUserEmail}/>  <br/> <br/>

                 
                <input type="Password" placeholder="Password" value={userPassword} onChange={handleUserPassword}/>  <br/> <br/>

                  <p>Welcome, your email is {result.userEmail}</p>

                  <input type="Submit" onClick={handleSubmit}/> <br/> <br/>
            </div>
            <div className="show">
            <button className="btn" onClick={nw}>Show Items</button>
            
            </div>

            <div className="text">
                <textarea className="write" rows={5} onChange={three}/>
                <p>The number of characters is: {textCount}</p>
            </div>
        </div>
    );
}

export default About;

