import React, { useState } from 'react'

import { CampeonatoTitle } from './style';

import { Card } from '../../components/Card/index';
import { CampeonatoContainer, CardContainer, HigherContainer } from '../../components/Container';
import { NavBar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch/index'
import { Error } from '../../components/Error'
import { Loading } from '../../components/Loading'

export const Calendar = () => {
    const [date, setDate] = useState<Date>(() => {
        const newDate = new Date()
        newDate.setFullYear(2019)
        return newDate
    });
    const { status, data, statusCode } = useFetch(date);

    const Component = (
        <>
            <NavBar
                actualDate={date}
                updateDate={(date: Date) => setDate(date)}
            />
            <HigherContainer>
                {data?.campeonatos && data?.campeonatos.map(camp =>
                (
                    <CampeonatoContainer key={camp.campeonato_id}>
                        <CampeonatoTitle>{camp.nome_do_campeonato}</CampeonatoTitle>
                        <CardContainer>
                            {camp.jogos.map(jogo => (
                                <Card
                                    key={jogo.jogo_id}
                                    jogo={jogo}
                                    actualDate={date}
                                />
                            ))}
                        </CardContainer>
                    </CampeonatoContainer>
                )
                )}
            </HigherContainer>
        </>
    )

    if ((status === "fetched" || status === "error") && statusCode !== 200) {
        return <Error />
    } else {
        return !data ? <Loading /> : Component
    }

}