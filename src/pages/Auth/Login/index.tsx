import * as Styled from  "./style";

import LoginForm  from '../components/LoginForm';
import LoginSocial from '../components/LoginSocial';

export default function Login() {
    return (
        <LoginForm title="Login">

            <Styled.LoginInputContent>
                <Styled.LoginLabel>Username</Styled.LoginLabel>
                <Styled.LoginInput placeholder="Type your username" />
                <Styled.LoginSpan />
            </Styled.LoginInputContent>
                    
            <Styled.LoginInputContent>
                <Styled.LoginLabel>Password</Styled.LoginLabel>
                <Styled.LoginInput placeholder="Type your password" />
                <Styled.LoginSpan />
            </Styled.LoginInputContent>

            <Styled.LoginForgotYourPassword>Forgot password?</Styled.LoginForgotYourPassword>

            <Styled.LoginSubmit>Login</Styled.LoginSubmit>
            <Styled.LoginSignUp>Sign Up</Styled.LoginSignUp>
            <LoginSocial />
        </LoginForm>
      
    );
}
