// controller file...
// const {
//   readActions
// } = require('../module/moduleView');
const axios = require('axios');
const fs = require('fs/promises');
var id = null;
class crudDbController {
  async clearFile(req, res) {
    try {
      fs.writeFile('C:/temp/capture.txt', '', () => { console.log('done') });
      console.log("file tozalandi");
      res.status(200).json({ result: true })
    } catch (err) {
      console.log(err);
    }
  }
  async loadFile(req, res) {
    try {
      console.log(req.query.logid);
      id = req.query.logid;
      res.sendFile('E:/feedback-control/remote control code backent/public/load.html');
      // if (req)
      // res.status(404).json({ result: 'error', data: 'Not found data' });
      // else
      // res.status(200).json({ result: 'ok', data: "salom" });
    } catch (ex) {
      res.status(500).json('Loadni yuklashda xartolik' + ex);
    }
  }
  async response(req, res) {
    try {

      const data = await fs.readFile('C:/temp/capture.txt', { encoding: 'utf8' });

      let array = data.split("");
      // console.log(array);
      let rating_status = null;
      for (let i = 0; i < array.length; i++) {
        if (/^\d+$/.test(array[i]))
          rating_status = array[i];
      }
      // console.log(rating_status);
      if (data) {
        // platformaga tayyor malumotlarni jo'natish...
        let response = await axios.get(`http://192.168.2.105:5869/api/raiting.php?logid=${id}&rating=${rating_status}`);
        let data = response.data;
        if (data["status"] == 1) {
          res.status(200).json({ result: true });
          fs.writeFile('C:/temp/capture.txt', '', () => { console.log('done') })
        } else {
          console.log("Malumotni platformaga jo'natishda xatolik!");
          res.status(200).json({ result: false });
        }
      } else {
        res.status(200).json({ result: false });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new crudDbController();