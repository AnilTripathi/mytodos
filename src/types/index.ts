export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  assignDate: Date;
  dueDate: Date | null;
  priority: 'low' | 'medium' | 'high';
  completeDate: Date | null;
}