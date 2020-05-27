import React, { Component } from 'react';
import axios from 'axios';


import Main from './Main';
import './../Styles/grid.css';
import './../Styles/pagination.css';
import './../Styles/spining.css';


class grid extends Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            order:'id',
            sort :'asc',
            lenth : 10 ,
            search:'',
            totalCount:0
          }
          this.handleSubmission = this.handleSubmission.bind(this); 
          this.handleClick = this.handleClick.bind(this); 
          this.pagination = this.pagination.bind(this); 
      }
      componentDidMount() {
        //because we have client side routing I can Not use window.addEventListener beacause My grid did not load ; 
        //and if i want to load my grid , i should press F5 or enter link url
        //window.addEventListener('load', this.handleSubmission);
        this.handleSubmission();
      }
    handleSubmission(event,_start,_from){
        //event.preventDefault();
        document.getElementById("loader").style.display = "inline-block";
        if (_start == null || _start == undefined) {_start = 0  ; document.getElementById(1).classList.add("active");};
        if (_from == null || _from == undefined) _from = 10 ;
        //axios.post('http://192.168.1.115:7878/ptc/MenuItems/getItems',
        axios.post('http://192.168.0.96:7878/ptc/MenuItems/getItems',
                {
                    "start":_start,
                    "lenth":_from,
                    "order":'id',
                    "sort" :'asc',
                    "search":this.state.search
                })
                    .then(function(response){
                      this.setState({data:response.data.Model});
                      this.setState({totalCount:response.data.totalConut});
                      document.getElementById("loader").style.display = "none";
                    }.bind(this))
                    .catch(function(error){
                      alert("Api does not work !!!")
                    }.bind(this))
      }
      handleClick = (event) => {
        if (event.keyCode=='13'){
            var searchid =  document.getElementById("search-id").value;
            this.setState({search:searchid});
            this.handleSubmission(event);
        }
      }
      pagination = (event,_pageNumber) => {
            var _start = ((_pageNumber - 1) * this.state.lenth ) ;
            var _from = (_pageNumber * this.state.lenth);
            this.handleSubmission(event,_start,_from);

            var _oldPageNummberId = document.getElementsByClassName("active")[0].id;;
            var element = document.getElementById(_oldPageNummberId);
            element.classList.remove("active");

            var _newPageNummberId = event.target.id ;
            document.getElementById(_newPageNummberId).classList.add("active");
      }
    render() {
        return (  
          <div className="container-fluid">
              <div className="row">
                      <Main />
              </div>
            <div className="row" style={{backgroundColor : "#f5f7f8",padding : "16px"}}>
                  <div className="col-sm-1">
                  </div>
                  <div className="col-sm-10">
                    <div class="table-responsive">
                        <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Creator</th>
                                <th>Item Name</th>
                                <th>Row Num</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><input type="text" id="search-id" className="search-input-field" onKeyDown = {(e) => {this.handleClick(e)}} /></td>
                                <td></td>
                            </tr>
                         </thead>
                         <tbody>
                                {this.state.data.map(function(item, key) {                       
                                    return (
                                        <tr key = {key}>
                                            <td><a href='/'><span className="fa fa-id-card-o grid-span-0"></span></a>{item.id}</td>
                                            <td>{item.Creator}</td>
                                            <td>{item.ItemName}</td>
                                            <td>{item.rownum}</td>
                                        </tr>
                                    )                                
                                })}  
                            </tbody>
                        </table>
                    </div>
                        <div class="pagination">
                            <a>&laquo;</a>
                            <a id="1" onClick = {(e) => {this.pagination(e,1)}}>1</a>
                            <a id="2" onClick = {(e) => {this.pagination(e,2)}}>2</a>
                            <a id="3" onClick = {(e) => {this.pagination(e,3)}}>3</a>
                            <a id="4" onClick = {(e) => {this.pagination(e,4)}}>4</a>
                            <a>&raquo;</a>
                        </div>
                        <div>
                            
                        </div>
                  </div>
                  <div className="col-sm-1">
                  </div>
                  <div id="loader"></div>
            </div>
          </div>
        );
      }
}
export default grid;