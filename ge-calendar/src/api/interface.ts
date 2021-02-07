type TimeType = {
    id: number,
    nome: string,
    placar: string,
    escudos: {
        '60x60': string,
        '30x30': string,
        '45x45': string,
        svg: string
    }
}

export type JogoType = {
    "jogo_id": number,
    "vencedor_jogo": {
        "equipe_id": number | null,
        label: string
    },
    suspenso: boolean,
    "data_realizacao": string,
    rodada: number,
    wo: boolean,
    "hora_realizacao": string,
    decisivo: boolean,
    cancelado: boolean,
    mandante: TimeType,
    visitante: TimeType
}

type CampeonatoType = {
    "nome_do_campeonato": string,
    "campeonato_id": number,
    "jogos": Array<JogoType>
}

export type MockDataType = {
    "campeonatos": Array<CampeonatoType>
}