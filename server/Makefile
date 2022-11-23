.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: start
start:
	npm run start:dev

.PHONY: install
start:
	npm install

.PHONY: init
init: install up start

.PHONY: reset
reset:
	docker stop \
	&& docker rm $$(docker ps -a -q) \
	&& docker rmi $$(docker images -q) \
	&& docker volume rm $$(docker volume ls -q) \
	&& docker system prune -a -f