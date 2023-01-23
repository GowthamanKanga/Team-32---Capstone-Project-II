import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class ClientProfile extends Component {
  state = {
    menuOpen: false
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  render() {
    return (
      <div>
        <div onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
          <i className="fas fa-bars"></i>
        </div>
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <a href="#">View Profile</a>
          <a href="#">Settingd</a>
          <a href="#">View Parks</a>
          <a href="#">Chats Box</a>
          <a href="#">Feedback</a>
          <a href="#">Log out</a>
        </Menu>
      </div>
    );
  }
}

export default ClientProfile;