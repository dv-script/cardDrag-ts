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
          label="Username"
          placeholder="Type your username"
          type="text"
        />

        <Input
          label="Password"
          placeholder="Type your password"
          type="password"
          
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
