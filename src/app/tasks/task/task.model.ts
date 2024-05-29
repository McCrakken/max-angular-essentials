export interface Task {
  dueDate: string,
  id: string,
  summary: string,
  title: string,
  userId: string,
}

export interface NewTaskData {
  title: string,
  summary: string,
  date: string,
}
