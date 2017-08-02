const monthNames = require('../../constants.js').monthNames;

class TimestampController {
  static getTimestamp(req, res) {
    let time = req.params.time;
    
    if(/\d+$/.test(time)) {
      res.json(this.createTimestampObj(time * 1000));
    } else if(/\w+\s+\d{1,2}\s+\d{4}/.test(time)) {
      res.json
    }
      
    res.json(null);
  }
  
  private createTimestampObj() {
    let date = new Date(time);
    return {
      unix: date.getTime(),
      natural: `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
  }
}

module.exports = TimestampController;