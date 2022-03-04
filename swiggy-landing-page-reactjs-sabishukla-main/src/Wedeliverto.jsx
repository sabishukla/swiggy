import React from 'react';
import Wed from './Wed';

const states1 = [ 
  "Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh"
]
const states2=[
  "Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland"];
const states3=[
  "Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh"];
const states4=[
  "West Bengal",
"Andaman ",
"Chandigarh",
"Dadra ",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry",
"Jammu & Kashmir"
];

function Wedeliverto()
{
   return (<div className='wed'>
       <div className='container'>
         <h3>We deliver to</h3>
   <div className='uls'>
   <ul>
       {states1.map(state=>
     <Wed state={state} />) }
   </ul>
   <ul>
       {states2.map(state=>
     <Wed state={state} />) }
   </ul>
   <ul>
       {states3.map(state=>
     <Wed state={state} />) }
   </ul>
   <ul>
       {states4.map(state=>
     <Wed state={state} />) }
   </ul>
   </div>
   </div>
   <hr/>
   <br/>
   </div>)
}
export default Wedeliverto;