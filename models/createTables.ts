import createTaskListTable from './taskList';
import createTaskTable from './task';
import createOrderTable from './taskOrder';

const createTables = async () => {
    try {
        await createTaskTable();
        await createTaskListTable();
        await createOrderTable();
    } catch (error) {
        console.log('createTables error =>', error)
    }
};

export default createTables;
