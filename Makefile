DC = docker-compose -f src/docker-compose.yml

all: clear down
	$(DC) up --build -d

down:
	$(DC) down

clear:
	clear

.PHONY: all down clear
