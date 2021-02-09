import React, { useEffect, useState } from 'react';

import {
    CardStyle,
    Encerrado,
    Header,
    Placar,
    Rodada,
    Time,
    TimeContainer,
    TempoReal
} from './style';
import { CardType } from './interface'


export const Card = ({ jogo: { mandante, visitante, rodada, hora_realizacao, data_realizacao }, actualDate }: CardType) => {
    const [status, setStatus] = useState("");

    useEffect(() => {
        actualDate.setFullYear(2019)
        getMatchStatus(actualDate)
    }, [])

    const getMatchStatus = (date: Date) => {
        const dateMillis = Date.parse(date.toString());
        const matchTime = Date.parse(data_realizacao + 'T' + hora_realizacao)
        if (dateMillis - matchTime < 0) {
            setStatus(hora_realizacao.slice(0, 5))
        } else {
            dateMillis - matchTime > 7200000
                ? setStatus("Encerrado")
                : setStatus("Tempo Real")
        }
    }

    return (
        <CardStyle>
            <Header>
                <span>Futebol</span>
                {
                    status !== "Tempo Real"
                        ? <Encerrado href="#" >{status}</Encerrado>
                        : <TempoReal href="#" >{status}</TempoReal>
                }

            </Header>
            <TimeContainer>
                <Time>
                    <img height="24px" width="24px" alt="escudo" src={mandante.escudos['30x30']} />
                    <span style={{ marginLeft: '12px' }}>{mandante.nome}</span>
                </Time>
                <Placar>
                    <span>{mandante.placar}</span>
                </Placar>
            </TimeContainer>
            <TimeContainer>
                <Time>
                    <img height="24px" width="24px" alt="escudo" src={visitante.escudos['30x30']} />
                    <span style={{ marginLeft: '12px' }}>{visitante.nome}</span>
                </Time>
                <Placar>
                    <span>{visitante.placar}</span>
                </Placar>
            </TimeContainer>
            <Rodada>Rodada {rodada}</Rodada>
        </CardStyle>
    )
}