import express from 'express'
import ClientBL from '../logiclayer/clientBL.js'

let router = express.Router()

router.get('/list', async (req, res, next) => {		
	const result = await ClientBL.list()
	res.status(200).send(result)	
})

router.post('/create', async (req, res, next) => {
	const result = await ClientBL.create(req.body)
	res.status(200).send(result)	
})

router.get('/kpis', async (req, res, next) => {
	const result = await ClientBL.kpis()
	res.status(200).send(result)	
})

export default router;
