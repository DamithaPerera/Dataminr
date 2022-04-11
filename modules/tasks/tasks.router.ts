import {Router} from 'express';
import {
    createTaskController,
    getAllTaskController,
    getByIdTaskController,
    updateByIdTaskController,
    deleteByIdTaskController
} from './tasks.controller'
import {taskBody} from './tasks.validation'

const routes = Router();


routes.post('/', taskBody, createTaskController);
routes.get('/', getAllTaskController);
routes.get('/:id', getByIdTaskController);
routes.put('/:id', taskBody, updateByIdTaskController);
routes.delete('/:id', deleteByIdTaskController);


export default routes;
