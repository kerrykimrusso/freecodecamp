export default class TimestampController {
  static getTimestamp(req, res) {
    let time = req.params.time;
    if(/\d+$/.test(time) || /\w+\s+/.test(time)) {
      res.sendJSON();
    }
      
    res.sendJSON(null);
  }
}