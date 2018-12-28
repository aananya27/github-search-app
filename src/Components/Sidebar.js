import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
//import 'font-awesome/css/font-awesome.min.css';
class Sidebar extends Component {
  render(){
    return (
      <div id="navbar">
      
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <br/>
        <a  href="#">
          <li>My Bench</li>
        </a>
        <br/>
        <a href="#">
          <li>Shared With ME</li>
        </a>
      </ul>
    
    </div>

    );
  }
}
export default Sidebar;
