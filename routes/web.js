
const NasaApiController = require('../http/controllers/NasaApiController');


function initWeb(app) {

    // get todays astronomy
    app.get('/', NasaApiController().getTodayAstronomy);

    // get astronomy by date
    app.get('/get-astronomy-by-date/:date', NasaApiController().getAstronomyByDate);

}

module.exports = initWeb;