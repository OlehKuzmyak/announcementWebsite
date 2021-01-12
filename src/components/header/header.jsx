import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './header.module.css';

const Header = (props) => {
    let search = React.createRef();
    return (
        <header className={s.AppHeader} >
            <div className={s.addWraper}>
                <NavLink to='/add' className={s.add}>+</NavLink>
            </div>
            <div className={s.searchWrapper}>
                <input type="text" value={props.searchText} 
                    onChange={() => { props.setSearchText(search.current.value) }} ref={search} />
            </div>
        </header >);
}
export default Header;