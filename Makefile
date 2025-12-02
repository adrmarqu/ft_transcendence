DC = docker-compose -f src/docker-compose.yml

all: restart logs

up: 
	$(DC) up --build -d

down:
	$(DC) down

logs:
	$(DC) logs -f

restart: down clear up

clean:
	docker system prune -af

clear:
	clear

help:
	@echo "Comandos disponibles:"
	@echo "  make up      -> Construye y levanta los contenedores"
	@echo "  make down    -> Detiene contenedores"
	@echo "  make restart -> Reinicia contenedores"
	@echo "  make logs    -> Muestra logs"
	@echo "  make clean   -> Limpia cache"
	@echo "  make clear   -> Limpia pantalla"

.PHONY: all up down logs restart clean clear help
