package server

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"middleware/models"
	"middleware/utils"
	"net/http"
)

func GetDataByDate(date string) (models.ServerData, error, int) {

	clientData := models.CampeonatosClientApi{}
	serverData := models.ServerData{}

	url := "http://localhost:8080/esportes/futebol/modalidades/futebol_de_campo/categorias/profissional/data/" + date + "/jogos"

	response, error := http.Get(url)
	if error != nil {
		fmt.Printf("The HTTP request failed with error %s\n", error)
		return serverData, error, response.StatusCode
	} else {
		data, error := ioutil.ReadAll(response.Body)
		log.Printf("data: %v", data)
		if error != nil {
			log.Printf("Body read error: %v", error)
			return serverData, error, response.StatusCode
		}

		err := json.Unmarshal(data, &clientData)
		if err != nil {
			log.Printf("JSON unmarshal error, %v", err)
			return serverData, err, response.StatusCode
		}

		serverData = utils.ParseData(clientData, serverData)
	}
	return serverData, nil, response.StatusCode
}
