import { MenuContainer, ButtonIconMenu } from './style'
import { GrChapterAdd } from 'react-icons/gr'
import { TfiLayoutColumn3 } from 'react-icons/Tfi'

type MenuMainProps = {
  AddFlexibleColumn: () => void
  addFixedColumn: () => void
}

const MenuMain: React.FC<MenuMainProps> = ({
  AddFlexibleColumn,
  addFixedColumn,
}) => {
  return (
    <MenuContainer>
      <ButtonIconMenu onClick={AddFlexibleColumn}>
        <GrChapterAdd size={18} />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <TfiLayoutColumn3 size={20} onClick={addFixedColumn} />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <GrChapterAdd />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <GrChapterAdd />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <GrChapterAdd />
      </ButtonIconMenu>
      <ButtonIconMenu>
        <GrChapterAdd />
      </ButtonIconMenu>
    </MenuContainer>
  )
}

export default MenuMain