backend:
	bash -c "cd esportes-api && yarn && yarn start"

middleware:
	bash -c "cd middleware && go run main.go"

frontend:
	bash -c "cd ge-calendar && yarn && yarn start"

run:
	make backend & make middleware --always-make & make frontend
