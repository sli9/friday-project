import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/login'>Login</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/regist'>Regist</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/passwordRecovery'>PasswordRecovery</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/passwordNew'>PasswordNew</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/superComponents'>SuperComponents</NavLink>
        </div>
    </nav>
}

export default Navbar;
