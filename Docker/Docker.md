# Docker

Docker is a containerization platform that simplifies application deployment and management.


## Roadmap

1. What is Docker?

2. What Problem does Docker solve?

3. What are containers?

4. What is docker daemon?

5. Docker architecture

6. Why do we need Docker?

7. What can it do?

8. Run docker containers

9. What is an image

10. Docker commands

11. Flags

12. Create a docker image

13. Docker compose

14. Docker registry

15. Docker engine

16. Docker networking

17. Container orchestration

18. Docker swarm

19. Kubernetes

20. Docker Logs

21. Docker Volumes





 <hr>

## 1. What is Docker?

- Docker is like a virtual container for software applications. It allows you to package all the necessary files and dependencies of an application into a single standardized unit, called a container, which can be easily transported and run on any computer. 
- It simplifies the process of deploying and managing applications, making them more portable and consistent across different environments.

## 2. What Problem does Docker solve?

- <b>Compatibility:</b> Docker eliminates the "it works on my machine" problem by providing a consistent environment across different systems, ensuring that applications run reliably regardless of the underlying infrastructure.

- <b>Portability:</b>  Docker containers can be easily transported and run on any machine or platform, making it simpler to deploy applications in different environments and reducing the time and effort required for setup and configuration.

- <b>Resource Efficiency:</b>  Docker containers are lightweight and share the host system's resources, allowing for efficient utilization of computing resources. Multiple containers can run simultaneously on a single machine without conflicts.

- <b>Dependency Management:</b>  Docker simplifies the management of dependencies by packaging all the required libraries and dependencies with the application. This ensures that the application has all the necessary components to run without conflicts or compatibility issues.

- <b>Scalability:</b>  Docker facilitates easy scaling of applications by allowing quick replication and distribution of containers. It enables horizontal scaling, where additional containers can be added or removed to match the workload demands, providing flexibility and efficient resource allocation.

- <b>Collaboration:</b>  Docker enables teams to work collaboratively on applications by providing a standardized and reproducible environment. It ensures that developers, testers, and operators are all working with the same application configuration, making it easier to share and reproduce issues across different stages of the development lifecycle.


## 3. What are Containers?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- Containers are running instances of images that are isolated and have their own environments and set of process.
- A container only lives as long as the process inside it is alive,
if the web service inside the container is stopped or crashed then the container exits.
- The advantage of containers is that it requires very less resources.

## 4. What is Docker daemon?
- Docker daemon runs on the host operating system.
- It is responsible for running containers to manage docker services.
- The Docker daemon listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes.

## 5. Docker architecture
Docker follows Client-Server architecture, which includes the three main components that are Docker Client, Docker Host, and Docker Registry.
  ### 1. Docker client
  Docker client uses commands and REST APIs to communicate with the Docker Daemon (Server). When a client runs any docker command on the docker client terminal, the client terminal sends these docker commands to the Docker daemon. Docker daemon receives these commands from the docker client in the form of command and REST API's request.

  ### 2. Docker Host
  Docker Host is used to provide an environment to execute and run applications. It contains the docker daemon, images, containers, networks, and storage.

  ### 3. Docker Registry
  - Docker Registry manages and stores the Docker images.
  - There are two types of registries in the Docker -

  - Pubic Registry - Public Registry is also called as Docker hub.

  - Private Registry - It is used to share images within the enterprise.

## 6. Why do we need Docker?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- It allow us to get rid of the matrix from hell !!

## 7. What can it do?

- Containerize Applications
- Run each service with its own dependencies in separate containers.

## 8. Run docker containers

```bash
  docker run <image_name>
```

## 9. What is an image?
- Docker images are the read-only binary templates used to create Docker Containers.
- A docker image is a template or blueprint for creating containers. It is a self-contained package that includes everything needed to run a specific application, such as the code, dependencies, libraries, and configurations. 
- An image is created from a set of instructions called a Dockerfile, and it serves as a portable and reproducible unit that can be used to create and run multiple instances of containers with consistent behavior and environment.

## 1. Docker commands
### - docker run 
It is used to run or start a container from an docker image.
```bash
  docker run <docker-image-name>
```

### - docker ps 
It is used to list all running containers.
```bash
  docker ps 
```

### - docker ps  -a
It is used to list all running containers as well as the previously stopped or exited containers.
```bash
  docker ps -a
```

### - docker stop
It is used to stop a running container.
```bash
  docker stop <container-id> or <container-name>
```

### - docker rm
It is used to remove a stopped or exited container permanently.
```bash
  docker rm <container-id> or <container-name>
```

### - docker images
It is used to list available images and its details.
```bash
  docker images
```

### - docker rmi
It is used to remove an image from our docker.
(remember you must ensure that no containers are running of that image before attempting to remove that image)
```bash
  docker rmi <image-name>
```

### - docker kill
It is used to kill a running container.
```bash
  docker kill <container-id>
```

### - docker pull
It is used to pull a docker image from docker hub.
```bash
  docker pull <image-name>
```

### - docker exec
It is used to execute command to a running container.
```bash
  docker exec <container-id> cat /etc/hosts 
```

### - docker inspect
It is used to see additional details about a specific container.
```bash
  docker inspect <container-id>  
```

### - docker logs
It is used to view the logs of a particular container.
```bash
  docker logs <container-id> 
```

## 11. Flags

### flag -i
- The -i flag stands for interactive mode.
- The -i flag allows you to interact with the container by keeping STDIN open even if not attached.
```bash
  docker run -i ubuntu echo "Hello World"
```

### flag -t
- The -t flag stands for terminal mode.
- The -t flag allocates a pseudo-TTY which is a terminal emulation that allows you to run a command in the container as if you were running it locally on your machine.
```bash
  docker run -t ubuntu echo "Hello World"
```

### flag -it
- You can use the -it flag together to start an interactive session with the container and allocate a pseudo-TTY.
- The -it option is used when you want to interact with the container and execute commands inside it.
```bash
  docker run -it ubuntu /bin/bash
```

### flag -p ( PORT )
- it used to map the running port of an container with our own port.
- When we run a container it will have an internal IP, it is only accessible within the docker host. 
- Since this is an internal IP user from outside of the docker host cannot access it.
- To access this server you must have mapped the port inside the docker container to a free port in the docker host.
- Doing so you are able to access that particular server by using the mapped port.
- This way you can run multiple instances of your application and map them to different ports on the docker host.
```bash
  docker run -p 8000:5000 <app-name>
```

### flag -v ( Volume )
- if you start a mysql container, when the databases and tables are created the data files are stored in /var/lib/mysql inside the docker container.
- Docker container has its own isolated file system and any changes to any files happened within the container.
- If you remove this container data will be lost.
- Inorder to persist data you must map a directory outside the container on the docker host to a directory inside the container.
- This way all your data will now be stored in the external volume even if you delete the container.
```bash
  docker run -v /opt/datadir:/var/lib/mysql mysql
```
## 12. Create a Docker image
To create a docker image of an application you need to follow certain steps

```bash
  # FROM: tells Docker what base image to use as a starting point.
  FROM node:18

  # WORKDIR: changes the active directory.
  WORKDIR /

  # COPY: copies the package.json file and package-lock.json
  COPY package*.json ./

  # RUN: install the dependencies
  RUN npm install

  # COPY: copies your app files into the container.
  COPY . .

  # EXPOSE: tells Docker which ports should be mapped outside the container.
  EXPOSE 3000

  # CMD: defines the command to run when the container starts.
  CMD ["node", "index.js"]
```

 To build the Image 
```bash
  docker build . -t <image-name>
```

### .dockerignore file
Create a .dockerignore file in the same directory as your Dockerfile with following content
```bash
  node_modules
  npm-debug.log
```

## 13. Docker Compose
- If we needed to setup a complex application running multiple services, a better way to do it using docker compose.
- With docker compose we can create a configuration file in YAML format called docker-compose.yml and put different services together and options specific to running them in the file.
- Then we can simply run docker-compose up command to bring up the entire application stack.
- It is easier to implement, run and maintain as all changes are always stored in the docker-compose configuration file.
- How ever this is all only applicable to running containers on a single docker host.

### --links
---links is command line option, which can be used to link 2 containers together.
```bash
  docker run -d --name=server -p 8000:80 --link db:mysql serverapp
```
- It creates an entry in to the etc/hosts files on the serverapp container (In this case) adding an entry with the host name db with internal IP of the mysql container.

```bash
docker-compose.yml

  services:
    db: 
      image: mongo
      restart: unless-stopped
      ports:
        - 27017:27017
      volumes:
        - /my/custom:/data/db
        
    server:
      image: hero
      ports: 
        - 3000:3000
      depends_on:
        - db
      build: 
        context: './'


```

## 14. Docker Registry
- A Docker registry is a system for storing and distributing Docker images with specific names. There may be several versions of the same image, each with its own set of tags.
- It is an essential repository for docker images

## 15. Docker Engine
- Docker engine, it's simply refered to host with docker installed on it.
- When we install docker on a linux host, we are actually installing 3 different components.
  ### 1. Docker deamon
  - The docker deamon is the background process that manages docker objects such as the images, containers, volumes and networks.
  ### 2. REST API server
  - The docker REST API server is the API interface, that programs can use to talk to the deamon and provide instructions. 
  ### 3. Docker CLI
  - The Docker CLI is the commandline interface that we have been using to perform actions such as running a container, stopping a container, destroying images etc.
  - It uses the REST API to interact with the docker deamon.

## 16. Docker Networking

- Docker networking allows containers to communicate with each other and with the external world by providing a range of networking options. 
- It enables seamless connectivity and facilitates data exchange between containers, enables container access to shared networks and services, and allows containers to be exposed on specific ports for external access, all while providing isolation and security.
- When we install docker it creates 3 networks automatically.
    - Bridge
    - none
    - host
### Bridge
- Bridge is the default network a container get attached to.
- It is a private internal network created by docker on the host. 
- All containers attached to this network by default and they get internal IP address.
- The containers can access each other using the internal IP address if required.
- To access these any of the container from the outside world map the port of the container to port on the docker host.

### None
- In none network, the containers are not attached with any network and doesn't have any access to the external network or other containers.
- They run in an isolated network.

### Host
- When using the host network mode, the container shares the network stack with the host. 
- It means the container uses the host's network interface, and network services running on the host can be accessed directly from the container. 
- In this mode, containers do not have their own network namespace.

## 17. Container Orchestration
### Problem
- With docker we can run a single instance of the application with a simple docker run command. but it's just 1 instance of our application on 1 docker host.
- What happens if the number of users increse and the instance is no longer able to handle the load. then we add additional instance of the application by running docker run command multiple time. That is something we have to do ourself.  
- And not just that, we have to keep a close watch on the health of these applications.
- And if a container was to fail we should be able to detect that and run the docker run command again to deploy another instance of that application.
- what about the health of the docker host itself ? 
- what if the host crashes and inaccessible ?
- The containers hosted on the host become inaccessible too.
- so what do we do inorder to solve these issues ?
- We will need a dedicated engineer who can sit and monitor the state, performance, and health of the containers and take necessary actions to remediate the situation.
- But if we have large applications deployed with tens of thousands of containers, that's not a practical approach.
- So we can build our own scripts and that will help us to tackle these issues to some extent.
- Container orchestration is just a solution for that.

### Container orchestration
- It is a solution that consist of a set of tools and scripts that can help host containers in a production environment.
- Typically a container orchestration solution consist of multiple docker hosts that can host containers.
- that way even if 1 fails, The application is still accessible through the others.
- A container orchestration solution easily allows us to deploy hundreds or thousands of instances of our application with a single command.
```bash
  docker service create --replicas=100 nodejs
```
- this is a command used for Docker swarm.
- And not just clustering and scaling, the container orchestration solutions also provide support for advanced networking between these containers across different hosts as well.

- There are multiple container orchestration solutions available today
    - Docker has docker swarm
    - Kubernetes from google
    - Mesos from apache

## 18. Docker Swarm
- With docker swarm we could now combine multiple docker machines together into a single cluster.
- Docker will take care of distributing our services or our application instances into separate hosts for high availabilty and for load balancing across different systems and hardware.
- to set up a docker swarm, we must first have hosts or multiple hosts with docker installed on them.
- Then we must designate one host to be the manager or the master or it's the swarm manager as it is called and others as slaves or workers.
- Once we done with that, run the  docker swarm init command on the swarm manager and that initialize the swarm manager.

## 19. Kubernetes
- With docker, we were able to run a single instance of an application using the docker CLI by running the docker run command. 
- With kubernetes, using the kubernetes CLI known as kube control, we can run a 1000 instance of the same application with a single command.
```bash
  kubectl run --replicas=1000 my-web-server
```
- kubernetes can scale it up to 2000 with another command.
```bash
  kubectl scale --replicas=2000 my-web-server
```
- Kubernetes can be even configured to do this automatically so that instances and the infrastructure itself can scale up and down based on user load.
- Kubernetes can upgrade these 2000 instances of the application in a rolling  upgrade fasion 1 at a time with a single command.
- If something goes wrong it can help us rollback these images with a single command.
- Kubernetes uses docker hosts to host application in the form of docker containers.

## 20. Docker Logs
- Docker logs provide a streamlined way to monitor and debug your running containers. With the docker logs <container_name_or_id> command, you can access logs generated by any container, helping to track application events or errors. For real-time log monitoring, the -f flag (i.e., docker logs -f <container_name_or_id>) streams the logs as they are written, similar to the Linux tail -f command. If you need to focus on recent events, you can limit the log output using the --tail option, like docker logs --tail 50 <container_name_or_id>, to view only the last 50 lines. Logs can also include timestamps (--timestamps) to provide precise timing for each event, which is useful for debugging timing issues. Additionally, the --since flag allows you to filter logs from a specific time, for example: docker logs --since "1h" <container_name_or_id> will only show logs from the last hour. This flexibility makes Docker logs essential for understanding how your containerized application behaves at any given time.

### View logs from a container
```bash
docker logs my_container
```

```bash
### Stream logs in real-time
docker logs -f my_container
```

```bash
### View the last 50 log lines with timestamps
docker logs --tail 50 --timestamps my_container
```
```bash
### Show logs since the past 1 hour
docker logs --since "1h" my_container
```

## 21. Docker Volumnes

-Docker volumes provide a way to persist and manage data generated by Docker containers, ensuring that data is not lost when containers are stopped or deleted. Volumes can be created explicitly using docker volume create <volume_name> and mounted into containers during runtime with the -v option. For instance, docker run -v my_volume:/app/data my_image mounts the volume my_volume at /app/data within the container. This is especially useful for databases, where data needs to persist between container restarts, or for sharing data between multiple containers. Besides named volumes, bind mounts allow you to directly map host directories into the container, for example, docker run -v /host/path:/container/path. You can manage volumes using docker volume ls to list existing volumes, inspect specific volumes with docker volume inspect <volume_name>, and remove unused volumes with docker volume prune. Volumes play a crucial role in decoupling storage from container lifecycles, making them a key feature for building resilient, data-driven applications.

```bash
### Create a named volume
docker volume create my_volume
```
```bash
### Run a container with a mounted volume
docker run -v my_volume:/app/data my_image
```

```bash
### Bind mount a host directory into the container
docker run -v /host/data:/app/data my_image
```

```bash
### List all Docker volumes
docker volume ls
```

```bash
### Inspect a specific volume
docker volume inspect my_volume
```

```bash
### Remove unused volumes
docker volume prune
```

