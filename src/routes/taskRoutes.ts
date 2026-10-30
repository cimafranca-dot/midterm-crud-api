import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

export const taskRoutes = Router();

taskRoutes.get('/users/:userId/tasks', TaskController.getUserTasks);
taskRoutes.post('/users/:userId/tasks', TaskController.createTask);
taskRoutes.delete('/tasks/:id', TaskController.deleteTask);
