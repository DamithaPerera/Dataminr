import {
    createTaskRepo,
    getAllTaskRepo,
    getByIdTaskRepo,
    updateByIdTaskRepo,
    deleteByIdTaskRepo
} from './tasks.repository';

/**
 * createTaskService
 * @param title {String}
 */
const createTaskService = async (title: string) => {
    console.log('CreateTaskService Service');
    return await createTaskRepo(title)
};

/**
 * getAllTaskService
 */
const getAllTaskService = async () => {
    console.log('getAllTaskService Service');
    return getAllTaskRepo()
};

/**
 * getByIdTaskService
 * @param id {String}
 */
const getByIdTaskService = async (id: string) => {
    console.log('getAllTaskService Service');
    return getByIdTaskRepo(id)
};

/**
 * updateByIdTaskService
 * @param id {String}
 * @param title {String}
 */
const updateByIdTaskService = async (id: string, title: string) => {
    console.log('updateByIdTaskService Service');
    return updateByIdTaskRepo(id, title)
};

/**
 * deleteByIdTaskService
 * @param id {String}
 */
const deleteByIdTaskService = async (id: string) => {
    console.log('deleteByIdTaskService Service');
    return deleteByIdTaskRepo(id)
};

export {
    createTaskService,
    getAllTaskService,
    getByIdTaskService,
    updateByIdTaskService,
    deleteByIdTaskService
};
