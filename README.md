# prge_mateuszw
<img width="1912" height="906" alt="image" src="https://github.com/user-attachments/assets/1e2a54f2-76b0-40ad-a5c7-71576f0e0c60" />
<img width="1914" height="910" alt="image" src="https://github.com/user-attachments/assets/669e1fab-a157-41fc-abe1-fe2a725a51d3" />
<img width="1913" height="909" alt="image" src="https://github.com/user-attachments/assets/34770d72-fb1b-4628-a817-544ef4baa2ac" />
<img width="1907" height="905" alt="image" src="https://github.com/user-attachments/assets/55c85350-2a38-4ae3-b565-f2d02a4c071c" />
<img width="1912" height="914" alt="image" src="https://github.com/user-attachments/assets/e316f042-6855-4975-b05d-c550a67bb37d" />


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
