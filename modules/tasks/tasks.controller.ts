import {Request, Response} from 'express';
import {
    createTaskService,
    getAllTaskService,
    getByIdTaskService,
    updateByIdTaskService,
    deleteByIdTaskService
} from './tasks.service'

/**
 * createTaskController
 * @param req
 * @param res
 */
const createTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title} = req.body;
        await createTaskService(title)
        res.status(201).send({message: 'task created'});
    } catch (error) {
        console.log('createTaskController Error', error);
        res.status(400).send(error);
    }
};

/**
 * getAllTaskController
 * @param req
 * @param res
 */
const getAllTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllTaskService()
        res.status(200).json(data[0]);
    } catch (error) {
        console.log('getAllTaskController Error', error);
        res.status(400).send(error);
    }
};

/**
 * getByIdTaskController
 * @param req
 * @param res
 */
const getByIdTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const data = await getByIdTaskService(id)
        res.status(200).json(data[0]);
    } catch (error) {
        console.log('getByIdTaskController Error', error);
        res.status(400).send(error);
    }
};

/**
 * updateByIdTaskController
 * @param req
 * @param res
 */
const updateByIdTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title} = req.body;
        const {id} = req.params;
        await updateByIdTaskService(id, title)
        res.status(200).send('task updated');
    } catch (error) {
        console.log('updateByIdTaskController Error', error);
        res.status(400).send(error);
    }
};

/**
 * deleteByIdTaskController
 * @param req
 * @param res
 */
const deleteByIdTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        await deleteByIdTaskService(id)
        res.status(200).send('task deleted');
    } catch (error) {
        console.log('deleteByIdTaskController Error', error);
        res.status(400).send(error);
    }
};

export {
    createTaskController,
    getAllTaskController,
    getByIdTaskController,
    updateByIdTaskController,
    deleteByIdTaskController
}
