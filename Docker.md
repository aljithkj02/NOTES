# Docker

Docker is a containerization platform that simplifies application deployment and management.


## Roadmap

1. What is Docker?

2. What Problem does Docker solve?

3. What are containers?

4. Why do we need Docker?

5. What can it do?

6. Run docker containers

7. What is an image

8. Create a docker image

9. Networks in docker

10. Docker compose

11. Docker concepts in depth

12. Docker for windows/mac

13. Docker swarm

14. Docker vs Kubernetes


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

## 6. What are Containers?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- Containers are running instances of images that are isolated and have their own environments and set of process.
- A container only lives as long as the process inside it is alive,
if the web service inside the container is stopped or crashed then the container exits.
- The advantage of containers is that it requires very less resources.

## 7. Why do we need Docker?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- It allow us to get rid of the matrix from hell !!

## 8. What can it do?

- Containerize Applications
- Run each service with its own dependencies in separate containers.

## 9. Run docker containers

```bash
  docker run <image_name>
```

## 10. What is an image?
- Docker images are the read-only binary templates used to create Docker Containers.
- A docker image is a template or blueprint for creating containers. It is a self-contained package that includes everything needed to run a specific application, such as the code, dependencies, libraries, and configurations. 
- An image is created from a set of instructions called a Dockerfile, and it serves as a portable and reproducible unit that can be used to create and run multiple instances of containers with consistent behavior and environment.

## 11. Docker commands
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
It is used to view the logs of a perticular container.
```bash
  docker logs <container-id> 
```

## 12. Flags

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
- Doing so you are able to access that perticular server by using the mapped port.
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
## 13. Create a Docker image
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

## 14. Docker Compose
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

## 15. Docker Registry
- A Docker registry is a system for storing and distributing Docker images with specific names. There may be several versions of the same image, each with its own set of tags.
- It is an essential repository for docker images

## 16. Docker Engine
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
- In none network the containers are not attached with any network and doesn't have any access to the external network or other containers.
- They run in an isolated network.











<------------>

## Features

- Light/dark mode toggle
- Live previews
- Full screen mode
- Cross platform




## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

