import React, { Component } from "react";
import { Container , Row } from "react-bootstrap";

import Menu from './Menu.js'; 
import Header from './Header.js'; 

class Main extends Component {
   render() {
     return (  
       <Container fluid> 
              <Row  style={{backgroundColor:"#28353d"}}><Header /></Row>
              <Row style={{backgroundColor: '#fcfcfc'}}><Menu /></Row>
       </Container>
     );
   }
 }
export default  Main;
