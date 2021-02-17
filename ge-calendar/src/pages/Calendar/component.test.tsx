import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { renderHook, act } from '@testing-library/react-hooks';
import { Calendar } from './index'

import useFetch from '../../hooks/useFetch';

const setup = () => render(<Calendar />);

const generateDate = () => {
    const genDate = new Date()
    genDate.setFullYear(2019)
    return genDate
}

const getListSize = () => {
    const {
        result: {
            current: {
                data
            }
        }
    } = renderHook(() => useFetch(generateDate()));

    let valor = 0;

    data?.campeonatos.forEach((campeonato) => {
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