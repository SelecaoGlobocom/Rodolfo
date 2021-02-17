package main

import (
	"fmt"
	"middleware/client"
	"net/http"
)

func main() {
	port := ":3333"
	client.GetRoute()
	fmt.Println("Servidor rodando na porta", port)
	http.ListenAndServe(port, nil)
}
