import express, { Router } from 'express';

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.send('user router get root');
})
userRouter.get('/:id', (req, res) => {
    res.send('user router id' + req.params.id);
})
userRouter.post('/', (req, res) => {
    res.send('user router post /');
})

export { userRouter }
