

const fetch = require("node-fetch");
const API_KEY = "3zcWGA552K6ceRakoarychkrLRZrRReY1bbcAVXo";


function NasaApiController() {


    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    let maxDate = [year, month, day].join('-');
    // console.log(maxDate);


    return {

        getTodayAstronomy(req, res) {

            const nasaAstronomyToday = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

            fetch(nasaAstronomyToday)
                .then((res) => {
                    return res.json();
                }).then((jsonData) => {
                    console.log(jsonData);
                    res.render('home', { data: jsonData , maxDate:maxDate });
                }).catch((err) => {
                    console.log(err);
                });

        },

        getAstronomyByDate(req, res) {

            const nasaAstronomyByDate = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${req.params.date}&end_date=${req.params.date}`;

            fetch(nasaAstronomyByDate)
                .then((res) => {
                    return res.json();
                }).then((jsonData) => {
                    console.log(jsonData);
                    jsonData.forEach((data) => {
                        return res.json(data);
                    })
                }).catch((err) => {
                    console.log(err);
                });

        }
    }

}

module.exports = NasaApiController;