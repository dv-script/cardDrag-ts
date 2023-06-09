import * as Styled from './style'

import LoginForm from '../components/LoginForm'
import Input from '../../../components/Input'
import LoginSubmit from '../components/LoginSubmit'
import LoginChangeSign from '../components/LoginChangeSign'

export default function SignUp() {
  return (
    <LoginForm title='Cadastro'>
      <Input
        label='Nome Completo'
        placeholder='Insira seu nome completo'
        type='text'
      />

      <Input label='Email' placeholder='Insira seu email' type='email' />

      <Input label='Senha' placeholder='Insira sua senha' type='password' />

      <Input
        label='Numero de telefone'
        placeholder='(xx) xxxxx-xxxx'
        type='phone'
      />

      <LoginSubmit>Cadastrar</LoginSubmit>
      <Styled.SignUpDoYouHaveAnAccount>
        Ja possui uma conta ?
      </Styled.SignUpDoYouHaveAnAccount>
      <LoginChangeSign>Sign in</LoginChangeSign>
    </LoginForm>
  )
}
