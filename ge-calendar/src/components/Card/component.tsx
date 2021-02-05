import React from 'react';

import {
    CardStyle,
    Header,
    Placar,
    Rodada,
    Time,
    TimeContainer,
    VejaComoFoi
} from './style';

export const Card = () => {
    return (
        <CardStyle>
            <Header>
                <span>Futebol</span>
                <VejaComoFoi href="#" >Veja Como Foi</VejaComoFoi>
            </Header>
            <TimeContainer>
                <Time>
                    <img height="24px" width="24px" alt="escudo" src="https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/gremio.svg" />
                    <span style={{ marginLeft: '12px' }}>Grêmio</span>
                </Time>
                <Placar>
                    <span>3</span>
                </Placar>
            </TimeContainer>
            <TimeContainer>
                <Time>
                    <img height="24px" width="24px" alt="escudo" src="https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/santos.svg" />
                    <span style={{ marginLeft: '12px' }}>Santos</span>
                </Time>
                <Placar>
                    <span>3</span>
                </Placar>
            </TimeContainer>
            <Rodada>Rodada 34</Rodada>
        </CardStyle>
    )
}