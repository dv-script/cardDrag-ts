import { BsGoogle, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import * as Style from './style'

export default function LoginSocial() {
  return (
    <Style.SocialSection>
      <Style.SocialSignUpText>Ou cadastre-se usando:</Style.SocialSignUpText>

      <Style.SocialBox>
        <Style.SocialOption style={{ backgroundColor: '#3b5998' }}>
          <FaFacebookF style={{ color: '#fff', fontSize: '25px' }} />
        </Style.SocialOption>

        <Style.SocialOption style={{ backgroundColor: '#1da1f2' }}>
          <BsTwitter style={{ color: '#fff', fontSize: '25px' }} />
        </Style.SocialOption>

        <Style.SocialOption style={{ backgroundColor: '#ea4335' }}>
          <BsGoogle style={{ color: '#fff', fontSize: '25px' }} />
        </Style.SocialOption>
      </Style.SocialBox>
    </Style.SocialSection>
  )
}
