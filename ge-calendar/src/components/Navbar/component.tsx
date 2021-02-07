import React, { useState } from 'react';

import { NavbarType } from './interface';
import { Link, NavBarComponent, NavBarContent, Title } from './style';

export const NavBar = ({ actualDate, updateData }: NavbarType) => {
    const [dateTime, setDateTime] = useState<Date>(new Date());
    const anterior = "<"
    const posterior = ">"

    const handleClick = (button: string) => {
        button === "anterior"
            ? dateTime?.setDate(dateTime.getDate() - 1)
            : dateTime?.setDate(dateTime.getDate() + 1)
        const teste = dateTime?.getTime();
        updateData(dateTime.toISOString().split('T')[0])
        setDateTime(new Date(teste));
    }

    const dayHandler = () => {
        if (actualDate.getDate() === dateTime?.getDate()) {
            return "Hoje"
        }
        if (actualDate.getDate() === (dateTime?.getDate() + 1)) {
            return "Ontem"
        }
        if (actualDate.getDate() === (dateTime?.getDate() - 1)) {
            return "Amanhã"
        }
        return dateTime?.toLocaleDateString()
    }

    return (<NavBarComponent>
        <NavBarContent>
            <Link href="#" onClick={() => handleClick("anterior")} >{anterior}</Link>
            <Title>{dayHandler()}</Title>
            <Link href="#" onClick={() => handleClick("posterior")}>{posterior}</Link>
        </NavBarContent>
    </NavBarComponent>)
}