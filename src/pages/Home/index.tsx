import { Rnd } from 'react-rnd'
import Menu from '../../components/MenuHeader'
import MenuMain from '../../components/MenuMain'
import { MainContainer } from './style'

export default function Home() {
  return (
    <>
      <Menu></Menu>

      <MainContainer>
        <Rnd default={{ x: 5, y: 100, width: 60, height: 0 }} bounds={'parent'}>
          <MenuMain />
        </Rnd>
      </MainContainer>
    </>
  )
}
