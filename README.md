## automart-backend

## Decription
Auto Mart is an online marketplace for automobiles, with Auto Mart users posting their cars for sale.

A nodejs based REST application. The project will persist data to a mongodb database.

## Installation
- Clone the repository
  - > `git clone https://github.com/marusoft/automart-backend.git`

- Change to this directory
  - > `cd automart-backend`

- Install the projects dependencies
  - > `npm install`

- Install mongodb database locally or use mongodb atlas

  - > For [Mac user](https://zellwk.com/blog/install-mongodb), this is step by step instruction

  - > For [Window user](https://treehouse.github.io/installation-guides/windows/mongo-windows.html), this is step by step instruction

  - > For [Linux user](https://www.tutorialkart.com/mongodb/install-mongodb-on-ubuntu/), this is step by step instruction
  - > For mongoDb cloud Atlas [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

- Verify mongodb installation
  - > `mongo --version`

- To start mongodb service
  - > `sudo service mongod start` - Linux user
  - > `brew services start mongodb-community` - Mac user
  - > `C:\mongodb\bin\mongod.exe` - Window user

- Create local mongoDb database  
  - > run `mongo` for mongoDB shell
  - > run `use contact` to create a new database

- Include the new database in the connection string
  - > `mongodb://localhost:27017/databasename` in app.js
  - > `For mongodb atlas mongodb+srv://username:<password>@cluster0.9xdro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.


## Start Development
- To run your app server
  - > `npm start`

### API ENDPOINTS

#### API Routes

| URI                                       | HTTP Method | Description                              |
| ----------------------------------------- | ----------- | -----------------------------------------|
| <code>/api/car</code>                     | `POST`      | Users can post a car sale advertisement. |
| <code>/api/car/:_id</code>                | `GET`       | Users can view a specific car.           |
| <code>/api/car/:_id</code>                | `DELETE`    | Users can delete posts.                  |


### Deployment
[https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/](https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/)