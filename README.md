# Welcome to Flight Service

## Project Setup
- clone the repo on your local
- execute 'npm i' on the same directory as your project
- create a '.env' file and add following data
  - `PORT=3000`
- in src create a 'config' folder and inside it create a 'config.json' and put the following data

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASS>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
## Database Setup

Once you've added your database configuration as listed above, go to the `src` folder from your terminal and execute:

```bash
npx sequelize db:create


```
## Database Design

-Airplane
-Flight
-Airport
-City


-A flight belongs to an airplane, but one airplane can be used in multiple flights.
-A city has many airports, but one airport belongs to a city.
-One airport can have many flights, but a flight belongs to one airport.