# Path to docker-compose
COMPOSE = docker compose -f src/docker-compose.yml

# Default target -> build and run
all: up

# Build all services
build:
	$(COMPOSE) build

# Start containers
up:
	$(COMPOSE) up --build

# Stop containers
down:
	$(COMPOSE) down

# Remove containers + images
clean:
	$(COMPOSE) down --rmi all --volumes --remove-orphans

# Reset frontend build (optional)
fclean: clean
	rm -rf src/requirements/frontend/dist

re: fclean all

.PHONY: all build up down clean fclean re