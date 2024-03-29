# typescript-tasks
A FullStack Schedule Manager app to manage your tasks. Made with React + Typescript and MySQL + TypeORM.

Features: 
- You can add, update and delete your tasks
- Organize them based on their Priority & Completeion status
- Written in Typescript with Type Checks
- All your tasks are being stored in a database.

<img src="https://github.com/shabbirflow/typescript-tasks/assets/115451412/e0b45645-3992-41dc-a885-1f5e9ed0f350" width="90%"></img> 

  To run this app: Update the `.env` file in the `node-api` directory with your credentials as shown below. Make sure the name of MYSQL_DB is 'todo' :
```
PORT=3200
MYSQL_USER= root
MYSQL_PASSWORD= shabbirsql
MYSQL_DB= todo
```

Then, run the following commands to start the backend server :
```
cd node-api
npm run dev
```

Open a new terminal to start the frontend server : 
```
cd frontend
npm run dev
```

