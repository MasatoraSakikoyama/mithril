.PHONY: run
run:
	cd .docker; docker-compose up;
.PHONY: stop
stop:
	docker ps -a | xargs docker stop
