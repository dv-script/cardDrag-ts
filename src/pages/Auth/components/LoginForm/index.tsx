import { PropsWithChildren } from 'react'
import { ILoginForm } from './types'

import * as Styled from './style'

export default function LoginForm({
  children,
  title,
}: PropsWithChildren<ILoginForm>) {
  return (
    <Styled.LoginSection>
      <Styled.LoginContainer>
        <Styled.LoginBox>
          <Styled.LoginTitle>{title}</Styled.LoginTitle>

          {children}
        </Styled.LoginBox>
      </Styled.LoginContainer>
    </Styled.LoginSection>
  )
}
