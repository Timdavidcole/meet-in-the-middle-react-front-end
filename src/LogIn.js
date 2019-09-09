import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";
import axios from "axios";
import "./styles.css";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
		"email": "",
		"password": "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001', { session: this.state })
    .then(response => {
      console.log("THIS WORKS");
    	console.log(response)
    })
    .catch(error => {
      console.log("nooo");
      console.log(error.response)
    });
  }

  render() {
  return (
    <div className="signUpContainer">
      <form
        onSubmit={e => {
          this.onSubmit(e);
        }}
      >

        <center> <div className="signUpForm">
          <img className="formLogo" src="midl-logo.png" />
            <div className="formHeading">
              Log in to your meet in the midl account
            </div>

            <input
              id="log_in_email"
              type="text"
              className="formFillIn"
              placeholder={"Email address"}
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />

              <input
                id="log_in_password"
                type="password"
                className="formFillIn"
                placeholder={"Password"}
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />

              <input
                id="log_in_submit"
                className="enterButton"
                type="submit"
                value="Log In"
              />

            </div>
        </center> </form>
      </div>
    );
  }
}

export default LogIn;
