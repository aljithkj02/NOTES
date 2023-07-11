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

## 3. What are Containers?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- Containers are running instances of images that are isolated and have their own environments and set of process.
- A container only lives as long as the process inside it is alive,
if the web service inside the container is stopped or crashed then the container exits.

## 4. Why do we need Docker?

- Containers are like lightweight, self-contained packages that hold everything needed to run a specific application or service, including the code, runtime, libraries, and system tools. 
- They provide a consistent and isolated environment, making it easier to deploy, manage, and move applications across different systems without worrying about conflicts or dependencies.
- It allow us to get rid of the matrix from hell !!

## 5. What can it do?

- Containerize Applications
- Run each service with its own dependencies in separate containers.

## 6. Run docker containers

```bash
  docker run <image_name>
```

## 7. What is an image?

- A docker image is a template or blueprint for creating containers. It is a self-contained package that includes everything needed to run a specific application, such as the code, dependencies, libraries, and configurations. 
- An image is created from a set of instructions called a Dockerfile, and it serves as a portable and reproducible unit that can be used to create and run multiple instances of containers with consistent behavior and environment.

## 8. Docker commands
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
  docker ps 
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

## 9. Flags

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

