import express from 'express'
import cors from 'cors'
import taskRoutes from './route/task.router.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
  }),
)
app.use('/', (req, res) => {
  res.send('API is running...')
})
app.use('/api', taskRoutes)

export default app
