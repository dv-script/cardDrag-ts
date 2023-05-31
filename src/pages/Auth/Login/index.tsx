import * as Styled from './style'

import Input from "../../../components/Input";

import LoginForm  from '../components/LoginForm';
import LoginSocial from '../components/LoginSocial';
import LoginSubmit from "../components/LoginSubmit";
import LoginChangeSign from "../components/LoginChangeSign";

export default function Login() {
  return (
    <LoginForm title='Login'>
      <Styled.LoginInputContent>
        <Input 
          labelContent="Username"
          inputPlaceHolder="Type your username"
        />
        <Input
          labelContent="Password"
          inputPlaceHolder="Type your password"
        />
      </Styled.LoginInputContent>

           

      <Styled.LoginForgotYourPassword>
        Forgot password?
      </Styled.LoginForgotYourPassword>

      <LoginSubmit>Login</LoginSubmit>
      <LoginChangeSign>Sign Up</LoginChangeSign>

      <LoginSocial />
    </LoginForm>
      
    );
}
