# Index

1. [Linework](#1-linework)
2. [Make-Notion](#2-make-notion)

# 1. Linework

## Description
Linework is a versatile app that acts as a one-stop solution for various needs. It functions as a marketplace for products, services, and art, along with offering social networking and crypto-based banking features. The application is divided into three main components: E-commerce, Social Media, and Web3. In essence, Linework aims to simplify and connect various aspects of daily life in a single, user-friendly platform.

## Frontend 
- Led the development of E-commerce and Social Media frontends for Linework, a global application transforming product management in the cosmetics industry and offering a robust social networking platform.

- Designed and implemented responsive and intuitive user interfaces using React, contributing to seamless user experiences in both E-commerce and Social Media sections.

- Spearheaded the creation of dynamic features such as pagination, search functionality, and real-time updates, enhancing data accessibility and user interactions across platforms.

- Implemented Redux Toolkit for state management, optimizing application performance and maintaining a robust, organized code structure for efficient maintenance.

- Collaborated closely with UX/UI designers, translating wireframes and mockups into functional, aesthetically pleasing features for both E-commerce and Social Media components.

- Successfully integrated Next.js to enhance application performance and loading times in both sections.

- Developed and maintained APIs using Axios, ensuring efficient data retrieval and communication with the backend for both E-commerce and Social Media functionalities.

- Worked closely with backend developers to guarantee seamless integration between front-end and backend systems in both project components.

- Conducted code reviews and provided constructive feedback to junior team members, fostering a collaborative and knowledge-sharing environment.

- Implemented responsive design principles to ensure consistent user experiences across various devices, contributing to increased user engagement in both platforms.

- Executed performance optimization techniques, resulting in reduced page load times and improved overall application responsiveness for both sections.

- Actively participated in Agile development methodologies, attending daily stand-ups, sprint planning, and retrospective meetings for effective project delivery.

- Collaborated with cross-functional teams to brainstorm and implement innovative features, ensuring Linework stays at the forefront of technology in both E-commerce and Social Media domains.

- Stayed informed about the latest developments in React and frontend technologies, introducing best practices and performance optimizations to both project components.

### Technologies
- React JS, Redux Tool Kit, React Router Dom, Axios, Next Js, Typescript

### Challenges
- Data Complexity: Analyzing and visualizing complex data sets, especially related to E-commerce analytics. Ensuring the accuracy and meaningful representation of data in charts may require understanding intricate business logic and data relationships.

    - Solution: Break down the data into meaningful segments and prioritize key metrics. Provide options for users to drill down into specific details. Use tooltips or additional information panels for complex data points.

- Testing and Debugging: Ensuring that charts function correctly under various scenarios, handling edge cases, and conducting thorough testing to identify and fix potential bugs.
    - Solution: Conduct comprehensive testing, including unit tests for individual chart components and end-to-end tests for the entire analytics page. Use debugging tools to identify and address any issues promptly. Collaborate closely with the QA team.

## Backend 
- Designed and optimized the database schema using Prisma and MySQL, ensuring efficient storage and retrieval of application data.

- Developed robust APIs for the E-commerce and Social Media components, facilitating seamless communication between the frontend and backend using Node.js and Nest.js.

- Implemented a secure authentication API, integrating JWT token-based authorization to enhance user access control and data security.

- Developed authorization guards to restrict access to specific functionalities, maintaining data security and ensuring compliance with user roles and permissions.

- Created comprehensive Product CRUD APIs for the E-commerce section, enabling seamless management and manipulation of product data.

- Worked closely with frontend developers to ensure seamless integration between the backend and frontend components, participating in sprint planning and daily stand-up meetings.

### Technologies
- Node JS, Nest JS, Express JS, Typescript, MySQL, Prisma, Websocket, Docker

### Challenges
- Complex Database Design:Designing a database schema that efficiently handles the complex relationships and data requirements of both the E-commerce and Social Media components.
    - Solution: Conduct a thorough analysis of data relationships, normalize the database schema, and leverage indexing and optimization techniques for efficient data retrieval.

- Data Consistency: Ensuring data consistency between the two servers, especially during transactions and payment processing.
    - Solution: Implement transactional mechanisms where applicable, use idempotent operations, and design APIs to handle potential failures or retries without causing data inconsistencies.

- Integrating and Displaying Transactions from Diverse Sources
    - Solution: To streamline the integration and display of transactions from diverse sources, a dynamic SQL query leveraging UNION ALL proves to be a versatile solution. Crafting a raw SQL query allows for dynamic adaptation to user requirements, facilitating the aggregation of transactions. By utilizing the UNION ALL operator, the query efficiently combines results from multiple tables without omitting duplicate rows, ensuring a comprehensive representation of transactions. This approach offers flexibility through parameterization, enabling users to tailor criteria such as date ranges or transaction types. The solution not only optimizes execution efficiency but also prioritizes error handling, security measures, and comprehensive documentation for ease of maintenance.


# 2. Make-Notion

## Description
Make-Notion, an innovative web-based application, is crafted with precision to revolutionize product data management in the cosmetics industry. This transformative platform is dedicated to simplifying the complex task of handling product information, empowering cosmetic companies to effortlessly manage, edit, and export product data in retailer-specific formats.

## Frontend 
- Designed and implemented a visually appealing and well-formatted product table, showcasing essential product data for user convenience.
- Implemented CRUD functionalities, enabling users to seamlessly add, edit, and delete products directly from the table.
- Developed user-friendly forms for manual addition of products, allowing users to input data effortlessly.
- Implemented search functionalities, allowing users to quickly locate specific products within the application.
- Worked on improving the overall user interface, focusing on responsiveness and user experience.

### Technologies
- React JS, Redux Tool Kit, React Router Dom, Axios, Typescript, Material-UI

### Challenges
- Challenge: Designing and implementing a complex UI for the product table that efficiently displays a large amount of product data while maintaining clarity and user-friendliness.
    - Solution: To simplify the intricate product table design, a streamlined approach was implemented. Each product was represented in a condensed single-row format, emphasizing essential information such as product name, ID, and key specifications. The challenge of accommodating a large amount of data was addressed by introducing an accordion detail view.

## Backend 
- Designed and implemented an efficient database schema using PostgreSQL to support the storage and retrieval of diverse product data.
- Developed robust backend APIs to facilitate CRUD operations (Create, Read, Update, Delete) for managing product data.
- Integrated the xlsx-populate library to extract data from Excel sheet uploaded by user, ensuring accurate parsing and storage in the database.
-Implemented a config-driven approach to dynamically insert data into selected Excel templates, ensuring flexibility and scalability in template management.
- Developed search functionalities to enable users to efficiently retrieve specific product data based on various search criteria.
- Implemented secure authentication mechanisms and fine-grained authorization controls to safeguard user access and data integrity.
- Implemented backend logic to handle the export of selected product data to different Excel templates, ensuring accuracy and alignment with frontend requirements.
- Contributed to the implementation of CI/CD pipelines, ensuring automated testing and deployment processes for efficient project delivery.

### Technologies
- Node JS, Nest JS, Typescript, Postgres, Prisma, Docker, Xlsx-Populate

### Challenges
- Challenge: Designing a flexible and dynamic system to handle various Excel templates with different structures and data requirements.
    - Solution: Implemented a config-driven approach, allowing dynamic template configurations based on user selections, ensuring adaptability to diverse export scenarios.

- Challenge: Extracting and processing data from Excel sheets uploaded by users in different formats, ensuring accurate parsing and storage in the database.
    - Solution: Integrated the xlsx-populate library to streamline the extraction process, ensuring consistent and reliable handling of Excel data.