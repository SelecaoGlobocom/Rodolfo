package client

import (
	"encoding/json"
	"log"
	"middleware/server"
	"middleware/utils"
	"net/http"
	"strings"
)

func GetRoute() {
	http.HandleFunc("/agenda/", func(w http.ResponseWriter, r *http.Request) {
		utils.EnableCors(&w) // Possibilita clientes de diferentes ips consumirem a api.
		urlSplitted := strings.Split(r.URL.Path, "/")
		date := urlSplitted[2]                            // Dia selecionado pelo cliente através da url.
		data, error, status := server.GetDataByDate(date) // Dado retornado da API ge-esportes.
		if error != nil {
			log.Printf("GetDataByDate error, %v", error)
			w.WriteHeader(status) // Return 500 Internal Server Error.
			return
		}
		jsonData, _ := json.Marshal(data) // Dado no formato JSON.

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(status)
		w.Write(jsonData)
	})

}
