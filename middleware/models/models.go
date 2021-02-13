package models

type CampeonatosClientApi struct {
	Resultados  Resultados  `json:"resultados"`
	Referencias Referencias `json:"referencias"`
	Paginacao   Paginacao   `json:"paginacao"`
}

type Resultados struct {
	Jogos []Jogos `json:"jogos"`
}

type Jogos struct {
	EscalacaoMandanteID     interface{}  `json:"escalacao_mandante_id"`
	EquipeMandanteID        int          `json:"equipe_mandante_id"`
	VencedorJogo            VencedorJogo `json:"vencedor_jogo"`
	Suspenso                bool         `json:"suspenso"`
	Rodada                  int          `json:"rodada"`
	Wo                      bool         `json:"wo"`
	HoraRealizacao          string       `json:"hora_realizacao"`
	EscalacaoVisitanteID    interface{}  `json:"escalacao_visitante_id"`
	PlacarOficialVisitante  int          `json:"placar_oficial_visitante"`
	EquipeVisitanteID       int          `json:"equipe_visitante_id"`
	PlacarPenaltisVisitante int          `json:"placar_penaltis_visitante"`
	Decisivo                bool         `json:"decisivo"`
	JogoID                  int          `json:"jogo_id"`
	PlacarPenaltisMandante  int          `json:"placar_penaltis_mandante"`
	Cancelado               bool         `json:"cancelado"`
	SedeID                  int          `json:"sede_id"`
	PlacarOficialMandante   int          `json:"placar_oficial_mandante"`
	DataRealizacao          string       `json:"data_realizacao"`
	FaseID                  int          `json:"fase_id"`
}

type Bandeiras struct {
	Six0X60   string `json:"60x60"`
	Three0X30 string `json:"30x30"`
	Svg       string `json:"svg"`
	Four5X45  string `json:"45x45"`
}
type Mandante struct {
	Placar    string    `json:"placar"`
	Nome      string    `json:"nome"`
	Bandeiras Bandeiras `json:"bandeiras"`
}
type Visitante struct {
	Placar    string    `json:"placar"`
	Nome      string    `json:"nome"`
	Bandeiras Bandeiras `json:"bandeiras"`
}
type JogosFiltrado struct {
	JogoID         int          `json:"jogo_id"`
	VencedorJogo   VencedorJogo `json:"vencedor_jogo"`
	Suspenso       bool         `json:"suspenso"`
	DataRealizacao string       `json:"data_realizacao"`
	Rodada         interface{}  `json:"rodada"`
	Wo             bool         `json:"wo"`
	HoraRealizacao string       `json:"hora_realizacao"`
	Decisivo       bool         `json:"decisivo"`
	Cancelado      bool         `json:"cancelado"`
	Mandante       Mandante     `json:"mandante"`
	Visitante      Visitante    `json:"visitante"`
}

type VencedorJogo struct {
	EquipeID int    `json:"equipe_id"`
	Label    string `json:"label"`
}

type Tipo struct {
	TipoID    string `json:"tipo_id"`
	Descricao string `json:"descricao"`
}

type Sede struct {
	SedeID      int    `json:"sede_id"`
	NomePopular string `json:"nome_popular"`
	Tipo        Tipo   `json:"tipo"`
	Nome        string `json:"nome"`
}

type Campeonato struct {
	CampeonatoID int    `json:"campeonato_id"`
	Genero       string `json:"genero"`
	Slug         string `json:"slug"`
	Nome         string `json:"nome"`
}

type Formato struct {
	Descricao string `json:"descricao"`
	FormatoID int    `json:"formato_id"`
}

type Fase struct {
	FaseID     int         `json:"fase_id"`
	Slug       string      `json:"slug"`
	EdicaoID   int         `json:"edicao_id"`
	Ordem      int         `json:"ordem"`
	DataFim    interface{} `json:"data_fim"`
	Tipo       Tipo        `json:"tipo"`
	Nome       string      `json:"nome"`
	Formato    Formato     `json:"formato"`
	DataInicio interface{} `json:"data_inicio"`
	Atual      bool        `json:"atual"`
	Disclaimer string      `json:"disclaimer"`
}

type Escudos struct {
	Six0X60   string `json:"60x60"`
	Three0X30 string `json:"30x30"`
	Svg       string `json:"svg"`
	Four5X45  string `json:"45x45"`
}

type Cores struct {
	Terciaria  string `json:"terciaria"`
	Secundaria string `json:"secundaria"`
	Primaria   string `json:"primaria"`
}

type Equipe struct {
	Slug        string  `json:"slug"`
	Genero      string  `json:"genero"`
	Nome        string  `json:"nome"`
	Escudos     Escudos `json:"escudos"`
	Cores       Cores   `json:"cores"`
	EquipeID    int     `json:"equipe_id"`
	Sigla       string  `json:"sigla"`
	NomePopular string  `json:"nome_popular"`
	Apelido     string  `json:"apelido"`
}

type Edicao struct {
	EdicaoID      int    `json:"edicao_id"`
	CampeonatoID  int    `json:"campeonato_id"`
	SlugEditorial string `json:"slug_editorial"`
	Slug          string `json:"slug"`
	Nome          string `json:"nome"`
}

type Referencias struct {
	Sedes       map[string]Sede       `json:"sedes"`
	Campeonatos map[string]Campeonato `json:"campeonatos"`
	Fases       map[string]Fase       `json:"fases"`
	Equipes     map[string]Equipe     `json:"equipes"`
	Edicoes     map[string]Edicao     `json:"edicoes"`
}
type Paginacao struct {
}

type ServerData struct {
	Campeonatos []Campeonatos `json:"campeonatos"`
}

type Campeonatos struct {
	CampeonatoID     int             `json:"campeonato_id"`
	NomeDoCampeonato string          `json:"nome_do_campeonato"`
	Jogos            []JogosFiltrado `json:"jogos"`
}
