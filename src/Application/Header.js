import React, { Component } from "react";

import './../Styles/Header.css';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
   render() {
     return (
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
               <div id="rcorners">
                    <a href="/">KMS</a>
               </div>
            </div>
            <div className="col-sm-8" style={{textAlign:'right',direction :'rtl'}}>
                <div className="shopbar-tool">
                    <a className="shopbar-button-label pull-right" href='/supermarket'>
                    فروشگاه اینترنتی
                    </a>
                </div>
                <div className="shopbar-divider shown-divider"></div>
                <div className="shopbar-tool">
                    <a className="shopbar-button-label pull-right marker-color" href='/Login'>
                    وارد شوید
                    </a>
                </div>
                <div className="shopbar-divider shown-divider"></div>
                <div className="shopbar-tool">
                    <a className="shopbar-button-label pull-right" href='/SignUp'>
                    ثبت نام کنید
                    </a>
                </div>
                <div className="shopbar-divider shown-divider"></div>
                <div className="shopbar-tool">
                    <a className="shopbar-button-label pull-right" href='/ContactUs'>
                    تماس با ما
                    </a>
                </div>
            </div>
        </div>
        <div className="row" style={{marginBottom:"12px"}}>
            <div className="col-sm-4">
                <div className="avatarname" tooltip="پروفایل">سید محسن نوری اردستانی
                        <div className="dropdown-content">
                            <ul>
                                <a href="/MyProfile">پروفایل<span className="fa fa-user"></span></a>
                                <hr />
                                <a href="/Notif">اعلانات<span className="fa fa-bullhorn"></span></a>
                                <hr />
                                <a href="#/grid">پیام ها<span className="fa fa-id-card-o"></span></a>
                                <hr />
                                <a href="/">خروج<span className="fa fa-sign-out"></span></a>
                            </ul>
                        </div>
                </div>
                <a><img alt="پروفایل" className="circle-img" src={require('./../Images/img_avatar.png')} /></a>
            </div>
            <div className="col-sm-8" style={{textAlign:'right',direction :'rtl'}}>
                <div className="shopbar-cart">
                  <i style={{color:"white"}} className="fa fa-search-plus"></i>
               </div>
               <input type="text" id="instantsearch" placeholder="جستجو داخل فروشگاه" data-minlength="2" data-showthumbs="true" data-url="/catalog/searchtermautocomplete" autoComplete="off" name="q" className="ui-autocomplete-input"></input>            
            </div>
        </div>
        <div className="row">
                
        </div>
    </div>
     );
   }
 }
export default  Header;