import React, { useEffect, useState } from 'react'

import { CampeonatoTitle } from './style';

import { Card } from '../../components/Card/index';
import { CampeonatoContainer, CardContainer, HigherContainer } from '../../components/Container';
import { NavBar } from '../../components/Navbar';
import { getData } from '../../api';
import { MockDataType } from '../../api/interface';

export const Calendar = () => {
    const [data, setData] = useState<MockDataType>();
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const newDate = new Date()
        setDate(newDate)
        setData(getData(newDate.toISOString().split('T')[0]))
    }, [])

    const updateData = (date: string): void => {
        setData(getData(date))
    }

    return !data
        ? <div>Carregando...</div>
        : (
            <>
                <NavBar actualDate={date} updateData={updateData} />
                <HigherContainer>
                    {data?.campeonatos && data?.campeonatos.map((camp) =>
                    (<CampeonatoContainer key={camp.campeonato_id}>
                        <CampeonatoTitle>{camp.nome_do_campeonato}</CampeonatoTitle>
                        <CardContainer>
                            {camp.jogos.map((jogo) => (
                                <Card key={jogo.jogo_id} jogo={jogo} actualDate={date} />
                            ))}
                        </CardContainer>
                    </CampeonatoContainer>)
                    )}
                </HigherContainer>
            </>
        )
}