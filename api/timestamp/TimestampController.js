import { months } from 'constants.js';

export default class TimestampController {
  static getTimestamp(req, res) {
    let time = req.params.time;
    console.log(time);
    if(/\d+$/.test(time) || /\w+\s+\d{1,2}\s+\d{4}/.test(time)) {
      let date = new Date(time);
      res.sendJSON({
        unix: date.getTime(),
        natural: `${months[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`
      });
    }
      
    res.sendJSON(null);
  }
}