# Diário de desenvolvimento do Rodolfo

## Dia 01 (03/02/2021) - Planejamento

### Resumo do desafio

- Criar BFF, ou seja um serviço, que chamarei de middleware, que se comunica com o backend (esportes-api) e o front-end (calendário do Globo Esporte) que também será desenvolvido.
- Ao meu ver, o maior desafio será a performance. Gosto da ideia de utilizar Go Lang por ser uma linguagem performatica, no entanto ainda não tenho esse conhecimento. Estratégicamente, irei desenvolver o front-end primeiro, utilizando dados mockados, com uma estrutura definida esperada do middleware e caso sobre tempo tentarei desenvolver o middleware em Go Lang, caso contrário farei em Node.
- O FrontEnd utilizarei React, pois é o que tenho mais domínio e segurança no momento.

### Estrutura de dados v1
```json
{
    "campeonatos":[
        {
            "nome_do_campeonato": "string",
            "campeonato_id":21312,
            "jogos": [
                {
                "jogo_id": 239386,
                "vencedor_jogo": {
                    "equipe_id": null,
                    "label": "empate"
                },
                "suspenso": false,
                "data_realizacao": "string",
                "rodada": null,
                "wo": false,
                "hora_realizacao":"09:00:00",
                "decisivo": false,
                "cancelado": false,
                "mandante": {
                    "placar":"strig",
                    "nome":"string",
                    "bandeiras": {
                        "60x60": "string",
                        "30x30": "string",
                        "svg": "string",
                        "45x45": "string"
                    }
                },
                "visitante": {
                    "placar":"strig",
                    "nome":"string",
                    "bandeiras": {
                        "60x60": "string",
                        "30x30": "string",
                        "svg": "string",
                        "45x45": "string"
                    }
                },  
                }
            ]
        }
    ]
}
```
### Fluxo dos dados v0
- Front-End envia a data para o Middleware
- Middleware faz a requisição da data para o BackEnd na API.
- O Middleware trabalhará com os dados para retornar a estrutura de dados de volta ao FronEnd

___

## Dia 02 (04/02/2021) - Desenvolvimento do FrontEnd (React)
Utilizarei o comando `npx create-react-app ge-calendar --template typescript` pela praticidade de ter o ambiente de desenvolvimento pronto com apenas um comando.

Utilizarei styled-components para facilitar a estilização dos componentes e manter o código mais organizado.

## Dia 03 (05/02/2021) - Continuação do Desenvolvimento do FrontEnd (React)
Finalização da página estática e iniciar a utilização de dados dinâmicos com mock.

## Dia 04 (06/02/2021) - Continuação do Desenvolvimento do FrontEnd (React)
Finalização da dinâmica. Breve dificuldade para tratar Date no state, tive que realizar uma conversão para que viesse a funcionar como esperado.

## Dia 05 (07/02/2021) - Desenvolvimento de testes no FrontEnd (React)
Início dos testes de renderização do Front-End

## To Do
- [X] Testar esportes-api no Postman e identificar os retornos.
- [X] Criar a estrutura de dados que deverá ser retornada do middleware
- [X] Criar o Front-End
  - [X] Iniciar ambiente de desenvolvimento (Create-react-app)
  - [X] Card (componente reutilizável)
  - [X] Container (calendário)
  - [ ] Teste unitário
- [ ] Criar o Middleware