import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {login} from "../../actions/usersActions";

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: ''
      }
    }

    loginHandler = e => {
        e.preventDefault();

        this
            .props
            .login(this.state.email, this.state.password);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (

            <div className="Login">
                <h1>Login component💻</h1>
                <form onSubmit={this.loginHandler}>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder='email@email.com'
                        onChange={this.handleChange}/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder='password'
                        onChange={this.handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
};

const MapStateToProps = ({usersReducer: state}) => {
    return {email: state.user.email, loginLoading: state.loginLoading};
};

export default withRouter(connect(MapStateToProps, {login})(Login))
