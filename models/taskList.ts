import connection from '../database/db'

const createTaskListTable = async () => {
    const taskListTable = `CREATE TABLE IF NOT EXISTS
      task_list(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(256) NOT NULL,
        list_order INT UNIQUE NOT NULL,
        deleted BOOLEAN NOT NULL DEFAULT false,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP()
      )`;

    try {
        await connection.promise().query(taskListTable);
    } catch (error) {
        console.log('createTaskListTable error =>', error)
    }
};

export default createTaskListTable;
