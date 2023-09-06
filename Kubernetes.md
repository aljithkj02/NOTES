# Kubernetes
Kubernetes is one of the best and most popular container orchestration technology used to orchestrate the deployment and management of hundreds and thousands of containers in a clustered environment.


## Roadmap

1. Containers

2. Container orchestration

3. Kubernetes advantages

4. Kubernetes Architecture



## 1, Containers
- Containers are completely isolated environments, as in they can have their own possesses or services, their own networking interfaces, their own mounts, just like virtual machines, except they are all shared the same  operating system kernal.

## 2, Container orchestration
- What if our application relies on other containers such as database or messaging service or other backend services?
- What if the number of users increase and we need to scale our application ? 
- How do we scale down when the load decreases ?
- To enable these functionalities, we need an underlying platform with a set of resources and capabilities.
- The platform needs to orchestrate the connectivity between the containers and automatically scale up or down based on the load.
- These whole process of automatically deploying and managing containers is known as Container Orchestration.
- Kubernetes is just a container orchestration technology.

## 3, Kubernetes advantages
- Our application is now highly available as hardware failures to not bring our application down because we have multiple instances of our application running on different nodes.
- The user traffic is load balanced across the various containers. When demand increases, deploy more instances of the applications seamlessly and within a matter of seconds, and we have the ability to do that at a service level when we run out of hardware resources, scale the number of underlyling nodes up or down without having to take down the application, and do all of these easily with a set of declarative object configuration files.

## 4, Kubernetes Architecture
### Nodes
- A node is a machine, physical or virtual on which kubernetes is installed.
- A node is a worker machine and that is where containers will be launched by kubernetes.
- What if the node on which our application is running fails?
- Well obviously our application goes down.
- So we need to have more than 1 nodes.

### Cluster
- A cluster is a set of nodes grouped together.
- This way even if one node fails we have our application still accessible from the other nodes.
- Moreover having multiple nodes helps in sharing load as well.

### Master
- Now we have cluster. But who is responsible for managing the cluster? 
- Where is the  information about members  of the cluster stored?
- How are the nodes are monitored?
- When a node fails how do we move the workload of the field node to another worker node?
- That's where the master comes in.
- The master is the another node with kubernetes installed in it is configured as a master.
- The master watches over the nodes in the cluster and is responsible for the actual orchestration of containers on the worker nodes.

### Components
- When we install kubernetes on a system, we're actually installing the following components.
    * an API server
    * an etcd service
    * a kubelet service
    * a container runtime
    * controllers
    * schedulers

#### 1, API server
- The API server acts as the front end for kubernetes.
- The users, management devices, command line interfaces all talk to the Api server to interact with Kubernetes cluster.

#### 2. etcd key store
- etcd is a destributed reliable key value store used by Kubernetes to store all data used to manage the cluster.
- Think of it this way.
- When we have multiple nodes and multiple masters in our cluster, etcd stores all that information on all the nodes in the cluster in a distributed manner.
- etcd is responsible for implementing locks within the cluster to ensure that there are no conflicts between the masters.

#### 3, Scheduler
- The scheduler is responsible for distributing work or containers across multiple nodes.
- It looks for newly created containers and assigns them to nodes.

#### 4, Controllers
- The controllers are the brain behind orchestration.
- They are responsible for noticing and responding when nodes, containers or end points goes down.
- The controllers make decisions to bring up new containers in such cases.

#### 5, Container runtime
- The container runtime is the underlying software that is used to run containers.
- In our case it happenes to be docker. But there are other options as well.

#### 6, Kublet
- Kublet is the agent that runs on each node in the cluster.
- The agent is responsible for making sure that the containers are running on the nodes as expected.

### We saw 2 types of servers. Master, worker and set of components thats make up kubernetes.
- But how are these components distributed across different types of servers? In other words, how does one server become a master and the other the slave? 
- The worker node or minion as it is also known is where the containers are hosted.
- The master server has the kube API server and that is what makes it a master.
- Similarly the worker nodes have the kubelet agent that is responsible for interacting with a master to provide health information of the worker node and carry out actions requested by the master on the worker nodes.
- All the information gathered are stored in a key value store on the master.
- The key value store is based on the popular etcd framework as we just discussed.
- The master also has the control manager and the scheduler.
- There are other components as well.


## 5, kubectl
- kubectl is a command line utility.
- The kubectl tool is used to deploy and manage applications on a kubernetes cluster.
- To get cluster information, to get the status of other nodes in the cluster and to manage many other things.
- The kubectl run command is used to deploy an application on the cluster.
- The kubectl cluster-info command is used to view information about the cluster and the kubectl get nodes command is used to list all nodes part of the cluster.

## 6, Pods
- Kubernetes does not deploy containers directly on the worker nodes.
- The containers are encapsulated into a Kubernetes object known as pods.
- A pod is a single instance of an application.
- A pod is the smallest object that we can create in kubernetes.
- Pods usually have a 1 to 1 relationship with containers running our application.
- To scale up, we create new pods and scale down we delete existing pods.
- We do not add additional containers to an existing pod to scale our application.

## 7, Multi-Container pods
- A single pod can have multiple containers except for the fact that they're usually not multiple containers of the same kind.
- If our intention was to scale our application, then we would need to create additional pods.
- But sometime we might have a scenario where we have a helper container that might be doing some kind of supporting task for our web application, such as processing a user entered data, processing a file uploaded by the user.