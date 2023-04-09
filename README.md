# Students Information System


![Screenshot (498)](https://user-images.githubusercontent.com/64721903/230758550-ce349ff4-5ec7-422b-83db-e8ee978ff496.png)

<h2>Install & Run</h2>
1. Setup Spring boot<br>
2. Setup React js<br>
3. Setup Mongodb<br>
4. Clone the repo<br>
5. Install Spring dependancy
  <ul><li>Type the following commands: <br>
    cd <repository-name>/backend <br>
    ./mvnw clean install</li>
   </ul>
6. Install React packages
  <ul>
  <li>Type the following commands: <br>
    cd <repository-name>/frontend <br>
    npm install</li>
  </ul>
7. Once the project is set up, please configure MongoDB credentials in the application.properties file. Open the application.properties file and add the following lines:
  <ul>
  <li>Type the following code in application.properties :<br>
    spring.data.mongodb.database=&lt;DB-NAME>
    <br>
    spring.data.mongodb.uri=mongodb+srv://&lt;USERNAME>:&lt;PASSWORD>@&lt;CLUSTER>/
   </li>
  </ul>
 8. Run the Spring boot application:
    <ul>
      <li>Type the following command : <br>./mvnw spring-boot:run</li>
    </ul>
 9.  Run the React application:
    <ul>
      <li>Type the following command : <br>npm start</li>
    </ul>


  
