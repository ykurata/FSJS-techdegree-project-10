import { Component } from 'react';


class SignOut extends Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return null
  }
}

export default SignOut;
