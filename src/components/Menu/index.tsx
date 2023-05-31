import { Link } from 'react-router-dom';
import {MenuContainer, HeaderButton, MenuLeft, MenuRigth, styleLink, styleIcons} from './style.js';
import { MdOutlineCancel } from 'react-icons/md';
import {BsInfoCircle} from 'react-icons/bs';
import {TiHome} from 'react-icons/ti';


export default function Menu() {

    return (
        <MenuContainer>
            <MenuLeft>
                <Link to={'/home'} style={styleLink}><HeaderButton>Home<TiHome style={styleIcons} size={20}/></HeaderButton></Link>
            </MenuLeft>
            <MenuRigth>
              <Link to={'/sobre'} style={styleLink}><HeaderButton>Ajuda<BsInfoCircle style={styleIcons} size={15}/></HeaderButton></Link>
              <a href="https://google.com" style={styleLink}> <HeaderButton>Quit<MdOutlineCancel style={styleIcons} size={15}/></HeaderButton></a>
            </MenuRigth>
        </MenuContainer>
    )
} 