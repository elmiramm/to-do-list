const baseUrl = 'https://64980b429543ce0f49e1995a.mockapi.io/api/v1/tasks';
export const createTask = taskData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(taskData)
});
export const updateTask = (taskId, taskData) => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(taskData)
});
export const deleteTask = taskId => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'DELETE'
});
export const getTasksList = () => fetch(baseUrl).then(resoponse => resoponse.json());