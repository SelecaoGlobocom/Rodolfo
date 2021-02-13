package client

import (
	"encoding/json"
	"middleware/utils"
	"net/http"
	"strings"
)

func GetRoute() {
	http.HandleFunc("/agenda/", func(w http.ResponseWriter, r *http.Request) {
		utils.EnableCors(&w) // Possibilita clientes de diferentes ips consumirem a api.
		urlSplitted := strings.Split(r.URL.Path, "/")
		date := urlSplitted[2]            // Dia selecionado pelo cliente através da url.
		jsonData, _ := json.Marshal(date) // Dado no formato JSON.

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	})

}
