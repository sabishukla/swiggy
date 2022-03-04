import React from 'react';

function Home()
{
   return <div className='home'>
            <div className='container'>
               <div className='sec1'>
               <div className='nav-bar'>
               <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png' alt='' />
               <div className='navv'>
                  <button className='login'>Login</button>
                  <button className='signup'>Sigh Up</button>
               </div>
               </div>
               <h1>Hungry?</h1>
               <h3>Order food from favourite restaurants near you.</h3>
               <div className='input'>
               <input type='text' placeholder='Enter your delivery location'/>
               <div className='lm'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ic_my_location_48px.svg/1024px-Ic_my_location_48px.svg.png' alt='' /><span>Locate me</span></div>
               <button className='ff'>FIND FOOD</button>
               </div>
               <p>POPULAR CITIES IN INDIA</p>
               <ul>
                  <li>Ahmedabad</li>
                  <li>Bangalore</li>
                  <li>Chennai</li>
                  <li>Delhi</li>
                  <li>Gurgaon</li>
                  <li>Hyderabad</li>
                  <li>Kolkata</li>
                  <li>Mumbai</li>
                  <li>Pune</li>
                  <li>& more.</li>
               </ul>
               </div>
               <div className='sec2'></div>
            </div>
        </div>

}
export default Home;