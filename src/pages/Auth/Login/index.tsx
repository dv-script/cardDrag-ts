import * as Style from  "./style";

import LoginForm  from '../components/LoginForm';
import LoginSocial from '../components/LoginSocial';

export default function Login() {
    return (
        <LoginForm title="Login">

            <Style.LoginInputContent>
                <Style.LoginLabel>Username</Style.LoginLabel>
                <Style.LoginInput placeholder="Type your username" />
                <Style.LoginSpan />
            </Style.LoginInputContent>
                    
            <Style.LoginInputContent>
                <Style.LoginLabel>Password</Style.LoginLabel>
                <Style.LoginInput placeholder="Type your password" />
                <Style.LoginSpan />
            </Style.LoginInputContent>

            <Style.LoginForgotYourPassword>Forgot password?</Style.LoginForgotYourPassword>

            <Style.LoginSubmit>Login</Style.LoginSubmit>
            <Style.LoginSignUp>Sign Up</Style.LoginSignUp>
            <LoginSocial />
        </LoginForm>
      
    );
}
