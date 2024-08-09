# Kubernetes or k8s
- Kubernetes is a container orchestration tool/engine for automating deployment, scaling and managing containerized applications.

## Container Orchestration
- Container orchestration means there would be a main engine in our case it is kubernetes. It will make sure that all the nodes & containers run smoothly and work together efficiently. Even if one of the container goes down the kubernetes engine will create a new instance of the app and run in order to run the all application smoothlly or maintain the stability.

## Cluster
- A kubernetes cluster is a group we can say, it consists a bunch of nodes or machines that run containerzed applications.
- Every cluster atleast has 1 worker node.

## Worker Node
- A worker node is the machine where the pods will be running. That is the main duty of the worker node.

## Control Plane or Master Node
- This is the master node which manages the all other worker nodes and the pods in a cluster.

## Components of a Control Plane
```
    +---------------------------------------------------+
    |                    Control Plane                  |
    |                                                   |
    |    +------------------+     +------------------+  |
    |    |    API Server     |     |  etcd            |  |
    |    +------------------+     +------------------+  |
    |                                                   |
    |    +---------------------+  +------------------+  |
    |    | Controller Manager   |  |  Scheduler       |  |
    |    +---------------------+  +------------------+  |
    |                                                   |
    |    +-----------------------------+               |
    |    | Cloud Controller Manager     |               |
    |    +-----------------------------+               |
    |                                                   |
    +---------------------------------------------------+

```

### 1, API Server
- This is the component which provides Kubernetes APIS, This is the major part in a control plane, where we and other components communicates with the kubernetes master node.

### 2, etcd
- It is a highly available distributed key value store used to store all cluster related data.

### 3, Scheduler
- The scheduler watches for newly created Pods with no assigned node, and selects a node for them to run on.

### 4, Controller Manager
- A control manager consists of various controllers. ( deployment controller, replica set controller, HPA controller, Pod controller, ...)
- Each controller continuosly watches clusters states through API server.
- It ensures that the current state matches the desired state defined in k8s objects.

## Components of Worker Node
```
    +------------------------------------+
    |          Worker Node               |
    |                                    |
    |  +--------------------------+      |
    |  |        Kubelet           |      |
    |  +--------------------------+      |
    |                                    |
    |  +--------------------------+      |
    |  |       Kube Proxy         |      |
    |  +--------------------------+      |
    |                                    |
    |  +--------------------------+      |
    |  |   Container Runtime      |      |
    |  +--------------------------+      |
    |                                    |
    +------------------------------------+

```

### 1, Kubelet
- Kubelet is an agent that runs on each worker node.
- It's primary responsibility is to ensure that containers are running in a pod as expected.
- If any of the pod goes down it will try to restart the pod again.

### 2, Kube Proxy
- It is a network proxy that runs on each worker node in a cluster.
- It helps to manage network communication and ensure services are accessible both within the cluster and from external networks as well.

## Kubernetes Objects
- k8s objects are defined in yaml or json format that declares the desired state of applications, services and resources within the cluster.

## Container
- Container decouple the application from the underlying host infrastructure.
- That maks deployment easier in different cloud or os.

## Kind ( Kubernetes INside Docker)
- It is a tool for running local kubernetes cluster using docker containers.
- It is used to simulate kubernetes cluster environment.

## Kubectl
- It is a CLI tool used to run commands against kubernetes cluster.
- It does this by authenticating with the master node.

## Replicaset
- It is a kubernetes object where we mention how many pods should run and other pod related info such as port, label etc.
- It maintains the total number of replicas running as we mentioned in the replicaset.
- Even if any of the container went down it will take care of it by starting a new container.
- It handled by replicaset controller which is part of controller manager.
- We can run multiple pods in a single command.

## Deployment
- It is a k8s object, by seeing replicaset and deployment we can't find any such difference, even if we run we can't find such difference.
But there is a key difference.
- Deployment manages the scaling, rolling updates etc.
- Whenever we run a deployment it creates a replicaset.
- And if we want to update the image, what it does it will create a new replicaset and tries to run 1 pod from the new image, if it runs without any fail then only it delete 1 pod from the previous replicaset and try to run a new pod in the new replicaset.
- It continues this process until every pod is working fine in the new replicaset.
- If the pods are not working from the new replicaset, then the pods from old replicaset would still be available.

## Service
- Service is also a k8s object, which we use to group a set of pod endpoints to a single port.
- That can be accessed by the outside world.
- There are different types ( NodePort, Load balancer, etc)
- IF we choose NodePort then we will be able to connect to any node directly to access resources.

## Namespaces
- It lets us create logical separation of pods & services.

## Helm
- It is a package manager for k8s.

## Down sides of services
- If we have multiple services running then there would be different ports also to listen, so in that case we need to add that many load balancers.
- And we need to make sure there is no confilcting ports.
- Add rate limiting will be challenging if we add lot of load balancers as a single app.








