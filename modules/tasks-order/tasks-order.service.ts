import {
    createTasksOrderRepo,
    getAllTasksOrderRepo
} from './tasks-order.repository';

/**
 * createTasksOrderService
 * @param taskId {Number}
 * @param taskListId {Number}
 */
const createTasksOrderService = async (taskId: number, taskListId: number) => {
    console.log('createTasksOrderService Service');
    return createTasksOrderRepo(taskId, taskListId)
};

/**
 * getAllTasksOrderService
 * @param taskId {Number}
 * @param taskListId {Number}
 */
const getAllTasksOrderService = async (taskId: number, taskListId: number) => {
    console.log('getAllTasksOrderService Service');
    return getAllTasksOrderRepo(taskId, taskListId)
};

export {
    createTasksOrderService,
    getAllTasksOrderService
};
