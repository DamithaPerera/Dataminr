import connection from '../../database/db';

/**
 * createTaskListRepo
 * @param data {String}
 * @param taskListId {Number}
 */
const createTaskListRepo = async (data: string, taskListId: number) => {
    console.log('createTaskListRepo')
    const query: string = `INSERT INTO task_list (title, list_order) VALUES (?,?)`;
    return connection.promise().query(query, [data, taskListId])
};

/**
 * getAllTaskListRepo
 */
const getAllTaskListRepo = async () => {
    console.log('createTaskRepo')
    const query: string = 'SELECT * FROM task_list WHERE deleted = false;';
    const data = await connection.promise().query(query)
    return data[0]
};

/**
 * getByIdTaskListRepo
 * @param id {String}
 */
const getByIdTaskListRepo = async (id: string) => {
    console.log('getByIdTaskListRepo')
    const query: string = 'SELECT * FROM task WHERE id=(?) AND deleted = false;';
    return connection.promise().query(query, [id])
};

/**
 * updateByIdTaskListRepo
 * @param id {String}
 * @param title {String}
 */
const updateByIdTaskListRepo = async (id: string, title: string) => {
    console.log('updateByIdTaskListRepo')
    const values = [title, id];
    const query: string = 'UPDATE task_list SET title = (?), updated_at = current_timestamp WHERE id = (?)';
    return connection.promise().query(query, values)
};

/**
 * deleteByIdTaskListRepo
 * @param id {String}
 */
const deleteByIdTaskListRepo = async (id: string) => {
    console.log('deleteByIdTaskService')
    const values = [true, id];
    const query: string = 'UPDATE task_list SET deleted = (?), updated_at = current_timestamp WHERE id = (?)';
    return connection.promise().query(query, values)
};

export {
    createTaskListRepo,
    getAllTaskListRepo,
    getByIdTaskListRepo,
    updateByIdTaskListRepo,
    deleteByIdTaskListRepo
};
