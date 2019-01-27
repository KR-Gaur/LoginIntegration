import React from "react";
import Welcome from "../Welcome";
import { stat } from "fs";
import Route from "react-router-dom";
import Main from "../pages/Main/";
import renderApp from "../index";
// const Welcome = ({user, onSignOut})=> {
//     // This is a dumb "stateless" component
//     return (
//       <div>
//         Welcome <strong>{user.username}</strong>!
//         <a href="javascript:;" onClick={onSignOut}>Sign out</a>
//       </div>
//     )
//   }

class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs
  signIn(username, password) {
    // this.setState({
    //   user: {
    //     username,
    //     password
    //   }
    // });

    return <div>Heddfd</div>;
  }
  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    renderApp(Main);
  }

  render() {
    console.log("Login", this.props.username);
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
// if (module.hot) {
//   //resolve this to convert into class
//   //speeds up dev -retain app state -updates only what is changed
//   module.hot.accept("../pages/Main", () => {
//     const NextApp = require("../pages/Main").default;
//     console.log("Bye", NextApp);
//     renderApp(NextApp);
//   });
// }
export default LoginForm;
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // the initial application state
//     this.state = {
//       user: null
//     };
//   }

// App "actions" (functions that modify state)
// signIn(username, password) {
// This is where you would call Firebase, an API etc...
// calling setState will re-render the entire app (efficiently!)
//    this.setState({
//   user: {
// username,
//         password
//       }
//     });
// //   }

//   signOut() {
//     // clear out user from state
//     this.setState({ user: null });
//   }

//   render() {
//     // Here we pass relevant state to our child components
//     // as props. Note that functions are passed using `bind` to
//     // make sure we keep our scope to App
//     return (
//       <div>
//         <h1>My cool App</h1>
//         {this.state.user ? (
//           <Welcome user={this.state.user} onSignOut={this.signOut.bind(this)} />
//         ) : (
//           <LoginForm onSignIn={this.signIn.bind(this)} />
//         )}
//       </div>
//     );
//   }
// }
const mapStateToProps = state => ({
  user: state.Auth.user
});

//ReactDOM.render(<App />, document.getElementById("app"));
