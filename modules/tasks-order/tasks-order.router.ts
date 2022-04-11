import {Router} from 'express';
import {
    addTaskToListController,
    removeTaskFromListController
} from './tasks-order.controller'
import {taskBody} from './tasks-order.validation'

const routes = Router();


routes.post('/addTask', taskBody, addTaskToListController);
routes.post('/removeTask', taskBody, removeTaskFromListController);


export default routes;
