import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import MenuData from './../DummyData/Menu.json';

import './../Styles/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      //items: []
      items: MenuData
    };
  }
  componentDidMount() {
    //fetch("http://192.168.0.61:7878/ptc/accessMenu/setAccessMenu?id=1")
    fetch("http://192.168.1.100:7878/ptc/accessMenu/setAccessMenu?id=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { items } = this.state;

    function ListItem(props) {
      const value = props.value;
      const menus = props.value.menus;
      const DetailsMenu = menus.map((menu) =>
        <li key={menus.toString()} style={{lineHeight:"40px"}}  className="megamenu__item">
          <a style={{ textDecoration: "none" }} href={menu.name}>{menu.name}</a>
        </li>
      );
      return (
        <li key={value.id.toString()} className="megamenu__item">
          <a style={{ textDecoration: "none" }} href={value.name}>{value.name}</a>
          <ul key={items.toString()} className="megamenu__subitem">
            {DetailsMenu}
          </ul>
        </li>
      );
    }

    function HeaderMenu(props) {
      const listItems = items.map((item) =>
        <ListItem value={item} />
      );
      return (
        <ul key={items.toString()} className="megamenu">
          {listItems}
        </ul>
      );
    }
    return (
      <Container>
        <Row style={{ float: "right"}} className="megamenu-container" id="#megamenu">
          <HeaderMenu numbers={items} />
        </Row>
      </Container>
    )
  };
}
export default Menu;