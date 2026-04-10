import { Task } from '../model/task.js'

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const newTask = new Task({ title, description })
    const savedTask = await newTask.save()
    res.status(201).json(savedTask)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, completed } = req.body

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      {
        returnDocument: 'after',
        runValidators: true,
      },
    )
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(updatedTask)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTask = await Task.findByIdAndDelete(id)
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json({ message: 'Task deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
