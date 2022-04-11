import {Request, Response} from 'express';
import {
    createTasksOrderService,
    getAllTasksOrderService
} from './tasks-order.service'

/**
 * addTaskToListController
 * @param req
 * @param res
 */
const addTaskToListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {taskId, taskListId} = req.body;
        await createTasksOrderService(taskId, taskListId)
        res.status(201).send('task added to task list');
    } catch (error) {
        console.log('createTasksOrderService Error', error);
        // @ts-ignore
        if (error.errno === 1062) {
            res.status(400).send({message: 'task already added to the list'});
        }
        res.status(400).send(error);
    }
};

/**
 * removeTaskFromListController
 * @param req
 * @param res
 */
const removeTaskFromListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {taskId, taskListId} = req.body;
        await getAllTasksOrderService(taskId, taskListId)
        res.status(200).send({message: 'task removed successfully from the list'})
    } catch (error) {
        console.log('getAllTaskListController Error', error);
        res.status(400).send(error);
    }
};

export {
    addTaskToListController,
    removeTaskFromListController
}
