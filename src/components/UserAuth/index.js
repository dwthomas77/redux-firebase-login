import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import './styles.css';

const canSubmit = (state) => {
    const { emailInput, passwordInput } = state;
    
    return (emailInput.value && emailInput.value.length)
        && (passwordInput.value && passwordInput.value.length);
};

class UserAuth extends Component {
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setLoginType = this.setLoginType.bind(this);
        const emailInput = {
            autoComplete: 'email',
            id: 'userEmail',
            name: 'email',
            type: 'email',
            value: '',
            onChange: this.handleInputChange,
            label: 'Email',
        };
        const passwordInput = {
            autoComplete: 'password',
            id: 'userPassword',
            name: 'password',
            type: 'password',
            value: '',
            onChange: this.handleInputChange,
            label: 'Password',
        };
        this.state = {
            canSubmit: false,
            emailInput,
            passwordInput,
            loginType: 'login',
            submitText: 'Login',
        };
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const inputName = `${name}Input`;
        const isEmail = inputName.indexOf('email') !== -1;
        let isValid = !!(value && value.length);
        
        if (isValid && isEmail) {
            const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = emailValidation.test(value);
        }
        
        const validMsg = isEmail ? 'Enter a valid email address' : 'This field is required';
        
        const updatedInput = {
            ...this.state[inputName],
            value,
            error: !isValid,
            msg: !isValid ? validMsg : '',
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
        const { emailInput, loginType, passwordInput } = this.state;
        const { registerUser, loginUser } = this.props;
        
        e.preventDefault();
        
        if(loginType === 'signup') {
            registerUser({
                email: emailInput.value,
                password: passwordInput.value,
            });
        } else {
            loginUser({
                email: emailInput.value,
                password: passwordInput.value,
            });
        }
    }
    
    setLoginType(e) {
        const { loginType } = this.state;
        
        this.setState({
            loginType: loginType === 'signup' ? 'login' : 'signup',
            submitText: loginType === 'signup' ? 'Login' : 'Signup',
        });
    }
    
    render() {
        const { errors, user } = this.props;
        const { canSubmit, emailInput, loginType, passwordInput, submitText } = this.state;
        
        const submitButton = {
            className: 'login__submit-btn',
            disabled: !canSubmit,
            onClick: this.handleSubmit,
        };
        
        if (user.uid) {
            emailInput.disabled = true;
            passwordInput.disabled = true;
        }

        let loginPrompt;
        let registerPrompt;
        
        if (loginType === 'signup') {
            loginPrompt = <span className="login__link" onClick={this.setLoginType}>Login</span>;
            registerPrompt = <h2>New User Signup</h2>;
        } else {
            registerPrompt = <span className="login__link" onClick={this.setLoginType}>New User Signup</span>;
            loginPrompt = <h2>Login</h2>;
        }
        
        const headingText = !user.uid ? 'Login or Register your account' : 'User Account Page';
        
        return (
            <div className="page">
                <h2 className="login-title user-auth__title">{headingText}</h2>
                
                <div className="login__toggle user-auth__type">
                    {loginPrompt}
                    {registerPrompt}
                </div>
                
                <div className="login__form">
                    
                    <form className="login__form-fields">
                        {!!errors.length && <div className="user-auth__error">{errors.toString()}</div>}
                        <Input {...emailInput} />
                        <Input {...passwordInput} />
                        
                        <div className="login__submit">
                            <button {...submitButton}>{submitText}</button>
                        </div>
                    </form>
                    
                    <div className="login__actions">

                        <span><Link to="/reset-password">Reset your Password</Link></span>

                    </div>

                </div>
            </div>
        );
    }
    

}

export default UserAuth;