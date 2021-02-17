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

export type State = {
  status: 'init' | 'fetching' | 'error' | 'fetched',
  data?: MockDataType,
  error?: string
  statusCode?: number
}

export interface Cache {
  [url: string]: MockDataType
}

// discriminated union type
export type Action =
  | { type: 'request' }
  | { type: 'success'; payload: MockDataType, statusCode: number }
  | { type: 'failure'; payload: string, statusCode: number }

  type TimeType = {
    id: number,
    nome: string,
    placar: string,
    bandeiras: {
        '60x60': string,
        '30x30': string,
        '45x45': string,
        svg: string
    }
}