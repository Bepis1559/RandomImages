import Express from 'express';
export const userRouter = Express.Router()



const users = []


userRouter.post('/', (req, res) => {
    const body = req.body
    const userToAdd = {
        email: body.email,
        format: body.imageFormat,
        type: body.imageType
    }
    users.push(userToAdd)
    res.sendStatus(200)
})


userRouter.get('/:email', (req, res) => {
    const searchedUser = users.filter(el => el.email == req.params.email)
    res.status(200).send(searchedUser)
})

userRouter.get('/', (req, res) => {
    res.status(200).send(users)
})