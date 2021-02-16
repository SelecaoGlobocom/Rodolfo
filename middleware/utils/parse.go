package utils

import (
	"middleware/models"
	"strconv"
)

func ParseData(clientData models.CampeonatosClientApi, serverData models.ServerData) models.ServerData {

	// Para todas as referências de campeonatos encontrados
	for _, v := range clientData.Referencias.Campeonatos {

		edicao := models.Edicao{}
		fase := models.Fase{}
		listaDeJogos := []models.JogosFiltrado{}
		camps := models.Campeonatos{}

		// Buscar a edição referente
		for _, y := range clientData.Referencias.Edicoes {
			if v.CampeonatoID == y.CampeonatoID {
				edicao = y
			}
		}

		// Buscar a fase referente
		for _, j := range clientData.Referencias.Fases {
			if edicao.EdicaoID == j.EdicaoID {
				fase = j
			}
		}

		for _, n := range clientData.Resultados.Jogos {
			jogoFiltrado := models.JogosFiltrado{}
			if n.FaseID == fase.FaseID {
				jogoFiltrado.Cancelado = n.Cancelado
				jogoFiltrado.DataRealizacao = n.DataRealizacao
				jogoFiltrado.Decisivo = n.Decisivo
				jogoFiltrado.HoraRealizacao = n.HoraRealizacao
				jogoFiltrado.JogoID = n.JogoID
				jogoFiltrado.Rodada = n.Rodada
				jogoFiltrado.Suspenso = n.Suspenso
				jogoFiltrado.Wo = n.Wo

				// Arrumar placar do penalti: nil tipado
				if n.PlacarPenaltisMandante == 0 || n.PlacarPenaltisVisitante == 0 {
					jogoFiltrado.Mandante.Placar = strconv.Itoa(n.PlacarOficialMandante)
				} else {
					jogoFiltrado.Mandante.Placar = strconv.Itoa(n.PlacarOficialMandante) + "(" + strconv.Itoa(n.PlacarPenaltisMandante) + ")"
				}

				if n.PlacarPenaltisMandante == 0 || n.PlacarPenaltisVisitante == 0 {
					jogoFiltrado.Visitante.Placar = strconv.Itoa(n.PlacarOficialVisitante)
				} else {
					jogoFiltrado.Visitante.Placar = strconv.Itoa(n.PlacarOficialVisitante) + "(" + strconv.Itoa(n.PlacarPenaltisVisitante) + ")"
				}

				for _, t := range clientData.Referencias.Equipes {
					if n.EquipeMandanteID == t.EquipeID {
						jogoFiltrado.Mandante.Nome = t.Apelido
						jogoFiltrado.Mandante.Bandeiras.Three0X30 = t.Escudos.Three0X30
						jogoFiltrado.Mandante.Bandeiras.Six0X60 = t.Escudos.Six0X60
						jogoFiltrado.Mandante.Bandeiras.Svg = t.Escudos.Svg
					}
					if n.EquipeVisitanteID == t.EquipeID {
						jogoFiltrado.Visitante.Nome = t.Apelido
						jogoFiltrado.Visitante.Bandeiras.Three0X30 = t.Escudos.Three0X30
						jogoFiltrado.Visitante.Bandeiras.Six0X60 = t.Escudos.Six0X60
						jogoFiltrado.Visitante.Bandeiras.Svg = t.Escudos.Svg
					}
				}

				listaDeJogos = append(listaDeJogos, jogoFiltrado)
			}
		}

		for _, f := range listaDeJogos {
			camps.Jogos = append(camps.Jogos, f)
			camps.CampeonatoID = v.CampeonatoID
			camps.NomeDoCampeonato = v.Nome
		}
		serverData.Campeonatos = append(serverData.Campeonatos, camps)
	}
	return serverData
}
