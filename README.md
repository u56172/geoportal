# prge_mateuszw

## how to start
## local
``` shell
docker-compose -f ./docker-compose/docker-compose-prge-local.yml --env-file .env -p local-prge up --build -d
```
## remote env-test
```shell
docker-compose -f ./docker-compose/docker-compose-prge-remote.yml --env-file .env.env-test -p prge-env-test up --build -d
```
## remote env-qa
```shell
docker-compose -f ./docker-compose/docker-compose-prge-remote.yml --env-file .env.env-qa -p prge-env-qa up --build -d
```
## remote main
```shell
docker-compose -f ./docker-compose/docker-compose-prge-remote.yml --env-file .env.main -p prge-env-main up --build -d
```
## others
``` shell
docker system prune -a -f 
```
``` shell
docker system prune --volumes
```