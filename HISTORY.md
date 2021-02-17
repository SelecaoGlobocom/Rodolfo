# Diário de desenvolvimento do Rodolfo

## Dia 01 (03/02/2021) - Planejamento

### Resumo do desafio

- Criar BFF, ou seja um serviço, que chamarei de `middleware`, que se comunica com o backend (esportes-api) e o front-end (calendário do Globo Esporte) que também será desenvolvido.
- Ao meu ver, o maior desafio será a performance. Gosto da ideia de utilizar Go Lang por ser uma linguagem performatica, no entanto ainda não tenho esse conhecimento. Estratégicamente, irei desenvolver o front-end primeiro, utilizando dados mockados, com uma estrutura definida esperada do middleware e caso sobre tempo tentarei desenvolver o middleware em Go Lang, caso contrário farei em Node.
- O FrontEnd utilizarei React, pois é o que tenho mais domínio e segurança no momento.

### Desenho da Arquitetura

![Arquitetura](Arquitetura.png?raw=true)

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
___

## Dia 02 (04/02/2021) - Desenvolvimento do FrontEnd (React)
- Utilizarei o comando `npx create-react-app ge-calendar --template typescript` pela praticidade de ter o ambiente de desenvolvimento pronto com apenas um comando.

- Utilizarei styled-components para facilitar a estilização dos componentes e manter o código mais organizado.

### Estrutura de diretórios do frontend

Todo o desenvolvimento de novas features deve ocorrer dentro da pasta `src`.


Todo componente deverá estar dentro do diretório `./src/components/<nomeDoComponente>` e deve conter os seguintes arquivos, quando necessário:
```
nomeDoComponente 
.   
├── component.test.tsx  (Arquivo de testes unitários)
├── component.tsx   (Arquivo que contém o componente a ser renderizado.)
├── index.ts    (Arquivo contendo os exports dos outros arquivos)
├── interface.ts    (Arquivo contendo tipagens)
└── style.tsx   (Arquivo contendo estilos customizados)
```

O componente `Calendar` foi considerado um componente especial, pois reúne os outros componentes em sua implementação, formando então uma página. Por isso foi isolado no caminho: `./src/pages/Calendar`
___

## Dia 03 (05/02/2021) - Continuação do Desenvolvimento do FrontEnd (React)
- Finalização da página estática e iniciar a utilização de dados dinâmicos com mock.
___
## Dia 04 (06/02/2021) - Continuação do Desenvolvimento do FrontEnd (React)
- Finalização da dinâmica. Breve dificuldade para tratar Date no state, tive que realizar uma conversão para que viesse a funcionar como esperado.
___
## Dia 05 (07/02/2021) - Desenvolvimento de testes no FrontEnd (React)
- Início dos testes de renderização do Front-End. As bibliotecas utilizadas foram o `@testing-library/react`, `@testing-library/jest-dom/extend-expect` e `@testing-library/react-hooks`.
___
## Dia 06 (08/02/2021) - Estudos de Go Lang
Assisti alguns vídeos para me interar sobre o assunto e investigar se é viável tentar desenvolver em Go o middleware.
___
## Dia 07 (09/02/2021) - Preparo do ambiente de desenvolvimento Go Lang
- Ambiente preparado e pronto para iniciar o desenvolvimento.
___
## Dia 08 (10/02/2021) - Estudos de Go Lang
- Reprodução de alguns códigos e estrutura inicial da API.
___
## Dia 09 (11/02/2021) - Desenvolvimento Middleware
- Finalização do desenvolvimento do middleware

### Estrutura de diretórios do middleware
```
middleware
├── client (Pacote relacionado ao Client (FrontEnd))
│   └── routes.go (Rotas do client)
├── models (Pacote relacionado aos tipos da estrutura de dados)
│   └── models.go
├── server (Pacote relacionado ao Server (esportes-api)
│   └── routes.go (Rotas do servidor)
├── utils (Pacote relacionado a métodos auxiliares)
│   ├── cors.go (Método que libera acesso externo)
│   └── parse.go (Método que estrutura o dado a ser entregue ao client)
└── main.go
```
___
## Dia 10 (12/02/2021) - Integração Middleware -> Front-End 
- Foi utilizado a biblioteca `axios`, pois percebi que no mercado é a que tem sido mais utilizada para requisições http, nesse caso poderia ter optado por um simples fetch ao invés do axios.
- Percebi que existem jogos de outro esporte além do futebol, como basquete, no entanto não encontrei nas apis fornecidas um campo que eu pudesse buscar a informação de qual esporte se trata, portanto mantive o dado fixo, Futebol.
___
## Dia 11 (13/02/2021) - Integração Middleware -> Front-End 
- Inicialmente foi feita a integração, alguns ajustes foram necessários no front e no middleware, principalmente como lidar com erros.

- Com a finalidade de melhorar a performance do front, alterei a implementação simples da API, por um hook. Nesse hook será feito o cache dos dados, gerando a página com maior rapidez da próxima vez que for renderizada.
___

## Dia 12 (14/02/2021) - Integração Middleware -> Front-End 

___
## Dia 13 (15/02/2021) - Medição de performance da API. 
- Teste com a ferramenta jMeter para avaliar a performance da API. Foi feito um teste com 1000 requisições e todas elas retornaram o dado com sucesso, segundo o jMeter. 
___
## Dia 14 (16/02/2021) - Finalização
Realização de ajustes finais, realização de testes e melhoras na documentação.

- Melhorias:
  - Realização de testes unitários para o middleware (Não deu tempo de aprender).
  - Criar rotas para usuário navegar entre as datas desejadas.

___
## To Do
- [X] Testar esportes-api no Postman e identificar os retornos.
- [X] Criar a estrutura de dados que deverá ser retornada do middleware
- [X] Criar o Front-End
  - [X] Iniciar ambiente de desenvolvimento (Create-react-app)
  - [X] Card (componente reutilizável)
  - [X] Container (calendário)
  - [X] Teste unitário
- [X] Criar o Middleware
  - [X] Estudar Go Lang
  - [X] Criar o ambinte
  - [X] Consumir API do esportes-api
  - [X] Desenvolver a rota do cliente
  - [ ] Desenvolver testes unitários
- [X] Entender como funciona o makeFile
- [X] Melhorar a performance do front-end