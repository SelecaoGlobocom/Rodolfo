import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import { Calendar } from './index'

import { getData } from '../../api/index';

const setup = () => render(<Calendar />);

const getListSize = () => {
    const mockDate = getData(new Date().toISOString().slice(0, 10))
    let valor = 0;
    mockDate.campeonatos.forEach((campeonato) => {
        campeonato.jogos.forEach(() => {
            valor = valor + 1
        })
    })
    return valor
}

describe('Teste do Calendar', () => {
    it('Verificar se o conteúdo é gerado com sucesso', () => {
        const { getAllByText } = setup();
        const numeroDeCardsRenderizado = getAllByText("Futebol")
        const numeroDeCardsMock = getListSize();
        expect(numeroDeCardsRenderizado.length).toBe(numeroDeCardsMock)
    })
})