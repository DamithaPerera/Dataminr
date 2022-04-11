import connection from '../../database/db';

/**
 * createTasksOrderRepo
 * @param taskId {Number}
 * @param taskListId {Number}
 */
const createTasksOrderRepo = async (taskId: number, taskListId: number) => {
    console.log('createTasksOrderRepo')
    const query: string = `INSERT INTO task_order(task_list_id, task_id) VALUES (?,?)`;
    return connection.promise().query(query, [taskListId, taskId])
};

/**
 * getAllTasksOrderRepo
 * @param taskId {Number}
 * @param taskListId {Number}
 */
const getAllTasksOrderRepo = async (taskId: number, taskListId: number) => {
    console.log('getAllTasksOrderRepo')
    const query: string = 'DELETE FROM task_order WHERE task_list_id = (?) AND task_id = (?)';
    return connection.promise().query(query, [taskListId, taskId])
};


export {
    createTasksOrderRepo,
    getAllTasksOrderRepo
};
