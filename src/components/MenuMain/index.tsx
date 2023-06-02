import { ContainerMenu, IconMenu, ButtonIconMenu } from './style'

export default function MenuMain() {
  function test() {
    console.log('oi')
  }

  return (
    <ContainerMenu>
      <ButtonIconMenu onClick={test}>
        <IconMenu />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <IconMenu />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <IconMenu />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <IconMenu />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <IconMenu />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <IconMenu />
      </ButtonIconMenu>
    </ContainerMenu>
  )
}
