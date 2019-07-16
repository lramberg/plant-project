import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>           
            <Link className={styles.logo} to='/profile' >BB</Link>
            <Link to='' className={styles.logout} onClick={props.handleLogout}>LOG OUT</Link>

        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

return (
    <div className={styles.NavBar}>
        {nav}
    </div>
);
}

export default NavBar;
