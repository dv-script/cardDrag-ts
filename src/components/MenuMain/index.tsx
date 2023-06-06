import { MenuContainer, ButtonIconMenu } from './style'
import { GrChapterAdd } from 'react-icons/gr'

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
        <GrChapterAdd size={20} onClick={addFixedColumn} />
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
