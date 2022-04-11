import ITaskList from '../interfaces/task-list';


const formatTaskList = (data: any): ITaskList => {
  const title: string = data[0].task_list;
  // @ts-ignore
  const temp = data.map((item) => item.task);
  return {
    title,
    tasks: temp,
  };
};

export default formatTaskList;
