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

func GetDataByDate(date string) models.ServerData {

	clientData := models.CampeonatosClientApi{}
	serverData := models.ServerData{}

	url := "http://localhost:8080/esportes/futebol/modalidades/futebol_de_campo/categorias/profissional/data/" + date + "/jogos"

	response, error := http.Get(url)
	if error != nil {
		fmt.Printf("The HTTP request failed with error %s\n", error)
	} else {
		data, _ := ioutil.ReadAll(response.Body)
		err := json.Unmarshal(data, &clientData)
		if err != nil {
			log.Fatal("Decoding error: ", err)
		}

		serverData = utils.ParseData(clientData, serverData)
	}
	return serverData
}
