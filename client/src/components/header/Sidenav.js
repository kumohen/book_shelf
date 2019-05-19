import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './SideNavItem';

const Nav = (props) => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:'#242424',
                maxWidth:'200px'
            }}
        >
            <SideNavItem />

        </SideNav>
    );
};

export default Nav;