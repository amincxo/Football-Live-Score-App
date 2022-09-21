import React , {useState} from 'react';
import styles from "./Header.module.css"
import profileImage from "../images/Rectangle.png"
import search from "../images/search.svg"
import Close from "../images/close.svg"

const Header = () => {
    const [searchBar, setSearchBar] = useState(true);
    return (
        <div className={styles.header} >
            <img src={profileImage} alt="profile" className={styles.profileImage} />
            {searchBar && <p className={styles.banner} >Live<span>Score</span></p>}
            {searchBar ?
            <span onClick={()=>{setSearchBar(!searchBar)}}><img className={styles.search}  src={search} alt="search" /></span>
            : <div className={styles.searchBox} > <img src={Close} alt="close" className={styles.close} onClick={()=>{setSearchBar(!searchBar)}}  /> <input type="text" placeholder='Team ,League ,Players' /><img className={`${styles.searchLogo}`}  src={search} alt="search" /> </div>}
            
        </div>
    );
};

export default Header;