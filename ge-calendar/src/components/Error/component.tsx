import React from 'react';

import { ErrorContainer, H2, P } from './style'

import { Ball } from '../../assets/index'

export const Error = () => (
    <ErrorContainer>
        <Ball />
        <H2>Que Bola fora!</H2>
        <P>Ocorreu um erro ao carregar esse conteúdo.</P>
        <P>Por favor, tente novamente.</P>
    </ErrorContainer>
)