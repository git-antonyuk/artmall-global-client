import styles from './Hamburger.module.scss';
import { stateGlobalUi, toggleShowMobileMenu } from '../../../state/globalUi';
import { useSnapshot } from 'valtio';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const Hamburger = () => {
    const snap = useSnapshot(stateGlobalUi);
    const onClick = () => {
        toggleShowMobileMenu();
    }
    return snap.showMobileMenu 
        ? <CloseOutlined onClick={onClick}/>
        : <MenuOutlined onClick={onClick}/>
};

export default Hamburger;
