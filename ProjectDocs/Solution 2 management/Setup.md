# requirements

- sqlite (if you want the build the db yourself)
- sqlite cli tools (if you want the build the db yourself)
- dotnet cli

# creating the database

sqlite3

```
pushd solution-2/Migrations
sqlite3 -init Init.sql beans.db .quit
popd
```

# querying the beans table

```sql
pushd solution-2/Migrations
sqlite3 SELECT * FROM beans; .quit
popd
```

Notes:
if running macos you might have to navigate to the folders where the pushd command is being used.

# Allowing https

```
dotnet dev-certs https --trust
```

# Running the api

```
dotnet run --launch-profile https
```
