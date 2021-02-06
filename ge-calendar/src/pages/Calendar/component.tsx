import React from 'react'

import { CampeonatoTitle } from './style';

import { Card } from '../../components/Card/index';
import { CampeonatoContainer, CardContainer, HigherContainer } from '../../components/Container';
import { NavBar } from '../../components/Navbar';

export const Calendar = () => (
    <>
        <NavBar />
        <HigherContainer>
            <CampeonatoContainer>
                <CampeonatoTitle>Campeonato Brasileiro</CampeonatoTitle>
                <CardContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardContainer>
            </CampeonatoContainer>
            <CampeonatoContainer>
                <CampeonatoTitle>Campeonato Irlandês</CampeonatoTitle>
                <CardContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardContainer>
            </CampeonatoContainer>
        </HigherContainer>
    </>
)