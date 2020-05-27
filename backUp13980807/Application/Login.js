import React, { Component } from "react";
import { Container , Row , Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './../Styles/Login.css';
// import './../Styles/bootstrap-rtl.min.css';
import Logo from './../Images/kbs-login-logo.jpg'

const cookies = new Cookies();


class Login extends Component {
  constructor(props){
        super(props);
        this.state ={
          email:'',
          password:'',
          success:false,
          LoginInfo:''
        };
       this.hanldeInputChange = this.hanldeInputChange.bind(this);
       this.handleSubmission = this.handleSubmission.bind(this);
      }


        setCookie(data,minutes){
            let d = new Date();
            d.setTime(d.getTime() + (minutes*60*1000));
            cookies.set('username', data.name, { path: '/', expires: d });
            // cookies.set('loginid', data.id, { path: '/', expires: d });
            // cookies.set('cityid', data.cityId, { path: '/', expires: d });
            // cookies.set('mobile', data.mobile, { path: '/', expires: d });
            // cookies.set('gmail', data.gmail, { path: '/', expires: d });
          };

        hanldeInputChange(event){
            const target = event.target;
            const value = target.value;
            const name = target.name;
            this.setState({
              [name]:value
            })
          }

        handleSubmission(event){
        event.preventDefault();
        axios.post('http://192.168.1.101:7878/ptc/registeration/login',
                {
                  'mobile':this.state.mobile,
                  'password':this.state.password
                })
                    .then(function(response){
                      this.setState({success:true})
                      this.props.history.push('/')
                      this.setCookie(response.data,20);
                    }.bind(this))
                    .catch(function(error){
                      this.setState({success:false});
                      this.props.history.push('/')
                      alert("Login failed.")
                    }.bind(this))
      }

   validateForm() {
     return this.state.email.length > 0 && this.state.password.length > 0;
   }

   render() {
     return (
       <Container fluid className="login-bg">
        <Row>
          <Col xs={6} md={4}></Col>
          <Col  align="center">
            <Card style={{ width: '25rem' }} id ="login-box">
               {/*<Card.Img variant="top" width="100" src={Logo} />*/}
               <img src={Logo} width="250" alt="ALI" />
               <Card.Body>
                    <Form  className="text-left">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control name = "email" type="email" placeholder="Enter email" value={this.state.email}  onChange={this.hanldeInputChange} autoComplete ="off"/>
                              <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                              </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name = "password" type="password" placeholder="Password" value={this.state.password}  onChange={this.hanldeInputChange} />
                            </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <div className="text-center">
                              <div>
                                  <input id="submit-key" onClick={this.handleSubmission}  type="submit" value="Log in " className="" />
                              </div>
                        </div>
                    </Form>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4}></Col>
  </Row>
       </Container>
     );
   }
 }
  export default  Login ;
