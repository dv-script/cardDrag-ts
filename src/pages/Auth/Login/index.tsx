import * as Styled from './style'

import Input from '../../../components/Input'

import LoginForm from '../components/LoginForm'
import LoginSocial from '../components/LoginSocial'
import LoginSubmit from '../components/LoginSubmit'
import LoginChangeSign from '../components/LoginChangeSign'

import { RiLoginBoxFill } from 'react-icons/ri'

export default function Login() {
  return (
    <LoginForm title='Login'>
      <Styled.LoginInputContent>
        <Input label='Login' placeholder='Insira seu login' type='text' />

        <Input label='Senha' placeholder='Insira sua senha' type='password' />
      </Styled.LoginInputContent>

      <Styled.LoginForgotYourPassword>
        Esqueceu sua senha?
      </Styled.LoginForgotYourPassword>

      <LoginSubmit>
        Entrar
        <RiLoginBoxFill size={25} />
      </LoginSubmit>
      <LoginChangeSign>Cadastre-se</LoginChangeSign>

      <LoginSocial />
    </LoginForm>
  )
}
