DC = docker-compose -f ./src/docker-compose.yml

all: build up open

build:
	$(DC) build

up:
	$(DC) up -d

down:
	$(DC) down

open:
	sleep 3
	firefox http://localhost:3000 &

.PHONY: all build up down open
