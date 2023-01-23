import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class UserProfile extends Component {
  state = {
    menuOpen: false
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  render() {
    return (
      <>
        <i className="fas fa-bars" 
           style={{position: 'absolute', left: '20px', top: '20px', cursor: 'pointer'}}
           onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
        </i>
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <a href="/Home">View Profile</a>
          <a href="/Home"></a>
          <a href="/Home">View Parks</a>
          <a href="/Home">Chats Box</a>
          <a href="/Home">Feedback</a>
          <a href="/Home">Log out</a>
        </Menu>
      </>
    );
  }
}

export default UserProfile;
