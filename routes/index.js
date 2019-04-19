
//const controller = require('../controllers');
const request = require('request')

const token = "539100640:AAGNX1fX8Xg-I36BLt2UZ1I1TSFZZfzmOsM";
const method = 'sendMessage'
const channel = '-382631010'
const message = 'Drink water'
const telegramRequest = "https://api.telegram.org/bot" + token + '/' + method + "?chat_id=" + channel + "&text=" + message;

//where we define our rest routes
module.exports = (app) => {
    app.get('/', putResourcesInTimer)
};

const putResourcesInTimer = () => {
    setInterval(
        getResource, 60*60*1000
    )
}
const getResource = async (req, res) => {
        try {
            request(telegramRequest, function (error, response, body) {
                //console.log('body: ', body);
                console.log(telegramRequest)
                console.log('response: ', response)
                console.log(error);
            })
            return res.status(200).send('success')
        }
        catch(error) {
            return res.status(404).send('error')
        }
    }