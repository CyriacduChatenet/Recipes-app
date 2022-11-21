# CLEAN DOCKER

```bash
// stop all containers
docker stop $(docker ps -a -q)
// remove all containers
docker rm $(docker ps -a -q) 
// remove all images
 docker rmi $(docker images -q)                                       
// remove all volumes
 docker volume rm $(docker volume ls -q)                                     
```