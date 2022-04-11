import {Router} from 'express';
import {
    createTaskListController,
    getAllTaskListController,
    getByIdTaskListController,
    updateByIdTaskListController,
    deleteByIdTaskListController
} from './tasks-list.controller'
import {taskBody, taskListBody} from './tasks-list.validation'

const routes = Router();


routes.post('/', taskBody, createTaskListController);
routes.get('/', getAllTaskListController);
routes.get('/:id', getByIdTaskListController);
routes.put('/:id', taskListBody, updateByIdTaskListController);
routes.delete('/:id', deleteByIdTaskListController);


export default routes;
