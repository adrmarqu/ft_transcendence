FRONTEND_DIR=src/requirements/frontend

all: build run

build:
	docker build -t ft_trans_frontend $(FRONTEND_DIR)

run:
	docker run -p 8080:8080 ft_trans_frontend

clean:
	docker rm -f ft_trans_frontend 2>/dev/null || true
	docker rmi ft_trans_frontend 2>/dev/null || true

.PHONY: all build run clean
