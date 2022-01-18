let express = require('express');
let router = express.Router();
let dataDB = require('../data.json');

router.get('/', function (req, res, next) {
    console.log("======DB 전송중======");
    res.send(dataDB);
});

/*
router.get('/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10);
    console.log("========무비 쇼=========== id:"+ id);
    var movie = movies.filter(function (movie) {
        return movie.id === id
    });
    console.dir(movie);
    res.send(movie)
});
*/

module.exports = router;
