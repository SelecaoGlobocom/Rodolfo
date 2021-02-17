import { render } from '@testing-library/react';
import { Card } from './index'
import '@testing-library/jest-dom/extend-expect'

const actualDateMock = new Date();
actualDateMock.setFullYear(2019)

const jogoMock = {
    "jogo_id": 12,
    "vencedor_jogo": {
        "equipe_id": null,
        label: ""
    },
    suspenso: false,
    "data_realizacao": "2019-10-12",
    rodada: 1,
    wo: false,
    "hora_realizacao": "09:00:00",
    decisivo: false,
    cancelado: false,
    mandante: {
        id: 333,
        nome: "Santos",
        placar: "4",
        bandeiras: {
            '60x60': "url-60x60.png",
            '30x30': "url-30x30.png",
            '45x45': "url-45x45.png",
            svg: ""
        }
    },
    visitante: {
        id: 44,
        nome: "Grêmio",
        placar: "1",
        bandeiras: {
            '60x60': "url-60x60.png",
            '30x30': "url-30x30.png",
            '45x45': "url-45x45.png",
            svg: ""
        }
    }
}

const setup = () => render(<Card actualDate={actualDateMock} jogo={jogoMock} />);

describe('Teste do Card', () => {
    it('Renderização do título de partida futura', () => {
        const { getByText } = setup();
        expect(getByText(jogoMock.hora_realizacao.slice(0, 5))).toBeInTheDocument()
    })
    // it('Renderização do título de partida em andamento', () => {
    //     const { getByText } = setup();
    //     expect(getByText("Tempo Real")).toBeInTheDocument()
    // })
    // it('Renderização do título de partida finalizada', () => {
    //     const { getByText } = setup();
    //     expect(getByText("Encerrado")).toBeInTheDocument()
    // })
    it('Renderização do nome dos times', () => {
        const { getByText } = setup();
        expect(getByText(jogoMock.mandante.nome)).toBeInTheDocument()
        expect(getByText(jogoMock.visitante.nome)).toBeInTheDocument()
    })
    it('Renderização do placar', () => {
        const { getByText } = setup();
        expect(getByText(jogoMock.mandante.placar)).toBeInTheDocument()
        expect(getByText(jogoMock.visitante.placar)).toBeInTheDocument()
    })
    it('Renderização da rodada', () => {
        const { getByText } = setup();
        expect(getByText(jogoMock.rodada)).toBeInTheDocument()
    })
})