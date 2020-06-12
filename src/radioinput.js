import React, { useState } from 'react'

function RadioInput(props){
  const onClick = () => {
    if(props.onChange) props.onChange();
  }
  let circle = props.active ? 'circle-filled' : 'circle';
  return (<button className="input-container" onClick={onClick}>
    <div className={circle}/>
    <h3 className="label">{props.text || 'label'}</h3>
    <style jsx>{`
      .input-container {
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 50px;
        border: none;
        outline: none;
      } 
      .input-container:focus {
        outline: none;
        border: none;
      }
      .input-container:active {
        outline: none;
        opacity: 0.6;
      }
      .circle {
        height: 24px;
        width: 24px;
        border-radius: 50px;
        border: 2px solid #a3a3a3;
      }
      .circle-filled {
        height: 24px;
        width: 24px;
        border-radius: 50px;
        border: 2px solid red;
        background-color: red;
      }
      .label {
        margin-left: 8px;
        margin-right: 16px;
        margin-bottom: 0px;
        margin-top: 0px;
        color: #4a4a4a;
      }
    `}</style>
    <style jsx>{`
      .circle-filled {
        height: 24px;
        width: 24px;
        border-radius: 50px;
        border: 2px solid ${props.activeColor};
        background-color: ${props.activeColor};
      }
    `}</style>
  </button>)
}

export default RadioInput;