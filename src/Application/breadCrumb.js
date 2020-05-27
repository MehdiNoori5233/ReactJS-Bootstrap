import React, { Component } from "react";


import Main from './Main';
import './../Styles/theme-blue-grey.css';
import './../Styles/MediaQuery.css';
import './../Styles/breadCrumb.css';


class breadcrumb extends Component {
    render(){
        return(
            <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">Vans</a></li>
            <li><a href="#">Camper Vans</a></li>
            <li><a href="#">1989 VW Westfalia Vanagon</a></li>
          </ul>
        )
    }
}
export default  breadcrumb;