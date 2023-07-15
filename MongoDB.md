# Mongod DB




## 1. Installation
<a href="https://tecadmin.net/how-to-install-mongodb-on-ubuntu-22-04/">
MongoDB Installation Ubuntu 1
</a>
<br>
<a href="https://www.fosstechnix.com/how-to-install-mongodb-on-ubuntu-22-04-lts/">
MongoDB Installation Ubuntu 2
</a>
<br>
<a href="https://itnixpro.com/install-mongodb-compass-gui-on-ubuntu-22-04/">
MongoDB Compass installation
</a>


## 2. What is a database?
- Database is a place where data related to our users and product is stored.
- Databases are typically used  to store data and maintain the state of our application.

## 3. How would we access data?
- Data stored in database can be accessed using a language called SQL.
- SQL stands for structured query language which is typically written by data analysts and programmers.

## 4. What is DBMS?
- A database typically requires a comprehensive database software program know as a database management system (DBMS). 
- A DBMS serves as an interface between the database and its end users, allowing users to retrieve, update, and manage the information.
- A DBMS enables us to do a variety of administrative operations such as performance monitoring , taking backup and recovery.

## 5. Different type of databases
There are 2 types of databases.
- Relational and Non Relational.

## 6. Relational databases
- Relational databases store data in the form of rows and columns, and the format is similar to excel spreadsheet.
- we can store data there in rows and column.
- Structure of the database is known as schema and one row of information is known as a record.
- Some of the popular example of relational databases are : MySQL, Microsoft Access, Microsoft SQL Server, sqlite, Oracle database, postgres.

## 7. Non-Relational databases
- Non relational databases don't follow this approach of storing data in form of rows and columns.
- They don't have a fixed structure.
- Non relational databases are used in scenarios where we need more flexibility over structure.
- Data stored here is in the form of documents which is nothing but a JSON string.

## 8. Relationships and Normalization
- Linking between customer and orders table is known as relationship between 2 tables.
- The process of eliminating the redundant data from our database is known as normalization.

## 9. What is MongodDB?
- MongoDB is document-based database program that works on JSON like documents.
- This JSON like format for storing data is also known as BSON format.
- MongoDB is the most popular NoSQL database out there, that is widely used in a wide range of applications and has a strong developer community across the world.
- It has given developers an unprecedented level of flexibility and scalability.
- MongoDB is classified as a NoSQL database because of the schema-less approach to storing and  managing data.

## 10. MongoDB Features:
### STRUCTURE-LESS
- MongoDB is a document-oriented database, which means that data in MongoDB is stored in the form of a document, which is different from databases like SQL, where data is stored in form of rows and columns.
- These documents are then grouped as collections and stored.
- The relational database has rows and columns, which define the structure in which the data is to be stored.

### SHARDING
- Sharding involves storing data in parts at different sources of databases.
- This is done to divide the data into small manageable chunks known as shards which can be accessed from different sources.
- Now every source here is a separate instance of databases which is managed separately.
- Sharding allows databases to scale horizontally when data grows large in size.
- MongoDB allows sharding which makes it very much scalable and powerful.

### INDEXING
- Searching for data is one of the most common features that modern applications offer to their users.
- MongoDB offers indexing, which helps applications improve search speed and performance.
- MongoDB offers a variety of indexes and features with language-specific features to help developers improve application performance.

### SECURITY
- MongoDB has strong authentication which only allows only authorized users to access the data.

### REPLICATION
- Replication is the process of having the same set of data available across multiple servers.
- The purpose of replication is to make sure that there is data redundancy, this is done to ensure that if anything happens to the primary source of data then we have a backup.
- MongoDB has the concept of Replica sets, which allows us to define secondary service, which could be elected as primary server if anything happens to our current primary server.
- Whenever there is any write operation on our primary server, MongoDB allows us to apply those write operations to our secondary servers as well with in our replica sets so that the data is synchronized.
- Data synchronization ensures that the data on the secondary servers is consistent with the data on the primary server. 
- Replication is one of the powerful features, because it makes sure that our application has high availability, and is protected from data loss in case of any unforeseen events of failures.
- This is all handled by MongoDB making the life easy for developers like you and me.

### LOAD BALANCING
- Balancing the load of all the incoming data requests is one of the most important things when it comes to building a high-scale database or web application.
- We might have data spread across different servers. Without proper load balancing, there can be a delay if there is a data request.
- It is important that there is a proper load balancing to ensure faster responses to all client requests.
- MongoDB provides an inbuilt load-balancing mechanism that helps manage high traffic.


## 10. MongoDB Benefits:
### FLEXIBLE
- One of the major benefits of using MongoDB is flexibility in terms of data storage.
- As I mentioned, that MongoDB follows a schema-less approach to storing data, This enables developers to iterate faster and not worry too much about the structure.
- This schemaless approach is very much helpful for developers when the requirements are not fixed and the application is just being developed.
- Since developers can, later on, iterate and make necessary changes as the application evolves.

### HIGHLY SCALABLE
- MongodDB offers highly scalable features like load balancing, sharding, and replication that can scale as the traffic on our application using MongoDB grows.
- MongoDB can support high number of concurrent of read and write operations easily.

### DEVELOPER-FRIENDLY
- MongoDB make sure that they offer an amazing experience to all the developers.
- MongoDB has drivers that support popular programming languages like C, C#, C++, Python, java, Node JS, and more along with comprehensive documentation making it easy to use.

## 11. NoSQL vs SQL

|           | SQL                                             | NoSQL                                           |
|-----------|-------------------------------------------------|-------------------------------------------------|
| Data Storage | SQL databases, also known as relational databases, consist of tables that contain rows and columns where data is stored. | NoSQL databases consist of documents where data is stored in the form of a JSON-like structure that most developers are familiar with. |
| Schema    | SQL databases have a predefined schema that is fixed. | NoSQL databases are schemaless and don't have any predefined structure. This enables developers to store data in a flexible way without worrying about the schema. |
| Examples  | Popular examples of SQL databases include MySQL, Oracle, and PostgreSQL. | Popular examples of NoSQL databases include MongoDB, BigTable, Cassandra, and CouchDB. |
| Querying  | SQL databases are suited for complex queries. | NoSQL databases are not as good with complex queries compared to SQL databases. |
| Scaling   | Enables vertical scaling. Vertical scaling involves increasing the capacity of the server to a more powerful one. | Enables horizontal scaling, where the database is scaled across different servers. |


## 12. BSON and JSON
- MongoDB is not using instead it is using BSON ( JSON like format )
- BSON means Binary JSON

### Why use BSON and not JSON?
- BSON allows developers to store data in native types like dates. Which is  not possible in JSON.
- This is an important part since we are dealing with data, it would be useful to represent data in native types.
- BSON is optimized for speed, space, and efficiency which impacts the  overall performance of the database.

### Things to know
- BSON format is used by MongoDB to work with data both internally and over the network.
- Drivers are responsible to convert data into BSON format that MongoDB can use and vice versa.

## 13. How does MongoDB work?

### Storage Engine

MongoDB utilizes different storage engines to manage data storage on disk. The two primary storage engines are:

- **MMAPv1**: Maps data files directly into memory, enabling efficient read operations. It employs disk-based locking for concurrent write operations.

- **WiredTiger**: Default storage engine since MongoDB 3.2. Offers improved performance, compression, and concurrency control. It utilizes document-level locking and provides advanced features.

### Data Model

MongoDB stores data in a flexible and schema-less format called BSON (Binary JSON). BSON allows for storing various data types, including strings, numbers, arrays, and nested documents. This flexible data model allows developers to iterate quickly and adapt to changing requirements without strict schema constraints.

### Memory

MongoDB leverages memory for various operations:

- **Working Set**: MongoDB keeps frequently accessed data in memory to enhance read performance. The portion of data and indexes frequently accessed by the application is known as the "working set."

- **Caching**: MongoDB employs a cache mechanism to store recently accessed data, reducing disk I/O and improving overall performance.

- **Indexes**: Indexes, used for efficient data retrieval, are stored in memory to facilitate quick lookup and retrieval of data.

These internal components play a crucial role in MongoDB's performance, reliability, and scalability. The choice of storage engine impacts data storage and retrieval efficiency, while the flexible data model and memory management techniques contribute to MongoDB's agility and speed.

## 14. 