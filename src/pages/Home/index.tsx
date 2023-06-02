import { Rnd } from 'react-rnd'
import Menu from '../../components/MenuHeader'
import MenuMain from '../../components/MenuMain'

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <Rnd default={{ x: 5, y: 80, width: 0, height: 10 }}>
        <MenuMain />
      </Rnd>
    </>
  )
}
