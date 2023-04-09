import Express from 'express';
export const userRouter = Express.Router()



let users = []
const getUserByEmail = (req) => users.filter(el => el.email == req.params.email)

userRouter.post('/', (req, res) => {
    const body = req.body
    const userToAdd = {
        email: body.email,
        format: body.imageFormat,
        type: body.imageType,
        key: body.key
    }
    users.push(userToAdd)
    res.sendStatus(200)
})

userRouter.delete('/:email', (req, res) => {
    const userToDelete = getUserByEmail(req)[0]
    if (userToDelete.length === 0) return res.status(404).send("User not found");

    users = users.filter(user => user.email != userToDelete.email)
    res.sendStatus(200)

})

userRouter.get('/:email', (req, res) => {
    const searchedUser = getUserByEmail(req)
    res.status(200).send(searchedUser)
})

userRouter.get('/', (req, res) => {
    res.status(200).send(users)
})