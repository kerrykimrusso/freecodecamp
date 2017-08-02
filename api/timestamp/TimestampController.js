const monthNames = require('../../constants.js').monthNames;

class TimestampController {
  static getTimestamp(req, res) {
    let time = req.params.time;
    
    if(/^\d+$/.test(time)) {
      res.json(TimestampController.createTimestampObj(parseInt(time) * 1000));
    } else if(!isNaN(Date.parse(time))) {
      res.json(TimestampController.createTimestampObj(time));
    } else {
      res.json(TimestampController.createTimestampObj(null));
    }
  }
  
  static createTimestampObj(time) {
    if(!time) {
      return {
        unix: null,
        natural: null
      }
    }
    
    let date = new Date(time);
    return {
      unix: date.getTime(),
      natural: `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
  }
}

module.exports = TimestampController;