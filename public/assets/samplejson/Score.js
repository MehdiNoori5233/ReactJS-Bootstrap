<fieldset class="rating">
<input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
<input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
<input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
<input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
<input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
<input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
<input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
<input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
<input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
<input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>


import React, {Component} from 'react';
import axios from 'axios'

export default class ShopHeaders extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
        return (
            <div>
                {
                this.state.customerList.data.map(customer =>
                  <div key={customer.name}>
                      <div className="w3-content">
                          <div className="w3-white w3-card w3-row w3-margin-bottom w3-round-xlarge w3-animate-bottom">
                            <div className="w3-col s5">
                              <img className= "mn-round-left" src={require('./../Images/test2.jpg')}  style={{width:"100%",height:"auto"}} />
                            </div>
                            <div className="w3-col s7">
                                <div className= "w3-margin-left w3-margin-top w3-row">
                                  <div className="w3-third">
                                    {customer.name}
                                  </div>  
                                </div>
                                <div className= "w3-margin-left w3-margin-top w3-row w3-opacity" style={{maxWidth:"100%",maxHeight:"1%", fontSize:"2vw"}}>
                                    {customer.desc}
                                </div>
                                <hr style={{padding:"0",margin:"0"}} />
                                <div className= "w3-row w3-padding" style={{position:"absolute", bottom:"0"}}>
                                      <span className= "w3-margin-left w3-opacity" style={{fontSize:"2vw"}}>{customer.dealerName}</span>
                                      <img className= "w3-left w3-circle" src={require('./../Images/profile.jpeg')} style={{width:"9%",minHeight:"1px"}}/>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
                    )
                }
            </div>
    )
  }
}
