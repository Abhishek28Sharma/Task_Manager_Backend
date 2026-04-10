import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from '../controllers/task.controller.js'

const router = Router()

router.post('/tasks', createTask) // Create a new task
router.get('/tasks', getAllTasks) // Get all tasks
router.patch('/tasks/:id', updateTask) // Update a task by ID
router.delete('/tasks/:id', deleteTask) // Delete a task by ID

export default router
