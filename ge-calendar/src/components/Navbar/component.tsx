import React, { useState } from 'react';

import { NavbarType } from './interface';
import { Link, NavBarComponent, NavBarContent, Title } from './style';

export const NavBar = ({ actualDate, updateDate }: NavbarType) => {
    const [dateTime, setDateTime] = useState<Date>(() => {
        const recentDate = new Date()
        recentDate.setFullYear(2019)
        return recentDate
    });
    const anterior = "<"
    const posterior = ">"

    const handleClick = (button: string) => {
        button === "anterior"
            ? actualDate?.setDate(actualDate.getDate() - 1)
            : actualDate?.setDate(actualDate.getDate() + 1)
        updateDate(new Date(actualDate))
    }

    const dayHandler = () => {
        if (actualDate.getDate() === dateTime?.getDate()) {
            return "Hoje"
        }
        if (actualDate.getDate() === (dateTime?.getDate() + 1)) {
            return "Amanhã"
        }
        if (actualDate.getDate() === (dateTime?.getDate() - 1)) {
            return "Ontem"
        }
        return actualDate?.toLocaleDateString()
    }

    return (
        <NavBarComponent>
            <NavBarContent>
                
                <Link href="#" onClick={() => handleClick("anterior")} >{anterior}</Link>
                
                <Title>{dayHandler()}</Title>
                
                <Link href="#" onClick={() => handleClick("posterior")}>{posterior}</Link>

            </NavBarContent>
        </NavBarComponent>
    )
}