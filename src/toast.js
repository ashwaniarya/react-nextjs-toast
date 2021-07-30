import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

/**
 * Author: Ashwani Arya 
 */

// Hey, I am toast component 

const config = {
  success: {
    primaryColor: '#2CC51F',
    secondaryColor: 'green',
    label: 'Success notification!'
  },
  info: {
    primaryColor: 'grey',
    secondaryColor: 'grey',
    label: 'Info notification!'
  },
  error: {
    primaryColor: '#F55C2C',
    secondaryColor: 'red',
    label: 'Error notification!'
  },
  warn: {
    primaryColor: 'orange',
    secondaryColor: 'orange',
    label: 'Warning notification!'
  }
}
class ToastBottom extends React.Component {
  componentDidMount() {

    this.timeout = setTimeout(()=>{ 
      let tId = this.props.targetId;
      this.remove(tId); }, this.props.duration*1000);
  }
  componentWillUnmount(){
    if(this.timeout){
      clearTimeout(this.timeout)
    }
  }
  remove = (id) => {
    unmountComponentAtNode(document.getElementById(id))
    if(this.props.onRemove){
      this.props.onRemove();
    }
  }
  render(){
    let props = this.props;
    return (
      <div className="toast-message-container">
        {/* <div className="side-bar"></div> */}
        <div id="toast-message" className="toast-message">
          {/* Message to be added here */}
          {props.title && <div className="title">{props.title}</div>}
          <div>{ props.message }</div>
          {/* // TODO */}
          {/* Actions buttons */}
          {/* <div>
            <button className="toast-action-button">READ MORE</button>
          </div> */}
        </div>
        {/* Static Styling */}
        <style jsx>{`
          .toast-message {
            flex:1;
            background-color: #fff;
            padding: 16px 16px;
            border-radius: 20px;
            font-family: 'Open Sans', sans-serif;
            font-size: 1rem;
            margin: 16px;
            box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
          }
          .side-bar{
            padding: 10px;
            border-radius: 4px 0px 0px 4px;
            background: green;
            background-color: ${config[props.type].primaryColor};
          }
          .title {
            margin-bottom: 8px;
            color: ${config[props.type].primaryColor};
            font-weight: bold;
          }
          .toast-action-button {
            font-style: normal;
            font-weight: bold;
            font-size: 0.5rem;
            line-height: 23px;
          }
      `}</style>
        {/* Dynamic Styling */}
        <style jsx>{`
          @keyframes SlideInOutBottom {
            0%{
              transform: translateY(40px);
              opacity:0;
            }
            ${ props.transitionPercentage }% {
              transform: translateY(0px);
              opacity:1;
            }
            ${ (100-props.transitionPercentage)}% {
              transform: translateY(0px);
              opacity:1;
            }
            100% {
              transform: translateY(40px);
              opacity:0;
            }
          }
          .toast-message-container {
              color: #444;
              width: 25rem;
              max-width: 25rem;
              border-radius: 20px;
              position: absolute;
              bottom: 0px;
              animation: SlideInOutBottom ${props.duration}s ease-in-out;
          }
          @media (max-width: 400px) {
            .toast-message-container {
              width: 300px;
            }
          }
        `}</style>
      </div>
    )
  }
}
class ToastTop extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(()=>{ 
      let tId = this.props.targetId;
      this.remove(tId); }, this.props.duration*1000);
  }
  componentWillUnmount(){
    if(this.timeout){
      clearTimeout(this.timeout)
    }
  }
  remove = (id) => {
    unmountComponentAtNode(document.getElementById(id))
    if(this.props.onRemove){
      this.props.onRemove();
    }
  }
  render(){
    let props = this.props;
    return (
      <div className="toast-message-container">
        {/* <div className="side-bar"></div> */}
        <div id="toast-message" className="toast-message">
          {/* Message to be added here */}
          {props.title && <div className="title">{props.title}</div>}
          <div>{ props.message }</div>
          {/* // TODO */}
          {/* Actions buttons */}
          {/* <div>
            <button className="toast-action-button">READ MORE</button>
          </div> */}
        </div>
        {/* Static Styling */}
        <style jsx>{`
          .toast-message {
            flex:1;
            background-color: #fff;
            padding: 16px 16px;
            border-radius: 20px;
            font-family: 'Open Sans', sans-serif;
            font-size: 1rem;
          }
          .side-bar{
            padding: 10px;
            border-radius: 4px 0px 0px 4px;
            background: green;
            background-color: ${config[props.type].primaryColor};
          }
          .title {
            margin-bottom: 8px;
            color: ${config[props.type].primaryColor};
            font-weight: bold;
          }
          .toast-action-button {
            font-style: normal;
            font-weight: bold;
            font-size: 1rem;
            line-height: 23px;
          }
      `}</style>
        {/* Dynamic Styling */}
        <style jsx>{`
          @keyframes SlideInOutTop {
            0%{
              transform: translateY(-40px);
              opacity:0;
            }
            ${ props.transitionPercentage }% {
              transform: translateY(0px);
              opacity:1;
            }
            ${ (100-props.transitionPercentage)}% {
              transform: translateY(0px);
              opacity:1;
            }
            100% {
              transform: translateY(-40px);
              opacity:0;
            }
          }
          
          .toast-message-container {
              color: #444;
              width: 23rem;
              max-width: 23rem;
              box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
              margin: 0px 1rem;
              border-radius: 20px;
              animation: SlideInOutTop ${props.duration}s ease-in-out;
          }
          @media (max-width: 400px) {
            .toast-message-container {
              width: 300px;
            }
          }
        `}</style>
      </div>
    )
  }
}
// toast object 
export const toast = {
  remove: (id) => {
    let comId = id || 'toast-container'
    let doc = document.getElementById(comId)
    if(doc)
      unmountComponentAtNode(doc)
  },
  notify: ( message , options = null) => {
    let duration = 5
    let type = 'info'
    let targetId = "toast-container"
    let title = null
    let position = 'bottom'
    let onRemove = null
    if( options ){
      if( options.duration)
        duration = options.duration
      if(options.type){
        type = options.type;
      }
      if(options.targetId) {
        targetId = options.targetId;
      }
      if(options.title) {
        title = options.title
      }
      if(options.position) {
        position = options.position
      }
      if(options.onRemove) {
        onRemove = options.onRemove
      }
    } 
    let trasitionPercentage = 0.3*(100/duration)
    if(position === 'bottom') {
      render(<ToastBottom 
        message={message} 
        slideIn={true} 
        type={type || 'info'}
        transitionPercentage={trasitionPercentage} 
        targetId={targetId}
        title={title}
        onRemove={onRemove}
        duration={duration} />, document.getElementById(targetId));
    }
    else {
      render(<ToastTop 
        message={message} 
        slideIn={true} 
        type={type || 'info'}
        transitionPercentage={trasitionPercentage} 
        targetId={targetId}
        title={title}
        onRemove={onRemove}
        duration={duration} />, document.getElementById(targetId));
    }
    
  }
}

// Toast container
export const ToastContainer = ( props ) => {
  let id = props.id || 'toast-container'
  return (
    <div id={id} className="toast-container">
      <style jsx>{`
        .toast-container {
          position: fixed;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          left: 0px;
          height: 0px;
          background-color:red;
        }
        .toast-container {
          position: fixed;
          width: 100%;
          ${
            (()=> { 
              if(props.position === 'bottom') return 'bottom: 0px;';
              if(props.position === 'top') return 'top: 16px;';
              else return 'bottom: 0px;';
            })()
          }
          display: flex;
          flex-direction: column;
          align-items: ${
            (()=> { 
              if(!props.align) return 'center'; 
              if(props.align === 'center') return 'center';
              if(props.align === 'left') return 'flex-start';
              if(props.align === 'right') return 'flex-end';
            })()
          };
          left: 0px;
        }
      `}</style>
    </div>
  )
}
  

