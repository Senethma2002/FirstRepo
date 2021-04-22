import React from 'react';
import './App.css';
import './Main.css';

function Main(){

    { return (
        <div style={{ backgroundImage: "url(/images/background.png)" ,
            width:'1500px',
            backgroundRepeat: 'no-repeat',
            height:'1000px'
            
            }}>

            <h1>
                Main Page
            </h1>

            <h2>
                Welcome to valueIt - the largest marketplace in Sri Lanka!
            </h2>

            <p>Buy and sell used mobile phones in Sri Lanka! We give the best market price for your old phone </p>

            <img src="\images\why.png" alt="Snow" width="700px"></img>

            <p> If you are a seller </p>

            <img src="\images\how.png" alt="Snow" width="700px"></img>

            <p> If you are a buyer </p>

            <img src="\images\howbuyer.png" alt="Snow" width="700px"></img>

 

            <div class="container">
            <img src="\images\buy.png" alt="Snow" class="center"></img>
                <div class="centered">
                    <h3> Do You Have Something To Sell ? </h3>  
                    <button><a href="/Seller"> Sell Here</a></button>
                </div>
            </div>

            <div class="container">
            <img src="\images\buy.png" alt="Snow" class="center"></img>
                <div class="centered">
                    <h3> Do You Want To Buy Someething ?</h3>  
                    <button><a href="/Buyer"> Buy Here</a></button>
                </div>
            </div>



            {/* <div className= 'image'>
                <img src="\images\getcash.png"></img> 

                <h3> Do You Have Something To Sell ? </h3>  
                <a href="/Seller"> Click Here</a>

                <h3> Do You Want To Buy Someething ?</h3>
                <a href="/Buyer"> Click Here</a>
                 
            </div>     */}

            

        </div>
      ); }
    }

export default Main;