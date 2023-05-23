import React from 'react';
import './home.css';
import {details} from '../constants'
import {describe} from '../constants'
import Button from './comp/button'

 function Home(){
    
    return(
    <div>
        <div className='container'>
        <div className='card'>
            <div className='rectangle par'>
            <p>We want to partner with <br/> you <span>at every step</span></p>

           <button>Learn More/</button>

            </div>
            <div className='rectangle line'>

            </div>

        </div>
        </div> 
         <Button btnName="Click"/>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age </th>
                <th>Gender</th>
            </tr >

            {details.map((de) =>(
                    <tr key={de.id}>
                    <td>{de.Name}</td>

                    <td>{de.Age}</td>

                    <td>{de.Gender}</td>
                </tr> 
                ))
                }
                
         
            </thead>      
            
        </table>

        <div className='ca'>
              {
                describe.map((c) => 
                (
                    <div className='ca1'>
                    <h1>{c.title}</h1>
                    <p>{c.description}</p>
                    <button>{c.btn}</button>
                    </div>
                ))}  
        </div>
    </div>

    );

 }
export default Home;
