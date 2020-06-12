
import React, { Component} from "react";
import {ToastContainer, toast} from './toast'
import RadioInput from './radioinput'
class App extends Component{
  state = {
    type: 'info'
  }
  onClickNotify = (id, position) => {
    toast.notify('😀 Hello, how are you?', {
      duration: 5,
      type: this.state.type,
      targetId: id,
      position
    });
  }
  onChangeState = (type) => {
    this.setState({type})
  }
  render(){
    return(
      <div className="app container">
        <div className="header">
          <h1 className="heading-title">React NextJs Toast</h1>
          <h3 className="sub-heading">No complicated setup, just install and start using.</h3>
          <p className="heading-para">An out of the box toast component for nextjs framework or any project using style-jsx.</p>
          <h3><a href="https://github.com/ashwaniarya/react-nextjs-toast/blob/master/README.md" style={{ color: "#fff"}}>DOCS</a></h3>
        </div>
        <div className="main-container" style={{ paddingBottom: 24}}>
          <div className="screen-container" style={{ marginBottom: 24}}>
            <div className="row" style={{ justifyContent: 'center'}}>
            <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-5")
                }}>NOTIFY</button>
              </div>
              <div>
                <button className="button" onClick={()=>{
                  toast.remove("toast-comp-5")
                }}>REMOVE</button>
              </div>
            </div>
          </div>
          <div className="screen-container width-16-9-h400 center" style={{ backgroundColor: '#ffffff66'}}>
            <div className="row jc-space-between position-top width-full">
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-1",'top')
                }}>TOP LEFT</button>
              </div>
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-2",'top')
                }}>TOP CENTER</button>
              </div>
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-3",'top')
                }}>TOP RIGHT</button>
              </div>
            </div>
            <div className="row jc-space-between" style={{ flex: 1}}>
              <div className="row" style={{ flex: 1, justifyContent:"space-evenly", flexWrap: "wrap"}}>
                <RadioInput activeColor="grey" text="info" active={ this.state.type === 'info'} onChange={()=>this.onChangeState('info')}/>
                <RadioInput activeColor="#2CC51F" text="success" active={ this.state.type === 'success'} onChange={()=>this.onChangeState('success')}/>
                <RadioInput activeColor="orange" text="warn" active={ this.state.type === 'warn'} onChange={()=>this.onChangeState('warn')}/>
                <RadioInput activeColor="#F55C2C" text="error" active={ this.state.type === 'error'} onChange={()=>this.onChangeState('error')}/>
              </div>
            </div>
            <div className="row jc-space-between position-bottom width-full">
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-4")
                }}>BOTTOM LEFT</button>
              </div>
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-5")
                }}>BOTTOM CENTER</button>
              </div>
              <div>
                <button className="button" onClick={()=>{
                  this.onClickNotify("toast-comp-6")
                }}>BOTTOM RIGHT</button>
              </div>
            </div>
          </div>
          
        </div>
        <ToastContainer/>
        <ToastContainer align={"left"} position={"top"} id="toast-comp-1"/>
        <ToastContainer align={"center"} position={"top"} id="toast-comp-2"/>
        <ToastContainer align={"right"} position={"top"} id="toast-comp-3"/>
        <ToastContainer align={"left"} position={"bottom"} id="toast-comp-4"/>
        <ToastContainer align={"center"} position={"bottom"} id="toast-comp-5"/>
        <ToastContainer align={"right"} position={"bottom"} id="toast-comp-6"/>
        <div className="footer">
          <h4>Made with ♥ by <a href="https://github.com/ashwaniarya" style={{ color: '#fff'}}>Ashwani Arya</a></h4>
        </div>
        <style jsx>{`
          .app {
            min-height: 100vh;
          }
          .container {
            background: #4b6cb7;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }
          .main-container {
          }
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
          }
          .row {
            display: flex;
          }
          .jc-space-between {
            justify-content: space-between;
          }
          .width-16-9-h400 {
            height: 400px;
            max-width: 712px;
          }
          .width-h200 {
            height: 200px;
            max-width: 712px;
          }
          .screen-container {
            position: relative;
            margin: 0px auto;
            border: 2px dashed;
          }
          .position-top {
            position: absolute;
            top: 0px;
          }
          .position-bottom {
            position: absolute;
            bottom: 0px;
          }
          .width-full {
            width: 100%;
          }
          .heading-title {
            font-size: 60px;
          }
          @media (max-width: 720px ) {
            .heading-title {
              font-size: 40px;
            }
          }
          @media (max-width: 480px ) {
            .heading-title {
              font-size: 30px;
            }
          }
          .sub-heading {
            margin-bottom: 4px;
            text-align: center;
          }
          .heading-para {
            text-align: center;
          }
          .button {
            background-color: #fff;
            border-radius: 0px;
            border: 2px solid;
            margin: 4px;
            padding: 1rem 1.2rem;
            transition: all ease-in-out 0.3s;
          }
          .button:hover {
            cursor: pointer;
            background-color: #000;
            color: #fff;
            border: 2px solid #fff;
            transform: scale(1.1);
            box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
          }
          .button:active {
            transform: scale(0.9);
            box-shadow: 0 24px 38px 3px rgba(0,0,0,0.08), 0 9px 46px 8px rgba(0,0,0,0.1), 0 11px 15px -7px rgba(0,0,0,0.12);
          }
          .footer {
            display: flex;
            justify-content: center;
            color: #bebebe;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          `}</style>
      </div>
    );
  }
}

export default App;