'use strict'

const voiceEvent = async (req, res, next) => {
    const { logger } = req.nexmo;
    try { 
        logger.info("event", { event: req.body});
        res.json({});
    } catch (err) {
        logger.error("Error on voiceEvent function")
    }
}

const voiceAnswer = async (req, res, next) => {
    const { logger } = req.nexmo;
    logger.info("req", { req_body: req.body});
    try {
        return res.json([
            {
                "action": "talk",
                "text": "Please wait while we connect you to the echo server"
            },
            {
                "action": "connect",
                "from": "NexmoTest",
                "endpoint": [{
                    "type": "websocket",
                    "uri": `wss://${req.hostname}/socket`,
                    "content-type": "audio/l16;rate=16000",
                }]
            }
        ]);
    } catch (err) {
        logger.error("Error on voiceAnswer function");
    }
}

const route = (app, express) => {
    const expressWs = require('express-ws')(app);
    const WebSocket = require('ws');
    
    expressWs.getWss().on('connection', function (ws) {
        console.log('Websocket connection is open');
    });

    // websocket middleware
    app.ws('/socket', (ws, req) => {
        ws.on('message', (msg) => {
            setTimeout(() => {
                if (ws.readyState === WebSocket.OPEN) ws.send(msg);
            }, 500); 
        });
    });
};

module.exports = {
    voiceEvent,
    voiceAnswer,
    route
}