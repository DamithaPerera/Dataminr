import {Request, Response} from 'express';
import {
    createTaskListService,
    getAllTaskListService,
    getByIdTaskListService,
    updateByIdTaskListService,
    deleteByIdTaskListService
} from './tasks-list.service'

/**
 * createTaskListController
 * @param req
 * @param res
 */
const createTaskListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title, taskListId} = req.body;
        await createTaskListService(title, taskListId)
        res.status(201).send({message: 'taskList crated'});
    } catch (error) {
        console.log('createTaskListController Error', error);
        res.status(400).send(error);
    }
};

/**
 * getAllTaskListController
 * @param req
 * @param res
 */
const getAllTaskListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllTaskListService()
        res.status(200).json(data);
    } catch (error) {
        console.log('getAllTaskListController Error', error);
        res.status(400).send(error);
    }
};

/**
 * getByIdTaskListController
 * @param req
 * @param res
 */
const getByIdTaskListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const data = await getByIdTaskListService(id)
        res.status(200).json(data);
    } catch (error) {
        console.log('getByIdTaskListController Error', error);
        res.status(400).send(error);
    }
};

/**
 * updateByIdTaskListController
 * @param req
 * @param res
 */
const updateByIdTaskListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title} = req.body;
        const {id} = req.params;
        await updateByIdTaskListService(id, title)
        res.status(200).json({message: 'task updated'});
    } catch (error) {
        console.log('updateByIdTaskListController Error', error);
        res.status(400).send(error);
    }
};

/**
 * deleteByIdTaskListController
 * @param req
 * @param res
 */
const deleteByIdTaskListController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        await deleteByIdTaskListService(id)
        res.status(200).send({message: 'task deleted'});
    } catch (error) {
        console.log('deleteByIdTaskListController Error', error);
        res.status(400).send(error);
    }
};

export {
    createTaskListController,
    getAllTaskListController,
    getByIdTaskListController,
    updateByIdTaskListController,
    deleteByIdTaskListController
}
