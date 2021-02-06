import React from 'react';

import { Link, NavBarComponent, NavBarContent, Title } from './style';

export const NavBar = () => {
    const anterior = "<"
    const posterior = ">"
    
    return (<NavBarComponent> 
        <NavBarContent>
            <Link href="#" >{anterior}</Link>
            <Title>Ontem</Title>
            <Link href="#">{posterior}</Link>
        </NavBarContent>
    </NavBarComponent>)
}