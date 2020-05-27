import React, { Component } from "react";
//<span><img className="profile-circle" src={require('./../Images/img_avatar.png')}></img></span>
import Main from './Main';
import './../Styles/Cards.css';


class Cards extends Component {
    constructor(props){
        super(props);
        this.state ={
          sample:'',
        };
      }
    render() {
      return (  
        <div class="container-fluid">
            <div class="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                <Main />
           </div>

           <div class="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                <div class="col-1">1</div>
                <div class="col-10">
                    Mahdi Noori Ardestani
                </div>
                <div class="col-1">1</div>
            </div>
        </div>
      );
    }
  }
 export default  Cards;