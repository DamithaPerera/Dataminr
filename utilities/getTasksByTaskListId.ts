import connection from '../database/db';
import IQueryResponse from '../interfaces/common';
import formatTaskList from './formatTaskList';

const getTaskByTaskListId = async (taskListId: number): Promise<IQueryResponse> => {
    try {
        const query = `
    SELECT
      tl.title as task_list, t.title as task
    FROM
      task_list tl
    INNER JOIN task_order tor
      ON tl.id = tor.task_list_id
    INNER JOIN task t
      ON tor.task_id = t.id
    WHERE tl.id = (?)
    ORDER BY tor.created_at;`;
        const value = [taskListId];
        const result = await connection.promise().query(query, value);
        const formattedData = formatTaskList(result[0]);
        console.log('getTaskByTaskListId formattedData=>', formattedData);
        return {
            data: formattedData,
        };
    } catch (error) {
        console.log('getTaskByTaskListId error =>', error);
        return {
            data: [],
        };
    }
};

export default getTaskByTaskListId;
