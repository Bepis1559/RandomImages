import Express from 'express';
import cors from 'cors'
import { userRouter } from './routes/users.js';
const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173' }))
app.use('/users', userRouter)
app.listen(5000, () => console.log('Items server started on port 5000'))
app.get('/', (req, res) => {
    res.status(200).json('Get request successful')
})