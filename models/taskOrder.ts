import connection from '../database/db'

const createTaskOrderTable = async () => {
    const taskOrderTable = `CREATE TABLE IF NOT EXISTS
      task_order(
        id INT PRIMARY KEY AUTO_INCREMENT,
        task_list_id INT NOT NULL,
        task_id INT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
        CONSTRAINT FK_task_list FOREIGN KEY(task_list_id) REFERENCES task_list(id),
        CONSTRAINT FK_task FOREIGN KEY(task_id) REFERENCES task(id),
        UNIQUE (task_list_id, task_id)
      )`;

    try {
        await connection.promise().query(taskOrderTable);
    } catch (error) {
        console.log('createTaskOrderTable error =>', error)
    }
};

export default createTaskOrderTable;
