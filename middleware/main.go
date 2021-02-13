package main

import (
	"fmt"
	"net/http"
)

func main() {
	port := ":3333"
	fmt.Println("Servidor rodando na porta", port)
	http.ListenAndServe(port, nil)
}
