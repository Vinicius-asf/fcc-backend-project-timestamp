const {parseParamsDate} = require('../../services/parseParamsDate')

const getController = (req,res) => {
  console.log('Timestamp request')
  const date = req.params.date
  try {
    const timestamp = parseParamsDate(date);
    res.json(timestamp);
  } catch (e) {
    res.json({error:e.message})
  }
}



module.exports = {getController}