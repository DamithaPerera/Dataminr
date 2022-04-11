import ITaskList from './task-list';

interface IQueryResponse {
  data: ITaskList | ITaskList[]
}

export default IQueryResponse;
