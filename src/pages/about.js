import React, {useState} from "react";
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
      const [textCount , setTextCount] = useState(0)
     const three = (e) => {
       setTextCount(e.target.value.length)
     }

     const [show , setShow] = useState(false);

     const handleshow = () => {
        setShow(current => !current);
     }

     const [hide , sethide] = useState("Show Item");
     const change = () => {
        sethide(<p>Hide</p>)};
    const other = () => {
           if( count % 2 !== 0 ){
                 sethide(<p>Show Item</p>)
            } };
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
          <div className="all">
            <div className="sub">
                <h2>number of subscribers: {count} </h2>
              <button onClick={handleclick} className="btn">Subscribe</button>
              <button onClick={handleMinus} className="btn">Unsubscribe</button>
            
           

            </div>

            <div className="form">
                <input placeholder="Username" value={userName} onChange={handleUserName}/>  <br/> <br/>

                <input type="Email" placeholder="UserEmail" value={userEmail} onChange={handleUserEmail}/>  <br/> <br/>

                 
                <input type="Password" placeholder="Password" value={userPassword} onChange={handleUserPassword}/>  <br/> <br/>

                  <p>Welcome, your email is {result.userEmail}</p>

                  <input type="Submit" onClick={handleSubmit} className="btn"/> <br/> <br/>
            </div>
            <div className="show">
            <button className="btn" onClick={() => {handleshow(); change(); other(); handleclick();}}>{hide}</button>
  
      {show && (
        <div>
          <p>I am visible</p>
        </div>
      )}

    
            
            </div>

            <div className="text">
                <textarea className="write" rows={5} onChange={three}/>
                <p>The number of characters is: {textCount}</p>
            </div>
            </div>
        </div>
    );
}

export default About;

