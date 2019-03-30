import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = (props) => {
  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        <div>
          <form onSubmit={props.onSubmit}>
            <div>
              <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" onChange={props.onChange}></input>
            </div>
              <div><input id="password" name="password" type="password" className="" placeholder="Password" onChange={props.onChange}></input>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">Sign In</button>
              <button className="button button-secondary" >Cancel</button>
            </div>
          </form>
        </div>
        <p>&nbsp;</p>
        <p>Don't have a user account? <NavLink to='/signup'>Click here</NavLink> to sign up!</p>
      </div>
    </div>
  );
}





// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       emailAddress: '',
//       password: ''
//     }
//   }
//
//   onChange = e => {
//     this.setState({ [e.target.id] : e.target.value })
//   }
//
//   componentDidMount() {
//     this.onSubmit();
//   }
//
//
//   onSubmit = (event) => {
//     // e.preventDefault();
//     axios.get('/api/users', { headers : { emailAddress: this.state.emailAddress, password: this.state.password } } )
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log("There's some error happend!")
//       });
//   }
//
//
//   render() {
//     console.log(this.state.emailAddress);
//     console.log(this.state.password);
//     return (
//       <div className="bounds">
//         <div className="grid-33 centered signin">
//           <h1>Sign In</h1>
//           <div>
//             <form onSubmit={this.onSubmit}>
//               <div>
//                 <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value={this.state.emailAddress} onChange={this.onChange}></input>
//               </div>
//                 <div><input id="password" name="password" type="password" className="" placeholder="Password" value={this.state.password} onChange={this.onChange}></input>
//               </div>
//               <div className="grid-100 pad-bottom">
//                 <button className="button" type="submit">Sign In</button>
//                 <button className="button button-secondary" >Cancel</button>
//               </div>
//             </form>
//           </div>
//           <p>&nbsp;</p>
//           <p>Don't have a user account? <NavLink to='/signup'>Click here</NavLink> to sign up!</p>
//         </div>
//       </div>
//     );
//   }
// }

export default SignIn;
