# Mongod DB
MongoDB is a popular NoSQL database that stores and manages data in a flexible, document-oriented format, making it easy to work with dynamic and evolving data structures.
## Roadmap

1. Installation

2. What is database?

3. How would we access data?

4. What is DBMS?

5. Different type of databases

6. Relational databases

7. Non-Relational databases

8. Relationships and Normalization

9. What is MongodDB?

10. MongoDB Features:

11. MongoDB Benefits:

12. NoSQL vs SQL

13. BSON and JSON

14. How does MongoDB work?

15. MongoDB Databases

16. Query operators in MongoDB

17. Embedded document

18. Querying Arrays in MongoDB documents

19. Using Query operators with MongoDB arrays

20. MongoDB Projections

21. Working with cursor in MongoDB

22. Update operators 

23. What is upsert option?

24. Delete document from MongoDB.

25. What is data modeling?

26. How does data modeling work for relational databases?

27. Advantages of data modeling with MongoDB

28. Things to remember about the data models.

29. Datatypes in MongoDB

30. Modeling our database.

31. Embedded vs Linked documents

32. One to One Relationship.


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


## 11. MongoDB Benefits:
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

## 12. NoSQL vs SQL

|           | SQL                                             | NoSQL                                           |
|-----------|-------------------------------------------------|-------------------------------------------------|
| Data Storage | SQL databases, also known as relational databases, consist of tables that contain rows and columns where data is stored. | NoSQL databases consist of documents where data is stored in the form of a JSON-like structure that most developers are familiar with. |
| Schema    | SQL databases have a predefined schema that is fixed. | NoSQL databases are schemaless and don't have any predefined structure. This enables developers to store data in a flexible way without worrying about the schema. |
| Examples  | Popular examples of SQL databases include MySQL, Oracle, and PostgreSQL. | Popular examples of NoSQL databases include MongoDB, BigTable, Cassandra, and CouchDB. |
| Querying  | SQL databases are suited for complex queries. | NoSQL databases are not as good with complex queries compared to SQL databases. |
| Scaling   | Enables vertical scaling. Vertical scaling involves increasing the capacity of the server to a more powerful one. | Enables horizontal scaling, where the database is scaled across different servers. |


## 13. BSON and JSON
- MongoDB is not using instead it is using BSON ( JSON like format )
- BSON means Binary JSON

### Why use BSON and not JSON?
- BSON allows developers to store data in native types like dates. Which is  not possible in JSON.
- This is an important part since we are dealing with data, it would be useful to represent data in native types.
- BSON is optimized for speed, space, and efficiency which impacts the  overall performance of the database.

### Things to know
- BSON format is used by MongoDB to work with data both internally and over the network.
- Drivers are responsible to convert data into BSON format that MongoDB can use and vice versa.

## 14. How does MongoDB work?

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

### When a query is executed in MongoDB, the flow generally follows these steps:

- The query is received by the MongoDB server.
- The server checks the in-memory cache (working set) to determine if the requested data is available. If found in memory, the server retrieves the data from there, providing faster access.
- If the data is not in memory, the server accesses the storage engine to retrieve the data from disk. This involves reading the required data blocks from the disk into memory.
- The server processes the query and performs the necessary operations (e.g., filtering, aggregating) using the data in memory.
- The query result is sent back to the client.

## 15. MongoDB Databases
- A collection in MongoDB is a group of documents.
- A database is group of collections that exists.

## CRUD Operations
### Use the below data for practice.
```bash
    [
        {
            _id: ObjectId("64b267b4c648b9effc2d0773"),
            name: 'Deborah Allen',
            age: 22,
            city: 'Las Vegas, United States',
            location: [ 40.8584, 1.2945 ],
            hobbies: [ 'Swimming', 'Painting' ]
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0774"),
            name: 'Angela Perez',
            age: 25,
            city: 'New York, United States',
            location: [ 31.4782, 1.2245 ],
            hobbies: [ 'Woodworking', 'Reading' ]
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0775"),
            name: 'Michael Dsouza',
            age: 23,
            city: 'San Jose, United States',
            location: [ 40.6892, 74.0445 ],
            hobbies: [ 'Dancing' ],
            education: { university: 'calicut', start: '05-2017', end: '02-2019' }
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0776"),
            name: 'Lauren Shaw',
            age: 20,
            city: 'New Jersey, United States',
            location: [ 21.3387, 36.7645 ],
            hobbies: [ 'Cooking' ]
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0777"),
            name: 'Lewis Fisher',
            age: 33,
            city: 'San Jose, United States',
            location: [ 40.6892, 74.0445 ],
            hobbies: [ 'Dancing' ],
            education: { university: 'calicut', start: '05-2017', end: '02-2019' }
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0778"),
            name: 'Nina Jekins',
            age: 29,
            city: 'San Francisco, United States',
            location: [ 39.3367, 71.0345 ],
            hobbies: [ 'Coding' ],
            education: { university: 'california', start: '02-2015', end: '02-2016' }
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d0779"),
            name: 'Michael Bura',
            age: 32,
            city: 'Utah, United States',
            location: [ 48.8584, 2.2945 ],
            hobbies: [ 'Writing', 'Dancing' ]
        },
        {
            _id: ObjectId("64b267b4c648b9effc2d077a"),
            name: 'Michael Baker',
            age: 39,
            city: 'San Francisco, United States',
            location: [ 39.3367, 71.0345 ],
            hobbies: [ 'Dancing' ],
            education: { university: 'california', start: '02-2015', end: '02-2016' }
        }
    ]

```
### Insert document

#### - Insert 1 document
```bash
    db.collectionName.insertOne(data);
```
- Example
```bash

    db.user.insertOne({ 
        name: 'Babu', 
        age: 44, 
        city: 'Thrissur', 
        location: [48.3453, 5.32345], 
        hobies: ['swirming', 'playing'] 
    });
```

#### - Insert many document
```bash
    db.collectionName.insertMany(Array of data);
```
- Example
```bash
    db.user.insertMany(
        [
            { 
                name: 'Nina Jekins', 
                age: '29', 
                city: 'San Francisco, United States', 
                location: [40.6892, 74.0445], 
                hobbies: ['Coding'] 
            }, 
            { 
                name: 'Michael bura', 
                age: '32', 
                city: 'Utah, United States', 
                location: [48.8584, 2.2945], 
                hobbies: ['Writing', 'Dancing'] 
            }
        ]
    );

```

### Retrieve document
#### Retrieve all documents
```bash
    db.collectionName.find();
```
- Example
```bash
    db.user.find();
```

#### Filter documents
```bash
    db.collectionName.find(query);
```
- Example
```bash
    db.user.find({ name: 'Aljith' });
```

### Update document
#### Update one document
```bash
    db.collectionName.updateOne(<query>, <update>);
```
- Example
```bash
    db.user.updateOne(
        { 
            name: 'Michael bura' 
        }, 
        { 
            $set: {  name: 'Jithu' }
        }
    );
```

#### update multiple documents
```bash
    db.collectionName.updateMany(<query>, <update>);
```
- Example
```bash
    db.user.updateMany(
        { 
            name: 'Jithu' 
        }, 
        { 
            $set: {  state: 'Kerala' }
        }
    );
```


## 16. Query operators in MongoDB
 - MongoDB operators are special keywords or symbols that have been made available by MongoDB for the use of developers.
 - They add additional functionality by allowing developers to write complex queries.
 - Operators starts with $ sign. 

 ### some of the important operators
 - $in, $nin, $not
 - $gt , $lt, $gte, $lte , $eq, $ne
 - $and, $or
 - $all, $elemMatch  ( Arrays )

## 17. Embedded document
- MongoDB allows us to store document within the document.
- An embedded document looks like :
```bash
    {
        _id: ObjectId("64b267b4c648b9effc2d0778"),
        name: 'Nina Jekins',
        age: 29,
        city: 'San Francisco, United States',
        location: [ 39.3367, 71.0345 ],
        hobbies: [ 'Coding' ],
        education: 
            { 
                university: 'california', 
                start: '02-2015', 
                end: '02-2016' 
            }
    }
```

### Embedded document has some limitations as well
- We can only nest up to 100 levels.
- Document size cannot exceed 16 MB.

### Querying embedded documents
```bash
    db.user.find({ 'education.university' : 'calicut' })
```

## 18. Querying Arrays in MongoDB documents
#### There are 2 ways in which we can filter.
1. Exact match
- We may want to retrieve data by filtering value that is an exact match to an array including order of elements.

```bash
    db.user.find({ hobbies: ['Dancing', 'Swimming'] })
```

2. Not Exact match
- we way want to retrieve data by filtering value that contains specified elements without considering the order

```bash
    db.user.find({ hobbies: 'Dancing' })
    db.user.find({ hobbies: { $in:  ['Dancing', 'Swimming'] } })
    # To retrieve data regardless of order
    db.user.find({ hobbies:{ $all:  ['Swimming', 'Dancing'] } })
    db.user.find({ hobbies:{ $all:  ['Dancing', 'Swimming'] } })

```

## 19. Using Query operators with MongoDB arrays
```bash
    db.user.find({ location:{$elemMatch: { $gt: 39, $lt: 45 }} })
```
- db.user.find({ location:{$elemMatch: { $gt: 39, $lt: 45 }} }): This query uses the $elemMatch operator to specify that the condition should be applied to each element in the "location" array individually. 
- It matches documents where the "location" array contains at least one element that is greater than 39 and less than 45.

```bash
    db.user.find({ location: { $gt: 39, $lt: 45 } })
```
- db.user.find({ location: { $gt: 39, $lt: 45 } }): This query does not use the $elemMatch operator. Instead, it specifies the condition directly on the "location" field. 
- However, when using this syntax without $elemMatch, it treats the "location" field as a whole, not individually evaluating each element of the array. 
- It matches documents where the "location" field itself is greater than 39 and less than 45.

- In summary, the first query checks if any element within the "location" array satisfies the condition, while the second query checks if the "location" field as a whole satisfies the condition.

## 20. MongoDB Projections
- In MongoDB, projection refers to the process of specifying which fields of a document should be returned in the query results. 
- It allows you to retrieve only the necessary data, reducing network overhead and improving performance. 
- By defining a projection, you can include or exclude specific fields from the query results, shaping the structure and content of the returned documents. 
- This selective retrieval helps optimize resource usage and minimizes data transfer, enabling more efficient data access and manipulation in MongoDB applications.

```bash
    # To include only name and age
    db.user.find({ name: 'Lauren Shaw' }, { name: 1, _id: 0, age: 1 });

    # We can't do like this. either both should be inclusion or exclusion (Not for _id)
    db.user.find({ name: 'Lauren Shaw' }, { name: 1, age: 0 });

    # 1 is for include projection, 0 for exclude projection


```

## 21. Working with cursor in MongoDB
### What is cursor?
- When ever we use find method we may get list of documents that match the criteria that we specified.
- However behind the scenes find method returns a pointer which points to the document object of the collection.
- This pointer is known as cursor.
- By default cursor prints the output up to 20 documents on the console.
- If there are more than 20 documents then we may have to press the key to view the results above 20.
- We can also assign the cursor in to variable and iterate manually.

```bash
    let cursor = db.user.find();

    while( cursor.hasNext()) { 
        printjson( cursor.next());
    }
    # This is how we can iterate our data inside the cursor.
```

## 22. Update operators 
### $currentDate
- It sets the value of field to current data, either as a date or a timestamp.
```bash
    db.users.updateOne({ name: 'Michael Baker'}, {$currentDate: { updatedAt: true}})
```

### $inc
- It is used to increment or decrement value of a particular field.
- We can increment multiple fields as well.
```bash
    db.users.updateOne({ name: 'Michael Baker' }, { $inc: { age: -2 } })
    db.users.updateOne({ name: 'Michael Baker' }, { $inc: { age: 2 } })
    db.users.updateOne({ name: 'Michael Baker' }, { $inc: { age: 10 } })
    db.users.updateOne({ name: 'Michael Baker' }, { $inc: { age: 2, score: 10 } })

```

### $min
- $min is used for if we want to update a value of a field with the minimum value.
- Means it compare both value ( current value and given value), if the current value is already minimum then it won't update, if the current value is maximum it updates the value of the field with the given value.

```bash
    Data = {
                _id: ObjectId("64b38aab7bb900f1bb11a847"),
                name: 'jithu',
                age: 17,
                city: 'Thrissur',
                location: [ 48.3453, 3.4535 ],
                hobbies: [ 'Singing', 'Reading' ]
            }

    db.users.updateOne({ name: 'jithu' }, { $min: { age: 20 }} ); # No change
    db.users.updateOne({ name: 'jithu' }, { $min: { age: 10 }} ); # It will update

```

### $max
- $Max updates the value if the given value greater than the current value. 
```bash    
    Data = {
                _id: ObjectId("64b38aab7bb900f1bb11a847"),
                name: 'jithu',
                age: 17,
                city: 'Thrissur',
                location: [ 48.3453, 3.4535 ],
                hobbies: [ 'Singing', 'Reading' ]
            }

    db.users.updateOne({ name: 'jithu' }, { $max: { age: 20 }} ); # It will update
    db.users.updateOne({ name: 'jithu' }, { $max: { age: 10 }} ); # No change

```

### $mul
- It is used to update a field with the value which is multiplied value ( current value * given value )
```bash
    db.users.updateOne({ name: 'jithu' }, { $mul: { age: 2 }} );
    # age become 2 * current age

```

### $rename
- $rename is basically used for rename a specific field.
```bash
    db.users.updateOne({ name: 'jithu' }, { $rename: { score: "points" }} );
    # the field score renamed to points.

```

### $unset
- $unset is used to unset or delete a particular field that exist.
```bash
    db.users.updateOne({ name: 'jithu' }, { $unset: { points: 1 }} );
    # the field points removed from the document.

```

## 23. What is upsert option?
- upsert is used to if we are trying to update a document but if the document doesn't exist it won't update.
- In this case, we want to create a document if the document is not present 
then we can use upsert.
- upsert will create the document if couldn't able to find.
- If there is no matching results then inserts the document.
 ```bash
    db.users.updateOne({ name: 'ivan'}, { $set: { age: 23 } }, { upsert: true } );

 ```


## 24. Delete document from MongoDB.
### Delete a single document from MongoDB
```bash
    db.users.deleteOne({ name: 'Michael Baker' });
    # deleteOne is used to delete one document based on the given criteria
``` 

### Delete multiple document from MongoDB
```bash
    db.users.deleteMany({ age: { $gte: 30 } } );
    # deleteMany is used to delete multiple documents based on the given criteria.
```

## 25. What is data modeling?
- Data modeling is the process of understanding and analyzing our business requirements and then defining structure for our data.
- This would comprise of how we are defining the structure of data, how our data is stored, and relationships between our data.

## 26. How does data modeling work for relational databases?
- We define a schema which would dictate how our data is stored.
- We then normalize our schema to reduce the duplicates or to eliminate redundancy of data.

## 27. Advantages of data modeling with MongoDB
- Since the schema we are working with is flexible, it does not forces us to define the structure of data at the beginning itself.
- We as a developer have the leverage of iterating our data model as our application evolves and grows.
- With MongoDB, we have multiple design options that we can choose from depending on our requirements and needs.
- Changing the data model later on once our application evolves is very easy, since there is no defined structure or schema that MongoDB has. Remember it's NoSQL database.
- Flexible structure enables developers to focus on what's important and that is the working of an application.

## 28. Things to remember about the data models.
- Data modelling is a continuous and iterative process.
- Data model and schema designs are important when it comes to MongoDB or NoSQL databases.

## 29. Datatypes in MongoDB
- Double
- String
- Integer
- Boolean 
- Object ID ( It is used to store document id )
- Null
- Array
- Timestamp
- Date ( it stores time in Unix time format )
- Code

## 30. Modeling our database.
- Before we think about modeling our own database, it is important that we understand our business.
### Data modeling is a 3 step process.
1. Evaluate application and requirements.
2. Defining entities and relationships.
3. Finalize the data model.

### 1. Evaluate application and requirements.
#### If our application has not yet launched:
- We need to understand who will be the stakeholders.
- What data they would like to see.
- How frequent will be the access to the data they wish to see?
- How big is the data in terms of size?
<br>
( Here we are keeping in mind the frequency and the size of the data is being accessed )

#### If our application is already live:
- We need to understand who are the current stakeholders in our system.
- How are they currently using the data ?
- What is the frequency and size of the data that they are accessing

#### Getting answers to these questions will help us to understand the following
- What data is actually important from the system stand point.
- If any data is important what is the frequency in which it is accessed?
- Until what date in the past we need to have data for?

### 2. Defining entities and relationships.
- MongoDB allows data to be stored in 2 ways.
    1. Embedded
    2. Linked
- We can define relationships as below.
    1. One to One relationships having embedded documents.
    2. One to Many relationships having embedded documents.
    3. One to Many relationships having document references.


### 3. Finalize the data model.
- Here we define the model for the database, along with indexes, fields and so on.

## 31. Embedded vs Linked documents
### Embedded documents.
- MongoDB follows document approach where there are documents instead of rows as in SQL.
- Embedded documents are documents where one document is stored inside another document.

```bash
    {
        "_id": ObjectId("6123456789abcdef0123456"),
        "title": "Article Title",
        "content": "This is the content of the article.",
        "author": {
            "name": "John Doe",
            "email": "johndoe@example.com"
        },
        "comments": [
            {
            "author": "Jane Smith",
            "comment": "Great article!"
            },
            {
            "author": "Bob Johnson",
            "comment": "Well written!"
            }
        ]
    }
```

### Linked or Referenced documents.
- Referenced documents are stored in a separate collection with references to each other.

```bash
    {
        "_id": ObjectId("6123456789abcdef0123456"),
        "title": "Article Title",
        "content": "This is the content of the article.",
        "author": ObjectId("a123456789abcdef01234567"),
        "comments": [
            ObjectId("c123456789abcdef01234567"),
            ObjectId("c223456789abcdef01234567")
        ]
    }
```

### Considerations
- If the data is going to be fetched and updated together then it makes sense to embed them.
- If we will be doing lot of write operations on embedded documents, we should consider storing them as references because this would make things slower.
- If there is a need for accessing subset of data then we can mix both the approaches.
- If there are lots of informations being stored as embedded, we might even want to consider referencing.


## 32. One to One Relationship.
- One to one relationship is a type of relationship where in 1 entity is related to exactly instance of another entity and vice versa.

```bash
    // User document
    {
        "_id": ObjectId("6123456789abcdef0123456"),
        "name": "John Doe",
        "email": "johndoe@example.com",
        "profileId": ObjectId("7123456789abcdef0123456")
    }

    // Profile document
    {
        "_id": ObjectId("7123456789abcdef0123456"),
        "dob": "1990-01-01",
        "address": "123 Main Street",
        "city": "New York",
        "country": "USA"
    }
```