import express, {Express} from 'express';
import cookieParser from 'cookie-parser';
import connection from './database/db'
import createTables from './models/createTables';
import taskRoutes from './modules/tasks/tasks.router';
import taskListRoutes from './modules/tasks-lists/tasks-list.router';
import taskOrderRoutes from './modules/tasks-order/tasks-order.router';

const app: Express = express();
const port = 3000;
connection.promise()

createTables()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/task', taskRoutes)
app.use('/taskList', taskListRoutes)
app.use('/taskOrder', taskOrderRoutes)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
