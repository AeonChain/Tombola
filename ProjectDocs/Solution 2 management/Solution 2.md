1. Design and implement a relational database schema to store the bean details from the JSON file provided. 
2. Create RESTful APIs to handle CRUD operations for coffee beans and Fetch the "Bean of the Day". 
3. Implement business logic to ensure: 
	- Each day, a new "Bean of the Day" is selected randomly from the available beans. 
	- The selected bean cannot be the same as the previous day. 
	- Implement a database search feature to show products available 
## 1
keeping in the theme of lightweight, looking into relational databases i think SQLite is a good fit.
## 2
dotnet is familiar and good packages to manage and talk to databases, wide support, out the box template for swagger
## 3
So i'll need the CRUD endpoints, looks like i'll be able to write a script along the lines of, ensuring that it's not the same as the previous, probably will need a lookup table? or something that records a list of days? not sure
```sql
SELECT * FROM table ORDER BY RANDOM() LIMIT 1 WHERE isBOTD IS false;
```
