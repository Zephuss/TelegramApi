const express = require('express')
const app = express()
const port = 3000
const request = require('request')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });  
  
const token = "539100640:AAE3VkYQY-RW0RAHfxh2JzATGKLdGC437xM";
const channel = '-382631010'

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`))

const messagingService = async () => {
  


    function constructRequest(method, message) {
        return "https://api.telegram.org/bot" + token + '/' + method + "?chat_id=" + channel + "&text=" + message;
    }

    function actionsInTimer(action) {
        console.log(`initiated at: ${getTime()}`)
        const OneHour = 60*60*1000;
        setInterval(
            action, OneHour
        )
    }

    const getResource = (telegramRequest) => {
        return request(telegramRequest, function (error, response, body) {            
            console.log(`updated at: ${getTime()}`)
        })
    }
    
    function getTime() {
        var now = new Date();
        var nowTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        return nowTime;
    }
    
    async function processInput() {
        await readline.question('', (getInput) => {
            console.log('hi ', getInput)
            const input = getInput;
            if (Buffer.from(input).includes('/remind') === true) {
                    var method = 'sendMessage';
                    var message = input.replace('/remind ', '');
                    var telegramRequest = constructRequest(method, message);
                    actionsInTimer(() => getResource(telegramRequest));
            }

            // if (Buffer.from(input).includes('/stop') === true) {
            //         var method = ''
            // }

            readline.close();
        })
        
    }
    
    ///start execution



    await processInput();

}

messagingService();
