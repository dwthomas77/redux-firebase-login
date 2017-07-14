import React, { Component } from 'react';
import Input from '../Common/Input';

const canSubmit = (state) => {
    console.log('the state is', state);
    const { emailInput, passwordInput } = state;
    
    return (emailInput.value && emailInput.value.length)
        && (passwordInput.value && passwordInput.value.length);
};

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setLoginType = this.setLoginType.bind(this);
        const emailInput = {
            name: 'email',
            type: 'text',
            value: '',
            onChange: this.handleInputChange,
            label: 'Email',
        };
        const passwordInput = {
            name: 'password',
            type: 'text',
            value: '',
            onChange: this.handleInputChange,
            label: 'Password',
        };
        this.state = {
            canSubmit: false,
            emailInput,
            passwordInput,
            loginType: 'signup',
            submitText: 'Signup',
        };
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const inputName = `${name}Input`;
        const isValid = !!(value && value.length);
        
        const updatedInput = {
            ...this.state[inputName],
            value,
            error: !isValid,
            msg: !isValid ? 'Required Field' : '',
        };
        
        const { emailInput, passwordInput } = this.state;
        
        const validationState = {
            emailInput,
            passwordInput,
        };
        
        validationState[inputName] = updatedInput;
        
        this.setState({
            [inputName]: updatedInput,
            canSubmit: canSubmit(validationState),
        });
    }
    
    handleSubmit(e) {
        const { emailInput, passwordInput } = this.state;
        
        console.log('this props', this.props);
        
        this.props.addUser({
            email: emailInput.value,
            password: passwordInput.value,
        });
    }
    
    setLoginType(e) {
        this.setState({
            loginType: e.target.name,
            submitText: e.target.name === 'signup' ? 'Signup' : 'Login',
        });
    }
    
    render() {
        const { isLoggedIn } = this.props;
        const { canSubmit, emailInput, loginType, passwordInput, submitText } = this.state;
        const msg = isLoggedIn ? 'Logged In' : 'Not Logged In';
        
        const signupButton = {
            className: loginType === 'signup' ? '--active' : '',
            name: 'signup',
            onClick: this.setLoginType,
        };

        const loginButton = {
            className: loginType !== 'signup' ? '--active' : '',
            name: 'login',
            onClick: this.setLoginType,
        };
        
        const submitButton = {
            className: 'login__submit-btn',
            disabled: !canSubmit,
            onClick: this.handleSubmit,
        };
        
        return (
            <div className="page">
                <h2>Login Page</h2>
                <p>Status: {msg}</p>
                
                <div className="login__toggle">

                    <button {...signupButton}>New User Signup</button>
                    <button {...loginButton}>Existing User Login</button>
                    
                </div>
                
                <div className="login__form">
                    
                    <Input {...emailInput} />
                    <Input {...passwordInput} />
                    
                    <div className="login__submit">
                        <button {...submitButton}>{submitText}</button>
                    </div>

                </div>
            </div>
        );
    }
    

}

export default Login;