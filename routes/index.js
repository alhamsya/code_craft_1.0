var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.route('/catalog')
  .get(function (req, res) {
    var namaKecebong = []
    var catalog = {
      "catalogKecebong": [{
        "id": "001",
        "nama": "kecebong1",
        "berat": "10",
        "jenisKelamin": "Jantan"
      }, {
        "id": "002",
        "nama": "kecebong2",
        "berat": "11",
        "jenisKelamin": "Jantan"
      }, {
        "id": "003",
        "nama": "kecebong4",
        "berat": "13",
        "jenisKelamin": "Betina"
      }]

    }
    for (var i = 0; i < catalog.catalogKecebong.length; i++) {
      namaKecebong.push({
        "nama" : catalog.catalogKecebong[i].nama
      })
    }
    res.status(200).send(namaKecebong)
  })

module.exports = router;