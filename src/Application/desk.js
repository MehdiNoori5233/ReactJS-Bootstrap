import React, { Component } from "react";

import Highcharts from 'highcharts';

import Main from './Main';
import Footer from './Footer';
import './../Styles/desk.css';
import './../Styles/theme-blue-grey.css';
import './../Styles/MediaQuery.css';

class desk extends Component {
    constructor(props){
        super(props);
        this.state ={
          sample:'',
        };
        this.myFunction = this.myFunction.bind(this);
      }
      componentDidMount() {
        Highcharts.chart('container1', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'فعالیت کاربران زیر گروه ',
                align: 'center'
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                align: 'left'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true
        
            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
        
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mb',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }
        
            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }
        
            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                        yAxis: [{
                            labels: {
                                align: 'right',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            visible: false
                        }]
                    }
                }]
            }
        });
     }      
    //baraye button haiee ke groups ra namayesh midahan.
       myFunction(id) {
        debugger;
    //     var x = document.getElementById(id);
    //     if (x.className.indexOf("hide") == -1) {
    //       x.className += " block";
    //       x.previousElementSibling.className += "theme-l1";
    //     } else { 
    //       x.className = x.className.replace("block", "");
    //       x.previousElementSibling.className = 
    //       x.previousElementSibling.className.replace("theme-l1", "");
    //     }
            console.log("Clicked ;");
       }
    render() {
      return (  
        <div className="container-fluid">
            <div className="row">
                    <Main />
            </div>
            <div className="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                <div className="col-sm-3">
                    <div className = "center-align">
                        <div className="card">
                            <h4>Mahdi Noori</h4>
                            <span><img className="profile-circle" src={require('./../Images/img_avatar.png')}></img></span>
                            <hr />
                            <ul className = "left-align">
                                <li className="vr-margin-5">
                                    <i className="fa fa-pencil fa-fw text-theme"></i>
                                    <span>Web developer</span>
                                </li>
                                <li className="vr-margin-5">
                                    <i className="fa fa-home fa-fw text-theme"></i>
                                    <span>Web developer</span>
                                </li>
                                <li className="vr-margin-5">
                                    <i className="fa fa-birthday-cake fa-fw text-theme"></i>
                                    <span>Web developer</span>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="vr-margin-5">
                        <button onClick={this.handleSubmission} className="theme-l1 button block left-align">
                            <i className="fa fa-circle-o-notch fa-fw text-theme"></i>
                            My Groups
                        </button>
                        <button onClick={this.handleSubmission} className="theme-l1 button block left-align">
                            <i className="fa fa-calendar-check-o fa-fw text-theme"></i>
                            My Works
                        </button>
                        <button onClick={this.handleSubmission} className="theme-l1 button block left-align">
                            <i className="fa fa-users fa-fw text-theme"></i>
                            My Photos
                        </button>
                    </div>
                    <div id = "subscriber" className="card vr-margin-5 scroll-box-hoverable">
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
						<span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                        <span><img className="profile-square vr-margin-1" alt='profileImg' src={require('./../Images/img_avatar.png')} /> مهدی نوری </span><hr />
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="card relative">
                        <div className="persian-type">
                            <h2>این یک Demo هست</h2>
                            <p className="justify-align ">
                            این مقام مسئول در شرکت بورس خاطرنشان کرد: در صورتی که مردم آگاهی کافی برای عدم استفاده از ابزارهای غیرمجاز و غیرکارشناسی را داشته و مخاطراتی که این شبکه‌ها برای آنها و سرمایه‌هایشان دارند را کسب کنند، آنگاه در انتخاب میان این درگاههای تخصصی و رسمی و شبکه‌های مجازی غیرمجاز، به طور قطعا درگاههای تخصصی  را انتخاب خواهند کرد.

خواجه نصیری تصریح کرد: در صورت مهیاشدن دسترسی آسان عموم مردم به درگاههای شناخته شده بازار سرمایه، مردم از این درگاههای رسمی، مورد اعتماد و شناخته شده استفاده  کرده و بدین ترتیب تمام خدمات مالی و سرمایه گذاری خود را از این مسیر درست دنبال خواهند کرد.

نایب رئیس شرکت بورس افزود: برای تحقق این امر، تنها راه این است که متولیان بازار سرمایه با صرف هزینه و سرمایه‌گذاری، نسبت به فرهنگ‌سازی در این زمینه اقدام کنند تا مردم آسان‌تر و راحت‌تر از شبکه‌های مجازی به سمت درگاههای تخصصی و کارآمد سوق پیدا کنند.
                            </p>
                        </div>
                        < br/>
                        < br/>
                        <a href='#'><span style={{bottom:"0" , left:"0"}} className="absolute"><img className="profile-square" src={require('./../Images/img_avatar.png')}></img> Ali Asghari</span></a>
                        <span style={{margin:"10px" , bottom:"0" , right:"0"}} className="persian-type absolute feuilleton">3 ساعت پیش</span>
                    </div>
                    <div className="card relative">
                        <div className="persian-type">
                            <h2>this دمو is</h2>
                            <p className="justify-align ">
                            این مقام مسئول در شرکت بورس خاطرنشان کرد: در صورتی که مردم آگاهی کافی برای عدم استفاده از ابزارهای غیرمجاز و غیرکارشناسی را داشته و مخاطراتی که این شبکه‌ها برای آنها و سرمایه‌هایشان دارند را کسب کنند، آنگاه در انتخاب میان این درگاههای تخصصی و رسمی و شبکه‌های مجازی غیرمجاز، به طور قطعا درگاههای تخصصی  را انتخاب خواهند کرد.

خواجه نصیری تصریح کرد: در صورت مهیاشدن دسترسی آسان عموم مردم به درگاههای شناخته شده بازار سرمایه، مردم از این درگاههای رسمی، مورد اعتماد و شناخته شده استفاده  کرده و بدین ترتیب تمام خدمات مالی و سرمایه گذاری خود را از این مسیر درست دنبال خواهند کرد.

نایب رئیس شرکت بورس افزود: برای تحقق این امر، تنها راه این است که متولیان بازار سرمایه با صرف هزینه و سرمایه‌گذاری، نسبت به فرهنگ‌سازی در این زمینه اقدام کنند تا مردم آسان‌تر و راحت‌تر از شبکه‌های مجازی به سمت درگاههای تخصصی و کارآمد سوق پیدا کنند.
                            </p>
                        </div>
                        < br/>
                        < br/>
                        <a href='#'><span style={{bottom:"0" , left:"0"}} className="absolute"><img className="profile-square" src={require('./../Images/img_avatar.png')}></img> Ali Asghari</span></a>
                        <span style={{margin:"10px" , bottom:"0" , right:"0"}} className="persian-type absolute feuilleton">3 ساعت پیش</span>
                    </div>
                    <div className="card relative">
                        <div className="persian-type">
                            <h2>این یک Demo هست</h2>
                            <p className="justify-align ">
                            این مقام مسئول در شرکت بورس خاطرنشان کرد: در صورتی که مردم آگاهی کافی برای عدم استفاده از ابزارهای غیرمجاز و غیرکارشناسی را داشته و مخاطراتی که این شبکه‌ها برای آنها و سرمایه‌هایشان دارند را کسب کنند، آنگاه در انتخاب میان این درگاههای تخصصی و رسمی و شبکه‌های مجازی غیرمجاز، به طور قطعا درگاههای تخصصی  را انتخاب خواهند کرد.

خواجه نصیری تصریح کرد: در صورت مهیاشدن دسترسی آسان عموم مردم به درگاههای شناخته شده بازار سرمایه، مردم از این درگاههای رسمی، مورد اعتماد و شناخته شده استفاده  کرده و بدین ترتیب تمام خدمات مالی و سرمایه گذاری خود را از این مسیر درست دنبال خواهند کرد.

نایب رئیس شرکت بورس افزود: برای تحقق این امر، تنها راه این است که متولیان بازار سرمایه با صرف هزینه و سرمایه‌گذاری، نسبت به فرهنگ‌سازی در این زمینه اقدام کنند تا مردم آسان‌تر و راحت‌تر از شبکه‌های مجازی به سمت درگاههای تخصصی و کارآمد سوق پیدا کنند.
                            </p>
                        </div>
                        < br/>
                        < br/>
                        <a href='#'><span style={{bottom:"0" , left:"0"}} className="absolute"><img className="profile-square" src={require('./../Images/img_avatar.png')}></img> Ali Asghari</span></a>
                        <span style={{margin:"10px" , bottom:"0" , right:"0"}} className="persian-type absolute feuilleton">3 ساعت پیش</span>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className = "center-align">
                        <div style={{padding:"0"}}className="card center-align">
                            <div  style={{minWidth: "100%", height:"auto" , maxWidth:"600px" , margin:"0 auto"}}>Statistic</div>
                        </div>
                        <div style={{padding:"0"}}className="card center-align">
		           <iframe  style={{border:"none"}} />
			</div>
                    </div>
                </div>
            </div>
            <div className="row"  style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                <div className="col" xs={12} style={{textAlign:"center"}}><div className="card" id="container1"></div></div>
           </div>
           <div className="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                <div className="col">4</div>
                <div className="col">4</div>
                <div className="col">4</div>
            </div>
            <div className="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                    <Footer />
            </div>
        </div>
      );
    }
  }
 export default  desk;