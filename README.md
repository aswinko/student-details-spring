Students Information Sysytem
Screenshot (498)

Install & Run
1. Setup Spring boot
2. Setup React js
3. Setup Mongodb
4. Clone the repo
5. Install Spring dependancy
Type the following commands:
cd /backend
./mvnw clean install
6. Install React packages
Type the following commands:
cd /frontend
npm install
7. Once the project is set up, please configure MongoDB credentials in the application.properties file. Open the application.properties file and add the following lines:
Type the following code in application.properties :
spring.data.mongodb.database=<DB-NAME>
spring.data.mongodb.uri=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>/
8. Run the Spring boot application:
Type the following command :
./mvnw spring-boot:run
9. Run the React application:
Type the following command :
npm start
