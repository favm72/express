import express from 'express'

let router = express.Router()

router.get('/create', (req, res, next) => {
	res.status(200).send({ response: true })
})

router.post('/create', (req, res, next) => {
	res.status(200).send({ response: true })
})

export default router;
