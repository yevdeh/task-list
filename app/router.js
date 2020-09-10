const express = require('express')
const mongojs = require('mongojs')
const db = mongojs(process.env.MLAB_CONNECTION_STRING, ['tasks'])

const router = express.Router()
const options = {
	root: `${__dirname}/views/`
}

router.get('/auth', (req, res) => {
	res.sendFile('auth.html', options)
})

router.get('/', (req, res) => {
	res.sendFile('main.html', options)
})

router.get('/db-get', (req, res) => {
	db.tasks.find((err, docs) => {
		res.send(docs)
	})
})

router.post('/db-save', (req, res) => {
	req.body.forEach(task => {
		switch (task.dbRelation) {
			case 'new':
			case 'modified':
				db.tasks.save({
					_id: mongojs.ObjectId(task._id),
					isDone: task.isDone,
					name: task.name
				})
				break

			case 'deleted':
				db.tasks.remove({
					_id: mongojs.ObjectId(task._id)
				})
				break

			default:
				break
		}
	})
	res.sendStatus(200)
})

module.exports = router
