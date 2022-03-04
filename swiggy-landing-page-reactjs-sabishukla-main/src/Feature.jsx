import React from 'react';

function Feature(props){
    return <div className="feature">
    <img src={props.img} alt=""/>
    <h2>{props.h2}</h2>
    <p>{props.p}
      <br />
      {props.p1}
    </p>
  </div>
}
export default Feature;