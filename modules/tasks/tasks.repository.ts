import connection from '../../database/db';

/**
 * createTaskRepo
 * @param data {String}
 */
const createTaskRepo = async (data: string) => {
    console.log('createTaskRepo')
    const query: string = `INSERT INTO task (title) VALUES (?)`;
    return connection.promise().query(query, [data])
};

/**
 * getAllTaskRepo
 */
const getAllTaskRepo = async () => {
    console.log('createTaskRepo')
    const query: string = 'SELECT * FROM task WHERE deleted = false;';
    return connection.promise().query(query)
};

/**
 * getByIdTaskRepo
 * @param id {String}
 */
const getByIdTaskRepo = async (id: string) => {
    console.log('getByIdTaskRepo')
    const query: string = 'SELECT * FROM task WHERE id=(?) AND deleted = false;';
    return connection.promise().query(query, [id])
};

/**
 * updateByIdTaskRepo
 * @param id {String}
 * @param title {String}
 */
const updateByIdTaskRepo = async (id: string, title: string) => {
    console.log('updateByIdTaskService')
    const values = [title, id];
    const query: string = 'UPDATE task SET title = (?), updated_at = current_timestamp WHERE id = (?)';
    return connection.promise().query(query, values)
};

/**
 * deleteByIdTaskRepo
 * @param id {string}
 */
const deleteByIdTaskRepo = async (id: string) => {
    console.log('deleteByIdTaskService')
    const values = [true, id];
    const query: string = 'UPDATE task SET deleted = (?), updated_at = current_timestamp WHERE id = (?)';
    return connection.promise().query(query, values)
};

export {
    createTaskRepo,
    getAllTaskRepo,
    getByIdTaskRepo,
    updateByIdTaskRepo,
    deleteByIdTaskRepo
};
