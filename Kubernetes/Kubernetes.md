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

## Ingress
- Ingress is an API object that manages external access to the services in a cluster, typically http & https traffic.
- k8s itself doesn't provide an ingress controller implementation, rather specifies the ingress API.
- There are various ingress controllers out there, we can use any of them.
- A popular one is nginx ingress.
- It is managing access rules from a central point rather than each service independently.
- Reduces the number of load balancers needed.
- It also provides a Load balancer.

## Secrets
- It is designed specifically to store sensitive data such as passwords, OAuth tokens, and SSH keys

## ConfigMap
- It is used to store non-sensitive configuration data such as configuration files, env, command line args.

## Ephemeral Volume
- it means Temporory volume that can be shared amongst various containers of a pod.
- When the pod dies the volume dies with it.
- eg, Config map, Secret, emptyDir

## Persistent Volume (PV)
- In kubernetes there is a feature called persistent volume.
- For ephemeral type volume we can use config map, secret etc. But if we want a persistent data, for eg - if we are running a mongo pod in our cluster, if the cluster or the mongo pod went down our data would be lost right, so the best thing we can do that we can mount a volume externally to our cluster, so even if everything wend down we can get it back.
- For that we need to create a block storage or nfs anywhere in the cloud or local and create a k8s object for persistent volume (PV) and add necessary info. 
- So it is available to the cluster.
- We can also generate this dynamically.

## Persistent Volume Claiim (PVC)
- Now PV is available, now we have to claim the PV.
- A PVC is a request from storage. In PVC we specify size, and access mode etc.
- Once the PVC is created, it is automatically bound to a suitable PV by k8s or it waits until such a PV available.

## Horizontal Pod AutoScalar (HPA)
- A HPA is a k8s feature that automatically adjusts the number of pod replicas in a deployment, replicaset, or stateful set based on observed metrics like cpu utilization or custom metrics.
- This helps to ensure that the application can handle varying loads by scaling out ( adding more pod replicas ) when demand increases and scaling in ( reducing the number of pod replicas) when the demand decreases.

## CAdvisor ( Container Advisor )
- It provides container users and understanding of the resource usage and performance characterstics of their running containers.
- Specifically, CAdvisor auto discovers all the containers in the machine and collects CPU, memory, file system, and network usage statistics.
- It is an internal package within kubelets.
- In k8s environment, CAdivisor is intgrated into the kubelet binary.
- Kubelet uses CAdvisor to collect information about container resource usage and performance charecterstics.
- This information can be used by k8s components like the HPA or Scheduler for making decisions about deployments and resource allocations.

## Metric Server
- It is a light weight, in memory aggregator of data collected from nodes.
- It gathers metrics like CPU & memory usage from the kubelet on each node and exposes this aggregated data through the k8s APIs.
- This info can be accessed by k8s components, such as the HPA or k8s dashboard.

## Resource Management
- Inorder to fairly distribute the resources among services in a cluster, we can mention the resource metrix of a pod in the deployment.
- There we can add the minimum & maximum cpu & memory.
- So our pod will take minimum CPU & memory won't take more that the limit we mentioned.





