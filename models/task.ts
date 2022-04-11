import connection from '../database/db'

const createTaskTable = async () => {
    const taskTable = `CREATE TABLE IF NOT EXISTS
       task(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(256) NOT NULL,
        deleted BOOLEAN NOT NULL DEFAULT false,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP()
    )`;


    try {
        await connection.promise().query(taskTable);
    } catch (error) {
        console.log('createTaskTable error =>', error)
    }
};

export default createTaskTable;
