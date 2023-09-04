This is a base node js project template , which anyone can use as it has been prepared by keeping some of the best imp code principles and project management recommendations , feel free to change !!

// Best Practice

1. Keep files & folder segregated
2. Don't write entire busi logic in controllers
3. Import & Require always should at start.
4. Don't pass app obj everywhere , use express router obj

- `src` -> inside the src folder all the actual source code regarding the project will reside this will not include any kind of tests ( make separate)

- Inside the source folder -

- `config` -> in this folder anything and evrything regarding any configurations or setup of a library or module will be done , ex setup dotenv , so we can use env var anywhere , this is done in server-config file

- `routes` -> in this folder , we register routes and corresponding middlewares and controllers to it
  ex -> when we call /info route then InfController.info , this is a controller so it should execute

- `middlewares` -> they are just going to intercept the incoming request where we can write out validators , authenticaters etc

- `controllers` -> they are kind of the last middlewares as post them you call you busi layer to execute the busi logic , in controllers we just receive the incoming request and data then pass it to busi layer and once busi layer returns an output , we structure the api response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries , all the raw queries or ORM queries will go here.

- `services` -> contains the busi logic & interacts with repo for data from the db

- `utils` -> contains helper methods , error classes etc

### setup the project

- Download this template from github and open it in your fav text editior

- In the root directory create `.env` file & add in the following env variables

```
    PORT = < port_number>
```

Ex . `    PORT = 3000;
   `

// After sequelize
in config -> config.json
It has 3 environment
development , test , production
