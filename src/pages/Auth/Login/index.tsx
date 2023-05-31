import * as Styled from  "./style";

import LoginForm  from '../components/LoginForm';
import LoginSocial from '../components/LoginSocial';
import LoginInput from "../components/LoginInput";
import LoginSubmit from "../components/LoginSubmit";
import LoginChangeSign from "../components/LoginChangeSign";

export default function Login() {
    return (
        <LoginForm title="Login">

            <LoginInput 
                labelContent="Username"
                inputPlaceHolder="Type your username"
            />
            <LoginInput
                labelContent="Password"
                inputPlaceHolder="Type your password"
            />

            <Styled.LoginForgotYourPassword>Forgot password?</Styled.LoginForgotYourPassword>

            <LoginSubmit>Login</LoginSubmit>
            <LoginChangeSign>Sign Up</LoginChangeSign>

            <LoginSocial />
        </LoginForm>
      
    );
}
