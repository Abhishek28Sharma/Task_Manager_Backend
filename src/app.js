import express from 'express'
import cors from 'cors'
import taskRoutes from './route/task.router.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'https://taskgl.netlify.app/',
  }),
)
// write a route to serve the frontend build files and also handle API routes
// app.use(express.static('public'))

// app.use(express.static('dist'))
app.use('/', (req, res) => {
  res.send('API is running...')
})
app.use('/api', taskRoutes)

export default app
