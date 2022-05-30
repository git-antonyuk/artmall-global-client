import styles from './MobileMenu.module.scss';
import { stateGlobalUi } from '../../../state/globalUi';
import { useSnapshot } from 'valtio';


const MobileMenu = () => {
    const snap = useSnapshot(stateGlobalUi);
    console.log('This is MobileMenu component');
    return (
        <div className="mobile-menu">
            {snap.showMobileMenu ? 'true' : 'false'}
            <div>MobileMenu</div>
        </div>
    );
};

export default MobileMenu;
