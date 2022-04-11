import {
    createTaskListRepo,
    getAllTaskListRepo,
    getByIdTaskListRepo,
    updateByIdTaskListRepo,
    deleteByIdTaskListRepo
} from './tasks-list.repository';
import getTaskByTaskListId from "../../utilities/getTasksByTaskListId";

/**
 * createTaskListService
 * @param title {String}
 * @param taskListId {Number}
 */
const createTaskListService = async (title: string, taskListId: number) => {
    console.log('CreateTaskService Service');
    return createTaskListRepo(title, taskListId)
};

/**
 * getAllTaskListService
 */
const getAllTaskListService = async () => {
    console.log('getAllTaskListService Service');
    const res = await getAllTaskListRepo()
    const result = [];
    // @ts-ignore
    for (const row of res) {
        const {data} = await getTaskByTaskListId(row.id);
        result.push(data);
    }
    return result
};

/**
 * getByIdTaskListService
 * @param id {String}
 */
const getByIdTaskListService = async (id: string) => {
    console.log('getByIdTaskListService Service');
    const data = await getByIdTaskListRepo(id),
        tasks = await getTaskByTaskListId(Number(id));
    // @ts-ignore
    return tasks.data.length === 0 ? data[0] : tasks;
};

/**
 * updateByIdTaskListService
 * @param id {String}
 * @param title {String}
 */
const updateByIdTaskListService = async (id: string, title: string) => {
    console.log('updateByIdTaskService Service');
    return updateByIdTaskListRepo(id, title)
};

/**
 * deleteByIdTaskListService
 * @param id {String}
 */
const deleteByIdTaskListService = async (id: string) => {
    console.log('deleteByIdTaskService Service');
    return deleteByIdTaskListRepo(id)
};

export {
    createTaskListService,
    getAllTaskListService,
    getByIdTaskListService,
    updateByIdTaskListService,
    deleteByIdTaskListService
};
