import { Rnd } from 'react-rnd'
import { NewColumnFlex, BtnClose } from './style'

export function FlexibleColumn() {
  return (
    <Rnd default={{ x: 5, y: 100, width: 200, height: 0 }} bounds={'parent'}>
      <NewColumnFlex>
        <BtnClose />
        teste
      </NewColumnFlex>
    </Rnd>
  )
}
