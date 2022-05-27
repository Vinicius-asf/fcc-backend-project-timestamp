const express = require('express')
const router = express.Router()

const {getTimestamp} = require('./controllers/getTimestamp')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/:date', (req, res) => {
  console.log('Timestamp request')
  const timestamp = getTimestamp();
  res.json(timestamp);
})

module.exports = router