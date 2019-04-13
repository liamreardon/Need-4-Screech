# COMP4770

## Getting Started

Make sure you have [node and npm installed](https://nodejs.org)

1. Clone this repository
2. `cd COMP4770`
3. `npm install`
4. `cp config-template.json config.json`
5. Set up your database (see the following subsection)
6. `npm run build` to bundle up the frontend
7. `npm run start` to run the server
8. Go to `localhost:3000`

### Setting up your Database

Primarily, you will need to have MongoDB installed on your machine, for your specific operating system.
If you **do** have the MongoDB server installed on your machine already, you can skip ahead to the steps below;
otherwise, please see [Installing MongoDB on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and follow the steps up until the "Run MongoDB Community Edition" section.

1. `sudo service mongod start` to start the mongodb daemon server
2. With your current working directory at the root of this repository, run `mongorestore --db need-for-screech ./db-snapshot` to populate your local database.

## Authors

Alaa, Liam, Moustafa, Vineel, Riley
