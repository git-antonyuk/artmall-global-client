import SearchBar from '../SearchBar';
import styles from './MobileSearch.module.scss';

const MobileSearch = () => {
    return (
        <div className={styles.search}>
            <SearchBar />
        </div>
    );
};

export default MobileSearch;
